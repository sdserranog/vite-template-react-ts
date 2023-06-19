type Props = {
  left?: JSX.Element
  right?: JSX.Element
}

export const Header = (props: Props): JSX.Element => {
  const { left, right } = props

  return (
    <div className="sticky top-0 z-30 flex h-16 w-full justify-center bg-base-100 bg-opacity-90 text-base-content backdrop-blur transition-all duration-100">
      <nav className="navbar w-full">
        <div className="flex flex-1 md:gap-1 lg:gap-2">{left}</div>
        <div className="flex-0">{right}</div>
      </nav>
    </div>
  )
}

Header.displayName = 'Header'
