interface NavItemProps {
  iconUrl: string
  text: string
}

export default function NavItem({iconUrl, text}: NavItemProps) {
  return (
    <div className='px-8 py-4 flex gap-6 items-center cursor-pointer'>
      <img className='w-7 filter-(--main-svg-filter)' alt='ikona zakładki' src={iconUrl}/>
      <p className='font-normal text-l'>{text}</p>
    </div>
  )
}