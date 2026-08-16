import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import { ScaleLoader } from "react-spinners";

import defaultImage from '../assets/Nav/avatar-placeholder.png';
import threeDots from '../assets/Nav/more.svg';
import arrowBack from '../assets/Nav/arrow-back.svg'

import calendarIcon from '../assets/Nav/calendar.svg';
import servicesIcon from '../assets/Nav/services.svg';
import settingsIcon from '../assets/Nav/settings.svg';

import NavItem from "./NavItem.tsx";
import useUser from "../hooks/useUser.ts";
import { supabase } from "../lib/supabase.ts";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const threeDotsRef = useRef<HTMLButtonElement>(null);

  const { user } = useUser();

  const navigate = useNavigate();

  const logout = async () => {
    await supabase.auth.signOut();
    return navigate({ to: '/login' });
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node) && threeDotsRef.current && !threeDotsRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMenuOpen]);

  return (
    <div
      className={`bg-white h-dvh relative shadow-md flex flex-col overflow-hidden transition-all duration-300
      ${isOpen ? 'w-88' : 'w-18' }
      `}
    >
      <div className={`pb-12 pt-6 w-full flex justify-center`}>
        <div
          className={`${isOpen ? 'w-full': 'w-0 transition-all duration-300'}`}
        ></div>
        <img
          alt='zamknij'
          src={arrowBack}
          className={`filter-(--main-svg-filter) w-6 transition-transform mx-4 cursor-pointer
            ${isOpen && 'rotate-180'}`}
          onClick={() => {setIsOpen(prev => !prev); setIsMenuOpen(false)}}
        />
      </div>

      <div className='flex flex-col justify-between flex-1 py-4'>
        <div id='nav' className={'flex flex-col w-full justify-center overflow-hidden px-5'}>
          <NavItem iconUrl={calendarIcon} text='Kalendarz' navigateUrl={'/panel/calendar'} isNavOpen={isOpen}/>
          <NavItem iconUrl={servicesIcon} text='Usługi' navigateUrl={'/panel/services'} isNavOpen={isOpen}/>
          <NavItem iconUrl={settingsIcon} text='Ustawienia' navigateUrl={'/panel/settings'} isNavOpen={isOpen}/>
        </div>

        <div className='flex items-center font-medium w-full my-3 px-4 relative'>
          <Link
            to={'/panel/profile'}
            className='shrink-0 box-border border-transparent border rounded-full'
            activeProps={{
              className: '!border-(--active-color)'
            }}
          >
            <img
              alt='zdjęcie profilowe'
              src={defaultImage}
              className='w-10 shrink-0 rounded-full filter-(--main-svg-filter) cursor-pointer box-border border-transparent border'
            />
          </Link>
          <div className={`flex h-full overflow-hidden transition-all duration-300
               ${isOpen ? 'w-full gap-4 opacity-100' : 'w-0 ml-0 opacity-0'}`}>
            <Link
              to={'/panel/profile'}
              className='cursor-pointer h-full flex items-center pl-6'
            >
              { user ? user.email : <ScaleLoader height={15} color={'#9807ff'}/> }
            </Link>
            <button className={`${!isOpen && 'hidden'} ml-auto shrink-0`} ref={threeDotsRef} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img src={threeDots} alt='menu' className='filter-(--main-svg-filter) cursor-pointer'/>
            </button>
          </div>
          {
            isOpen && (
              <div
                ref={menuRef}
                onClick={logout}
                className={`absolute right-3 font-semibold -top-11 text-sm border border-(--main-color) box-border px-4 py-2.5 cursor-pointer rounded-sm transition-all duration-100 
                ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
              >
                WYLOGUJ
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}