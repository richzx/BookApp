import React, { useState } from 'react'
import database from '../db/database.json'
import { TiHeartFullOutline, TiHeartOutline } from 'react-icons/ti'
import { FaStar } from 'react-icons/fa'
import ButtonGlobal from './ButtonGlobal.jsx'
import { PiBookOpenLight } from 'react-icons/pi'

// button or new book
function ButtonNew({ ...atributes }) {
  return (
    <button {...atributes} className='w-fit h-fit text-xs text-03 pt-0.5 pb-[3px] px-[14px] rounded-full bg-07'>Nuevo</button>
  )
}

// button or category of card
function ButtonCategory({ ...atributes }) {
  return (
    <button {...atributes} className='text-xs text-03 pt-0.5 pb-[3px] px-[14px] rounded-full bg-09'></button>
  )
}

function Books() {
  const [clickFavorite, setClickFavorite] = useState(false);
  function onClickFavorite() {
    setClickFavorite(!clickFavorite);
  }

  // Hook filter
  const [filterData, setFilterData] = useState('');

  // Data Filter
  const results = !filterData ? database : database.filter((dato) => dato.name.toLowerCase().includes(filterData.toLocaleLowerCase()));

  return (
    <>
      <div className='w-full flex justify-end md:justify-between items-center'>
        <div className='hidden md:flex gap-1.5'>
          <ButtonGlobal>
            <PiBookOpenLight size={16} className='text-04' />
            Estrenos
          </ButtonGlobal>
          <ButtonGlobal>
            <FaStar size={16} className='text-05' />
            Populares
          </ButtonGlobal>
        </div>
        <input type="text" onChange={e => setFilterData(e.target.value)} placeholder='Busca tu libro...' className='w-full max-w-[220px] lg:max-w-[250px] text-lg bg-transparent placeholder:text-03 text-03 border border-03 rounded-full py-2.5 px-5 outline-none' />
      </div>

      <div className='pt-[30px] flex flex-wrap justify-around gap-y-5'>
        {results.map(data => (
          <div key={data.id} className='relative w-full max-w-[260px] md:max-w-[300px] bg-03 text-04 rounded-b-xl rounded-t-2xl'>
            <div className='absolute w-full flex justify-between items-center p-2.5'>
              {data.new ? <ButtonNew /> : null}
              <button onClick={onClickFavorite} className='p-2 rounded-full bg-03'>
                {clickFavorite ? <TiHeartFullOutline size={20} className='text-02' /> : <TiHeartOutline size={20} className='text-04 hover:text-02' />}
              </button>
            </div>

            <img src={data.image} alt="" className='object-cover w-full h-[180px] rounded-t-xl' />

            <div className='flex flex-col gap-2 p-6'>
              <div className='flex flex-col gap-1.5'>
                <div className='w-full flex items-center justify-between'>
                  <h2 className='text-base text-09 font-bold'>{data.stars}/10</h2>
                  {/* <div className='flex gap-0.5'>
                    <FaStar size={15} className='text-05' />
                  </div> */}
                  <span className='text-base'>2024</span>
                </div>
                <h2 className='text-[26px] font-bold line-clamp-1'>{data.name}</h2>
                <p className='text-base line-clamp-3'>{data.description}</p>
              </div>
              <div className='w-full overflow-x-scroll overflow-hidden flex gap-[6px]'>
                {data.categories.map(item => (
                  <ButtonCategory>{item}</ButtonCategory>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Books