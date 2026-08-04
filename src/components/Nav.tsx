import defaultImage from '../assets/Nav/default_user.png';
import threeDots from '../assets/Nav/three_dots.svg';
import arrowBack from '../assets/Nav/arrow_back_icon.svg'

import calendarIcon from '../assets/Nav/calendar_icon.svg';
import servicesIcon from '../assets/Nav/services_icon.svg';
import settingsIcon from '../assets/Nav/settings_icon.svg';

import NavItem from "./NavItem.tsx";

export default function Nav() {
  for (const [key, value] of Object.entries(localStorage)) {
    console.log(`${key}: ${value}`);
  }

  return (
    <div className='w-lg bg-white h-dvh relative px-4 py-2 shadow-md flex flex-col'>
      <div className='flex justify-end pb-12 pt-4'>
        <img alt='zamknij' src={arrowBack} className='filter-(--main-svg-filter)'/>
      </div>

      <div className='flex flex-col justify-between flex-1'>
        <div id='nav'>
          <NavItem iconUrl={calendarIcon} text='Kalendarz'/>
          <NavItem iconUrl={servicesIcon} text='Usługi'/>
          <NavItem iconUrl={settingsIcon} text='Ustawienia'/>
        </div>

        <div className='flex gap-4 items-center font-medium p-6 w-full'>
          <img
            alt='zdjęcie profilowe'
            src={defaultImage}
            className='w-9 rounded-full filter-(--main-svg-filter)'
          />
          <div className=''>
            Marta Stefaniak
          </div>
          <button className='ml-auto'>
            <img src={threeDots} alt='menu' className='filter-(--main-svg-filter)'/>
          </button>
        </div>
      </div>
    </div>
  )
}