import { useState } from "react";

import defaultImage from '../assets/Nav/avatar-placeholder.png';
import threeDots from '../assets/Nav/more.svg';
import arrowBack from '../assets/Nav/arrow-back.svg'

import calendarIcon from '../assets/Nav/calendar.svg';
import servicesIcon from '../assets/Nav/services.svg';
import settingsIcon from '../assets/Nav/settings.svg';

import NavItem from "./NavItem.tsx";
import useUser from "../hooks/useUser.ts";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const { user } = useUser();

  return user && (
    <div
      className={`bg-white h-dvh relative shadow-md flex flex-col overflow-hidden transition-all duration-300
      ${isOpen ? 'w-lg' : 'w-18' }
      `}
    >
      <div className={`pb-12 pt-6 w-full flex justify-center`}>
        <div
          className={`${isOpen ? 'w-full': 'w-0 transition-all duration-300'}`}
        ></div>
        <img
          alt='zamknij'
          src={arrowBack}
          className={`filter-(--main-svg-filter) w-6 transition-transform mx-4
            ${isOpen && 'rotate-180'}`}
          onClick={() => setIsOpen(prev => !prev)}
        />
      </div>

      <div className='flex flex-col justify-between flex-1 py-4'>
        <div id='nav' className={'flex flex-col w-full justify-center overflow-hidden px-5'}>
          <NavItem iconUrl={calendarIcon} text='Kalendarz' isOpen={isOpen}/>
          <NavItem iconUrl={servicesIcon} text='Usługi' isOpen={isOpen}/>
          <NavItem iconUrl={settingsIcon} text='Ustawienia' isOpen={isOpen}/>
        </div>

        <div className={'flex items-center font-medium w-full py-3 px-4'}>
          <img
            alt='zdjęcie profilowe'
            src={defaultImage}
            className='w-9 shrink-0 rounded-full filter-(--main-svg-filter)'
          />
          <div className={`flex items-center overflow-hidden transition-all duration-300 
               ${isOpen ? 'w-full gap-4 ml-4 opacity-100' : 'w-0 ml-0 opacity-0'}`}>
            <div>
              { user.email }
            </div>
            <button className={`${!isOpen && 'hidden'} ml-auto shrink-0 pl-2`}>
              <img src={threeDots} alt='menu' className='filter-(--main-svg-filter)'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}