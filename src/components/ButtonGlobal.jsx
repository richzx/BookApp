import React from 'react'

function ButtonGlobal({ ...atributes }) {
  return (
    <button {...atributes} className='w-fit h-fit flex items-center gap-1.5 py-1.5 px-[14px] rounded-lg bg-03 text-04'></button>
  )
}

export default ButtonGlobal