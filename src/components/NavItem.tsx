interface NavItemProps {
  iconUrl: string
  text: string,
  isOpen: boolean
}

export default function NavItem({iconUrl, text, isOpen}: NavItemProps) {
  return (
    <div className='py-4 flex gap-6 items-center cursor-pointer'>
      <img className='w-7 filter-(--main-svg-filter) shrink-0' alt='ikona zakładki' src={iconUrl}/>
      <p className={`font-normal text-l transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>{text}</p>
    </div>
  )
}