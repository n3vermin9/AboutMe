import React from 'react';

function Picture({ title, image, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: '50px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: title.slice(-3) === 'png' ? 'white' : 'initial'
      }}
      className='
        fade-in
        relative
        w-[61px]
        h-[70px]
        font-normal
        mb-4
        text-[13px]
        text-white
        flex
        text-wrap

        justify-center
        items-end
        cursor-pointer
        hover:filter hover:brightness-[1.13]
        transition-[filter] duration-100'>
      <p className='absolute text-[11px] bottom-[-35px] text-center w-[71px] h-6 text-wrap break-words'>{title}</p>
    </div>
  );
}

export default Picture;