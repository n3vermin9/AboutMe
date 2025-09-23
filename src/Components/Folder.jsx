import React from 'react'

function Folder({ name , onClick , icon}) {

  return (
    <div id='folder' onClick={onClick} className={`
    w-[80px]
    h-[90px]
    font-normal
    text-[11px]
    text-white
    ${!icon ? 'bg-[url(https://cdn-icons-png.flaticon.com/512/6942/6942778.png)]': icon}
    bg-[length:70px]
    bg-no-repeat
    bg-top
    flex
    justify-center
    items-end
    cursor-pointer
    hover:filter hover:brightness-[1.13]
    transition-[filter] duration-100`}>
      {name}
    </div>
  )
}

export default Folder
