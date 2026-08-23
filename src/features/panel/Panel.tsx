import { Outlet } from "@tanstack/react-router";

import Nav from "./components/Nav.tsx";
import Header from "./components/Header.tsx";

export default function Panel() {
  return (
    <div className='flex bg-[#e9e9e9] w-full h-dvh'>
      <Nav/>
      <div className='flex flex-col w-full'>
        <Header/>
        <div className='m-4'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}