import React from 'react'
import churchImg from '../imgs/church.png'
import bakeryImg from '../imgs/bakery.png'
import storeImg from '../imgs/store.png'

function GameMain() {
  return (
    <div>
      <div className='h-[471px] 
        w-[748px]
        bg-[url("https://i.pinimg.com/736x/90/a0/7e/90a07e533e66fab30d718490301e2150.jpg")]
        bg-contain
        bg-no-repeat
        overflow-hidden
        border
        absolute
        rounded-b-md`
        top-[-66px]
        left-[-17px]'>
          <button className={`
          w-[173px]
          h-[190px]
          absolute
          top-[102px]
          left-4
          bg-[url('${churchImg}')]
          bg-contain
          bg-no-repeat
          hover:scale-105
          hover:brightness-125
          duration-200
          `}></button>
        <button className={`
          w-[318px]
          h-[210px]
          absolute
          top-[161px]
          left-[156px]
          bg-[url('${bakeryImg}')]
          bg-contain
          bg-no-repeat
          hover:scale-105
          hover:brightness-125
          duration-200
          `}></button>
        <button className={`
          w-[282px]
          h-[230px]
          absolute
          top-[134px]
          right-[-6px]
          bg-[url('${storeImg}')]
          bg-contain
          bg-no-repeat
          hover:scale-105
          hover:brightness-125
          duration-200
          `}></button>
      </div>
    </div>
  )
}

export default GameMain