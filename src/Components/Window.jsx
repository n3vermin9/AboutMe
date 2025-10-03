import { useState } from "react";
import Picture from "./Picture";
import Folder from "./Folder";

import casinoMainPng from "../imgs/casino_main.png";
import casinoSlotsPng from "../imgs/casino_slots.png";
import casinoHistoryPng from "../imgs/casino_history.png";
import casinoGameplayPng from "../imgs/casino_gameplay.png";

import iShopMainPng from "../imgs/iShop_main.png";
import iShopCartPng from "../imgs/iShop_cart.png";
import iShopPayPng from "../imgs/iShop_pay.png";

function Window({ title, onClose, game }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSection, setCurrentSection] = useState("main");

  const skillsArr = [
    {
      id: 1,
      name: "HTML.png",
      link: "https://mblogthumb-phinf.pstatic.net/MjAyNDA0MTlfMjMy/MDAxNzEzNDkyMzE3NDI4.SMN9SlM9LP5HVZtKz9kLALPHPHkBAd7iLdDqjAL-RPQg.4vVlEX40IZ3jqEPYYjKzJDzPxaz0aEsTAwEWhHoJ0tog.PNG/html_%EB%A1%9C%EA%B3%A0.png?type=w800",
    },
    {
      id: 2,
      name: "CSS.png",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSix0fVCETDxyMRq4yydbHAcPa550SodMU7RQ&s",
    },
    {
      id: 3,
      name: "JS.png",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
      id: 4,
      name: "React.png",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png",
    },
    {
      id: 5,
      name: "Tailwind.png",
      link: "https://www.drupal.org/files/project-images/screenshot_361.png",
    },
    {
      id: 6,
      name: "Git.png",
      link: "https://cdn.prod.website-files.com/5f10ed4c0ebf7221fb5661a5/5f2f630735aafe2300802edd_git-logo.png",
    },
  ];

  const aboutArr = [
    {
      id: 1,
      name: "bio.txt",
      link: "https://upload.wikimedia.org/wikipedia/commons/2/23/Text-txt.svg",
      content: `"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, itaque eius officia nesciunt et dicta ad ut quisquam. Debitis neque, rerum saepe, minus similique id laborum consequatur fugit eius nemo provident rem eos pariatur, aspernatur vero. Libero quas officia qui quasi quibusdam ipsum corrupti voluptatibus adipisci blanditiis autem, aliquam laboriosam velit tenetur nemo reprehenderit voluptatem? Neque quo necessitatibus, accusamus totam placeat distinctio possimus aliquam ab saepe cumque ad vel magnam nobis temporibus error officia excepturi quas consequuntur facilis, cum architecto? Quidem cum consequuntur corporis, quos repudiandae nemo, ad ipsum ipsa dignissimos aspernatur aperiam animi officia illo amet quaerat id enim quasi explicabo inventore vero? At, consequuntur quisquam! Cumque quas ea repudiandae voluptates ipsa sit reprehenderit deleniti quaerat maiores neque, dolore ratione commodi, illo quisquam unde nemo est totam voluptatum temporibus. Delectus nisi saepe sunt! Placeat assumenda praesentium cumque libero ex voluptate debitis cum commodi qui reprehenderit, eveniet consequatur fugiat sed deleniti magnam repellat beatae? Ducimus ad maiores vel nisi unde reiciendis et ipsa sapiente? Praesentium, earum. Maxime, similique itaque aspernatur sed autem dignissimos, consequatur quibusdam odio quis excepturi facilis esse id velit fugiat perferendis libero asperiores et sint veritatis cupiditate explicabo numquam exercitationem ratione suscipit. Repudiandae praesentium quod autem saepe.`,
    },
    {
      id: 2,
      name: "me.png",
      link: "https://i.pinimg.com/736x/e1/17/47/e1174700706a7d903dd1960a7762702b.jpg",
    },
  ];

  const projectsArr = [
    { id: 1, name: "nvrCasino", link: "" },
    { id: 2, name: "iShop", link: "" },
  ];

  const casinoArr = [
    {
      id: 1,
      name: "readme.txt",
      link: "https://upload.wikimedia.org/wikipedia/commons/2/23/Text-txt.svg",
      content: `A self-contained, front-end casino simulator built with pure client-side technologies. This project delivers the full experience of six popular casino games in the browser, with no backend server required.`,
    },
    { id: 2, name: "Casino_main.png", link: casinoMainPng },
    { id: 3, name: "Casino_slots.png", link: casinoSlotsPng },
    { id: 4, name: "Casino_history.png", link: casinoHistoryPng },
    { id: 5, name: "Casino_gameplay.png", link: casinoGameplayPng },
  ];

  const iShopArr = [
    {
      id: 1,
      name: "readme.txt",
      link: "https://upload.wikimedia.org/wikipedia/commons/2/23/Text-txt.svg",
      content: `A responsive React web application for selling phones. Features include product listing, detailed views, shopping cart, payment, routing, and styling with Tailwind CSS. All data is stored locally without any API calls.`,
    },
    { id: 2, name: "Casino_main.png", link: iShopMainPng },
    { id: 3, name: "Casino_slots.png", link: iShopCartPng },
    { id: 3, name: "Casino_slots.png", link: iShopPayPng },
  ];

  const handlePictureClick = (link, name, content) => {
    setSelectedImage({ link, name, content });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFolderClick = (folderName) => {
    setCurrentSection(folderName);
  };

  const goBack = () => {
    setCurrentSection("main");
  };

  return (
    <div
      className={`fade-in absolute m-auto top-0 bottom-0 right-0 left-0
      ${
        title === "Purble place" ? "h-[495px] w-[750px]" : "h-[400px] w-[500px]"
      } rounded-lg border-2 border-white
      bg-gradient-to-t from-[#8391897a] to-[#2d947cb6]
      flex justify-start items-start  gap-5 flex-wrap
      transition-all duration-200 ease-in-out pt-12 pl-4`}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="absolute top-0 left-0 w-full h-[23px] text-white pl-2 text-[12px] flex items-center bg-gradient-to-t from-[#58866c60] to-[#01d6a43d] border-b border-white rounded-t-[4px]">
          {title}
        </span>
        {title !== "Purble place" && (
          <span className="absolute top-[24px] left-0 w-full h-[43px] text-white pl-2 text-sm flex items-center bg-gradient-to-t from-[#78867e3d] to-[#2e7c6a3d] border-b border-white rounded-t-[4px]">
            {currentSection !== "main" && (
              <button
                className="border-2 flex items-center justify-center absolute left-2 top-[7px] rounded-full bg-gradient-to-t from-[#36d7ff7a] to-[#1f9e50b6] z-50 w-7 h-7 text-white text-xl"
                onClick={goBack}
              >
                ←
              </button>
            )}
          </span>
        )}
        <button
          className="absolute right-0 top-0 w-[33px] h-[22px] text-[17px] bg-gradient-to-t from-[#ff2525e3] to-[#ffbfbf] text-white border-0 rounded-tr-md transition-background duration-1000 cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>
      </div>

      <div className="flex absolute gap-8 flex-wrap top-[88px]">
        {title === "Skills" &&
          skillsArr.map((skill) => (
            <Picture
              key={skill.id}
              image={skill.link}
              title={skill.name}
              onClick={() => handlePictureClick(skill.link, skill.name)}
            />
          ))}
        {title === "About me" &&
          aboutArr.map((skill) => (
            <Picture
              key={skill.id}
              image={skill.link}
              title={skill.name}
              onClick={() =>
                handlePictureClick(skill.link, skill.name, skill.content)
              }
            />
          ))}
        <div className="flex gap-4">
          {title === "Purble place" && game}
          {currentSection === "nvrCasino" && (
            <div className="flex w-[465px] absolute gap-8 flex-wrap">
              {casinoArr.map((skill) => (
                <Picture
                  key={skill.id}
                  image={skill.link}
                  title={skill.name}
                  onClick={() =>
                    handlePictureClick(skill.link, skill.name, skill.content)
                  }
                />
              ))}
              <a
                href="https://n3vermin9.github.io/casino3/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Picture
                  key={Date.now()}
                  image="https://images.sftcdn.net/images/t_app-icon-m/p/c566a854-96d0-11e6-8864-00163ed833e7/275216958/internet-explorer-11-windows-7-logo.png"
                  title="live_example.html"
                />
              </a>
            </div>
          )}
          {currentSection === "main" && title === "Projects" && (
            <>
              {projectsArr.map((project) => (
                <Folder
                  key={project.id}
                  onClick={() => handleFolderClick(project.name)}
                  name={project.name}
                />
              ))}
            </>
          )}
          {currentSection === "iShop" && (
            <div className="flex w-[465px] absolute gap-8 flex-wrap">
              {iShopArr.map((item) => (
                <Picture
                  key={item.id}
                  image={item.link}
                  title={item.name}
                  onClick={() =>
                    handlePictureClick(item.link, item.name, item.content)
                  }
                />
              ))}
              <a
                href="https://n3vermin9.github.io/iShop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Picture
                  key={Date.now()}
                  image="https://images.sftcdn.net/images/t_app-icon-m/p/c566a854-96d0-11e6-8864-00163ed833e7/275216958/internet-explorer-11-windows-7-logo.png"
                  title="live_example.html"
                />
              </a>
            </div>
          )}
        </div>
      </div>

      {modalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-md max-w-xl w-full relative border-2">
            <span className="absolute top-0 left-0 w-full h-[23px] text-white pl-2 text-[12px] flex items-center bg-gradient-to-t from-[#58866c60] to-[#01d6a43d] border-b border-white rounded-t-[4px]">
              <p className="absolute top-0 right-0 left-0 m-auto flex items-center justify-center text-black">
                {selectedImage.name}
              </p>
            </span>
            <button
              className="absolute right-0 top-0 z-50 w-[33px] h-[22px] text-[17px] bg-gradient-to-t from-[#ff2525e3] to-[#ffbfbf] text-white border-0 rounded-tr-md transition-background duration-1000 cursor-pointer"
              onClick={closeModal}
            >
              ×
            </button>
            {selectedImage.name.slice(-3) === "png" ? (
              <img
                src={selectedImage.link}
                alt={selectedImage.name}
                className="w-full h-auto mt-[23px]"
              />
            ) : (
              <p
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(0,0,0,.6) 0, rgba(255,255,255,0.125) 1px, transparent 1px, transparent 40px)",
                }}
                className="pl-5 pr-5 bg-gradient-to-t from-[#d3a50f7a] to-[#e69a44b6] w-full h-auto mt-[23px] bg-[length:24px_24px]"
              >
                {selectedImage.content}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Window;
