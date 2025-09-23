import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

  const roundedEdge = {
    borderTop: '2px solid #ffffff50',
    borderBottom: '2px solid #ffffff80',
    borderRight: '2px solid #ffffff40',
    borderLeft: '2px solid #ffffff20',
    boxShadow: '0px -5px 26px -2px rgba(34, 60, 80, 0.22)',
    borderRadius: '50% / 10%',
    backdropFilter: 'blur(4px)'
  };

  return (
    <div className="appear absolute top-0 left-0 w-screen h-screen
    flex items-center justify-center
    bg-[url('https://external-preview.redd.it/uhq5zTcMPM3tOW_fbUz4PayDt_5pkEXdyXXoRWs3XOg.jpg?auto=webp&s=e06461124c1ccfdba7e9ece763b644ff68eeb06b')]
    bg-no-repeat bg-cover"
    >
        <div className='w-[400px] h-[290px] relative'
        style={roundedEdge}>

        <div className='w-[110px] h-[110px] absolute
          top-[-50px] right-0 left-0 m-auto
          bg-[url(https://img1.picmix.com/output/stamp/normal/1/0/7/5/2465701_e19ae.png)]
          bg-[size:70px] bg-center bg-no-repeat'
          style={roundedEdge}>
        </div>

        <div className="absolute right-0 left-0 top-20 m-auto w-40 text-center text-white">
          Select user
        </div>

        <Link to={'/desktop'}>

        <div className='w-[340px] h-[110px] absolute text-white pr-10 text-xl
         bottom-[40px] right-0 left-0 m-auto flex items-center justify-center
         hover:scale-105 duration-100'
          style={roundedEdge}>
            NvrPc

          <div className='w-[80px] h-[80px] absolute flex items-center justify-center
            top-0 bottom-0 left-[10px] m-auto'
            style={roundedEdge}>
              <div className="w-[60px] h-[60px] rounded-lg border
              bg-[url(https://i.pinimg.com/236x/73/e5/06/73e506e232b9491c4240e4c5b5b05546.jpg)]
              bg-cover bg-center bg-no-repeat"></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Login