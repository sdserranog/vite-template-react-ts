type IFetchApi = {
  get: <T>(path: string, config?: RequestConfig) => Promise<T>
  post: <T>(body: Record<string, unknown>, config?: RequestConfig) => Promise<T>
  put: <T>(body: Record<string, unknown>, config?: RequestConfig) => Promise<T>
  delete: <T>(path: string, config?: RequestConfig) => Promise<T>
}

type RequestConfig = Partial<RequestInit> & {
  params?: Record<string, unknown>
}

class FetchApi implements IFetchApi {
  private readonly API_URL: string

  constructor(API_URL: string) {
    this.API_URL = API_URL
  }

  private async request<T>(path: string, config?: RequestConfig): Promise<T> {
    const url = new URL(path, this.API_URL)
    if (config?.params) {
      Object.keys(config.params).forEach((key) => {
        url.searchParams.append(key, String(config.params?.[key]))
      })
    }
    const response = await fetch(url.toString(), {
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      },
      ...config,
    })
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`)
    }
    try {
      const data = await response.json()
      return data
    } catch (error) {
      throw new Error('Error parsing JSON')
    }
  }

  public async get<T>(path: string, config?: RequestConfig): Promise<T> {
    return await this.request<T>(path, config)
  }

  public async post<T>(
    body: Record<string, unknown>,
    config?: RequestConfig
  ): Promise<T> {
    const requestConfig: RequestConfig = {
      ...config,
      body: JSON.stringify(body),
      method: 'POST',
    }
    return await this.request<T>('', requestConfig)
  }

  public async put<T>(
    body: Record<string, unknown>,
    config?: RequestConfig
  ): Promise<T> {
    const requestConfig: RequestConfig = {
      ...config,
      body: JSON.stringify(body),
      method: 'PUT',
    }
    return await this.request<T>('', requestConfig)
  }

  public async delete<T>(path: string, config?: RequestConfig): Promise<T> {
    const requestConfig: RequestConfig = {
      ...config,
      method: 'DELETE',
    }
    return await this.request<T>(path, requestConfig)
  }
}

const BASE_URL: string = import.meta.env.VITE_API_URL

export const client = new FetchApi(BASE_URL)
