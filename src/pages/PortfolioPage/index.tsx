import React from "react";
import Header from "./components/Header";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { LuMail } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";



const PortfolioPage: React.FC = () => {
  return (
    <div className="bg-light-primary-bg w-screen">
      {/* header */}
      <div className={`sticky z-50 top-0 shadow-primary backdrop-blur-sm`}>
        <Header />
      </div>
      {/* Body */}
      <div className={`md:mx-20`}>
        {/* Home Section*/}
        <div id={`Home`} className={`flex max-md:flex-col-reverse justify-around items-center md:h-[100vh]`}>
          {/* infor */}
          <div className={`flex flex-col md:items-end max-md:items-center `}>
            <div>
              <div className={`flex flex-col max-md:items-center text-5xl max-md:text-5xl max-sm:text-xl font-bold mb-3 right-0`}>
                <div className={`flex flex-wrap`}>
                  <h1>Hi👋</h1>
                  <h1>I'm Dat</h1>
                </div>
                <h1 className={``}>&lt;Backend Developer/&gt;</h1>
              </div>
              <div className={`max-sm:hidden my-6 border-l border-3 pl-3 text-xl`}>
                <div className={`flex items-center pb-2 font-medium`}>
                  <MdOutlinePhoneInTalk />
                  <a className={`ml-1`}  href="tel:+84378900215"> +84378900215</a>
                </div>
                <div className={`flex items-center pb-2  font-medium`}>
                  <LuMail />
                  <a className={`ml-1`}  href="mailto:lvd.levandat@gmail.com"> lvd.levandat@gmail.com</a>
                </div>
                <div className={`flex items-center font-medium`}>
                  <GrLocation />
                  <a className={`ml-1`} href="https://maps.app.goo.gl/NbDmSycaXBAGGzk26" target="_blank" rel="noreferrer" > Da Nang, Vietnam 🇻🇳</a>
                </div>
              </div>
            </div>
          </div>

          {/* avatar */}
          <div className={`max-md:my-10 relative`}>
            <img
              className={`w-96 max-sm:w-64 shadow-primary rounded-full`}
              src="./img/avatar.png"
              alt="avatar"
            />
            <div className={`flex justify-center items-center border bg-light-primary-bg border-light-primary-bg shadow-primary border-4 p-1 w-10 h-10 rounded-full md:hidden text-3xl absolute z-50 -bottom-5 left-1/2 transform -translate-x-1/2`}>🇻🇳</div>
          </div>
        </div>

        <div className={`my-3 border-t border-light-line-bg `}></div>
        
        <div id={`About`}>đây là about</div>
        <div id={`About`}>đây là about</div>
        <div id={`About`}>đây là about</div>
        <div id={`About`}>đây là about</div>  
        <div id={`About`}>đây là about</div>
        <div id={`About`}>đây là about</div>
        <div id={`About`}>đây là about</div>
        <div id={`About`}>đây là about</div>  
        <div id={`About`}>đây là about</div>
        <div id={`About`}>đây là about</div>
        <div id={`About`}>đây là about</div>
        <div id={`About`}>đây là about</div>  
        <div id={`About`}>đây là about</div>
        <div id={`About`}>đây là about</div>
        <div id={`About`}>đây là about</div>
        <div id={`About`}>đây là about</div>
        {/*  */}
      </div>
    </div>
  );
};

export default PortfolioPage;
