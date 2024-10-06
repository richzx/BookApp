import React, { useState } from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { RiUserLine } from 'react-icons/ri';
import { TiHeartFullOutline } from 'react-icons/ti';

function ButtonLink({ ...attributes }) {
  return (
    <button {...attributes} className='w-[180px] p-2.5 text-lg text-04 hover:bg-slate-200 flex gap-2.5 items-center justify-start rounded-[10px]'></button>
  )
}

function Navbar() {
  // Hooks navbar
  const [viewNav, setViewNav] = useState(false);
  function onClickNavbar() {
    setViewNav(!viewNav);
  }
  const Navbar = (
    <header className='absolute z-10 right-5 lg:right-[60px] mt-14'>
      <nav className='flex flex-col gap-0.5 p-5 bg-03 rounded-[20px]'>
        <ButtonLink to='/app/inicio' onClick={onClickNavbar}>
          <RiUserLine size={20} />
          Inicio
        </ButtonLink>
        <ButtonLink to='/app/favoritos' onClick={onClickNavbar}>
          <TiHeartFullOutline size={20} className='text-02' />
          Favoritos
        </ButtonLink>
        <div className='w-full pt-[1px] bg-04 rounded-full' />
        <ButtonLink to='/calificacion' onClick={onClickNavbar}>
          <FaStar size={20} className='text-05' />
          Calificanos
        </ButtonLink>
        <ButtonLink to='/nosotros' onClick={onClickNavbar}>
          <AiOutlineExclamationCircle size={20} />
          Nosotros
        </ButtonLink>
        <a href='#' className='w-full p-2.5 text-lg text-03 bg-02 focus:ring-4 focus:ring-red-200 flex gap-2.5 items-center justify-center rounded-[10px]'>Cerrar sesión</a>
      </nav>
    </header>
  )

  return (
    <header className='w-full pt-[30px] px-5 lg:px-[60px]'>
      <nav className='w-full flex justify-between'>
        <h1 className='text-3xl text-03 font-bold'>BookApp</h1>
        <button onClick={onClickNavbar} className='active:focus:ring-4 focus:ring-slate-300 focus:rounded-full'>
          <img src="/avatar.webp" alt="" width={46} height={46} />
        </button>

        {viewNav && Navbar}
      </nav>
    </header>
  )
}

export default Navbar