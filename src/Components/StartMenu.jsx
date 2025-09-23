import { Link } from "react-router-dom";

function StartMenu() {
  
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
    <div
     className='fade-up absolute m-auto bottom-8 left-0
    w-[300px] h-[400px] rounded-tr-md border-2 border-white
    bg-gradient-to-t from-[#839189ad] to-[#2d7c94b6]
    flex justify-start items-start flex-wrap
    transition-all duration-200 ease-in-out'>
      <button
      style={roundedEdge}
      className="
        w-24
        h-10
        border
        absolute
        left-2
        bottom-2
        rounded-md
        flex
        items-center
        justify-start
        pl-2
        text-sm
        text-white
        backdrop-blur-2
        hover:filter hover:brightness-[1.5]
        duration-200
      ">
        Turn off
        <div className="
          w-7
          h-7
          bg-[url(https://lh6.googleusercontent.com/proxy/bEF3XG9o7jRoidsqPQXbu3DrsIhLaDFNYeWuXPtvIPu7PRvIgLL73c2qsAufvOzUCYyEsEg8A5IKhHu5odahRFXC_1zsqEHXn7-xq5mbXZelYWwLQTMyGvRcV4ek6uNXrIXi9CFimMe-dg)]
          bg-no-repeat
          bg-cover
          absolute
          right-1
          top-0
          bottom-0
          m-auto">
          </div>
      </button>
      <Link to={'/'}>
        <button
          style={roundedEdge}
          className="
          w-24
          h-10
          border
          absolute
          left-2
          bottom-14
          rounded-md
          flex
          items-center
          justify-start
          pl-2
          text-sm
          text-white
          backdrop-blur-2
          hover:filter hover:brightness-[1.5]
          duration-200
        ">
          Log out
          <div className="
            w-7
            h-7
            bg-[url(https://icons.iconarchive.com/icons/hopstarter/puck/256/Windows-Log-Off-icon.png)]
            bg-no-repeat
            bg-cover
            absolute
            right-1
            top-0
            bottom-0
            m-auto">
            </div>
        </button>
      </Link>
    </div>
  );
}

export default StartMenu