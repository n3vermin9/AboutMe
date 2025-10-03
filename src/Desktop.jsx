import React, { useState } from 'react'
import Folder from './Components/Folder'
import Window from './Components/Window'
import StartMenu from './Components/StartMenu'
import StatusBar from './Components/StatusBar'
import GameMain from './PurblePlace/GameMain'
import '../src/App.css'

function Desktop() {
  const [windows, setWindows] = useState([]);
  const [openStart, setOpenStart] = useState(false)


  const handleOpenWindow = (name) => {
    if (!windows.some(win => win.id === name)) {
      setWindows([{ id: name, title: name }]);
    }
    handleOpenStart(false)
  };

  const handleCloseWindow = (id) => {
    setWindows(prev => prev.filter(win => win.id !== id));
  };

  const handleOpenStart = (res) => {
    setOpenStart(res)
  }

  return (
    <div className="fade-in flex items-center justify-center h-screen">
      <div className="absolute top-0 left-0 w-screen h-screen
        flex items-center justify-center
        bg-[url('https://external-preview.redd.it/uhq5zTcMPM3tOW_fbUz4PayDt_5pkEXdyXXoRWs3XOg.jpg?auto=webp&s=e06461124c1ccfdba7e9ece763b644ff68eeb06b')]
        bg-no-repeat bg-cover"
      >
        <div className="absolute top-4 left-4 flex flex-col gap-6">
          <Folder onClick={() => handleOpenWindow('Skills')} name='Skills' />
          <Folder onClick={() => handleOpenWindow('About me')} name='About me' />
          <Folder onClick={() => handleOpenWindow('Projects')} name='Projects' />
          <Folder onClick={() => handleOpenWindow('Purble place')} name='Purble place' icon={'bg-[url("https://www.speedrun.com/static/theme/qrjnx658/logo.png?v=46a9015")]'} />
        </div>

        {windows.map(win => (
          <Window
            key={win.id}
            title={win.title}
            onClose={() => handleCloseWindow(win.id)}
            game={<GameMain />}
          ></Window>
        ))}
        {/* taskbar */}
        <div className="absolute w-full h-8 bottom-0 flex items-center
        bg-gradient-to-t from-[#1d4146] to-[#65a6d1de]">
          <div onClick={() => handleOpenStart(prev => !prev)}
          className="border-2 rounded-full absolute left-0 h-8
          w-8
          bg-[url(https://upload.wikimedia.org/wikipedia/ru/c/cc/Windows_Media_Center_logo.png)]
          bg-cover
          hover:filter hover:brightness-[1.7]
          duration-200">
          </div>
        {windows.map(win => (
          <div
            key={win.id}
            className='h-7 w-40 border-2 ml-10 rounded-sm
            bg-gradient-to-t from-[#2d676e] to-[#96d5ff]
            text-white text-xs flex items-center p-2'
          >{win.title}</div>
        ))}
        </div>
      </div>
        <StatusBar>w</StatusBar>
      {openStart && <StartMenu />}
    </div>
  )
}

export default Desktop;