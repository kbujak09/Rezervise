import { Link } from "@tanstack/react-router";

interface NavItemProps {
  iconUrl: string
  text: string
  navigateUrl: string
  isNavOpen: boolean
}

export default function NavItem({iconUrl, text, navigateUrl, isNavOpen}: NavItemProps) {

  return (
    <Link
      to={navigateUrl}
      className='py-4 flex gap-6 items-center cursor-pointer'
      inactiveProps={{
        className: 'filter-(--main-svg-filter)'
      }}
      activeProps={{
        className: 'filter-(--active-svg-filter) transition-all scale-101 duration-150'
      }}
    >
      <img className='w-7 shrink-0' alt='ikona zakładki' src={iconUrl}/>
      <p className={`font-normal text-l transition-all duration-300 ${isNavOpen ? 'opacity-100' : 'opacity-0'}`}>{text}</p>
    </Link>
  )
}