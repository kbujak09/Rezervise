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
      className='py-4 flex gap-6 items-center cursor-pointer px-5'
      inactiveProps={{
        className: '[&>img]:filter-(--main-svg-filter) [&>p]:!text-(--main-color)'
      }}
      activeProps={{
        className: '[&>img]:filter-(--active-svg-filter) [&>p]:!text-(--active-color) bg-(--active-color)/6'
      }}
    >
      <img className='w-7 shrink-0 ml-0.5' alt='ikona zakładki' src={iconUrl}/>
      <p className={`font-normal text-l transition-all duration-300 ${isNavOpen ? 'opacity-100' : 'opacity-0'}`}>{text}</p>
    </Link>
  )
}