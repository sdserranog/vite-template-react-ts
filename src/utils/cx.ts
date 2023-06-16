/**
 * Filters all arguments for truthiness and then joins as an array
 *
 * Used primarily for classes on dom nodes
 */
export const cx = (...args: unknown[]): string => args.filter(Boolean).join(' ')
