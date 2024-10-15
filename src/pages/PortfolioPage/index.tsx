import React from "react";
import Header from "./components/Header";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { LuMail } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import SectionHeader from "./components/SectionHeader";
import { TbBrandFacebook } from "react-icons/tb";
import { TbBrandInstagram } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";

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
        <div id={`Home`} className={`flex max-md:flex-col-reverse justify-around items-center my-20`}>
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
        
        {/* Education Section */}
        <div id={`Education`} className={`flex flex-col items-center my-14`}>
          <div className={`my-5`}>
            <SectionHeader title={`Education`} subTitle={`Master, Engineer and Bachelor`}/>
          </div>
          {/* Body */}
          <div>
              <div className={`flex my-10 justify-between items-center shadow-primary p-5 rounded-md`}>
                <div className={`flex items-center `}>
                  <div className={`mr-10`}>
                    <img
                      className={`p-3 w-32 max-sm:w-64 shadow-primary rounded-md`}
                      src="./img/logo-itf-dut.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div className={`flex flex-col`}>
                    <div className={`mb-7`}>
                      <span className={`px-3 py-2 shadow-primary rounded-full`}>2020-Present</span>
                    </div>
                    <h2 className={`text-2xl font-semibold`}>The University of Danang - University of Science and Technology</h2>
                    <div>Information Technology Faculty</div>
                  </div>
                </div>
              </div>
              <div className={`flex my-10 justify-between items-center shadow-primary p-5 rounded-md`}>
            <div className={`flex items-center `}>
              <div className={`mr-10`}>
                <img
                  className={`p-3 w-32 max-sm:w-64 shadow-primary rounded-md`}
                  src="./img/logo-harvard.png"
                  alt="avatar"
                />
              </div>
              <div className={`flex flex-col`}>
                <div className={`mb-7`}>
                  <span className={`px-3 py-2 shadow-primary rounded-full`}>In My Dream</span>
                </div>
                <h2 className={`text-2xl font-semibold`}>Harvard University</h2>
              </div>
            </div>
              </div>
          </div>
        </div>
      </div>
      
      {/* Blog Section */}
      <div className={`my-3 border-t border-light-line-bg `}></div>
      {/* Contact */}

      <div id={`Contact`} className={`flex flex-col justify-center p-3 md:mx-20 my-10`}>
        <div className={`mb-10`}>
              <SectionHeader title={`Contact`} subTitle={`Contact With Me`}/>
        </div>
        <div className={`flex justify-center`}>
          {/* information */}
          <div className={`flex flex-col max-w-80  items-center shadow-primary rounded-xl p-10`}>
            <div className={`flex flex-col items-center `}>
              <img
                  className={`w-24 max-sm:w-64 shadow-primary rounded-full`}
                  src="./img/avatar.png"
                  alt="avatar"
                />
            </div>
            <div className={`mb-3`}>
              Le Van Dat
            </div>
            <p className={`flex mb-3`}>I’m currently looking for job opportunities. Feel free to connect with me through my account.</p>
            <div className={`mb-3 flex flex-col items-center`}>
                  <div className={`flex items-center pb-2 font-medium`}>
                    <MdOutlinePhoneInTalk />
                    <a className={`ml-1`}  href="tel:+84378900215"> +84378900215</a>
                  </div>
                  <div className={`flex items-center pb-2  font-medium`}>
                    <LuMail />
                    <a className={`ml-1`}  href="mailto:lvd.levandat@gmail.com"> lvd.levandat@gmail.com</a>
                  </div>
            </div>
            <div className={`flex bg-none text-5xl`}>
              <div className={`shadow-primary rounded-md mx-3`}>
                <TbBrandFacebook/>
              </div>

              <div className={`shadow-primary rounded-md mx-3`}>
                <TbBrandInstagram/>
              </div>

              <div className={`shadow-primary rounded-md mx-3`}>
                <TbBrandLinkedin/>
              </div>
            </div>
          </div>
          {/* contact */}
          <div className={`flex flex-col p-10 shadow-primary mx-5 rounded-xl`}>
            <div className={`flex`}>
              <div>
                <div>Your Email</div>
                <input type="text" className={`border-2 border-light-primary-bg rounded-md p-2`}/>
              </div>
              <div>
                <div>Your Email</div>
                <input type="text" className={`border-2 border-light-primary-bg rounded-md p-2`}/>
              </div>
            </div>
            <div>
              <div>Your Email</div>
              <input type="text" className={`w-full border-2 border-light-primary-bg rounded-md p-2`}/>
            </div>
            <div>
              <div>Subject</div>
              <input type="text" className={`w-full border-2 border-light-primary-bg rounded-md p-2`}/>
            </div>

            {/* content */}
            <div>
              <div>Content</div>
              <textarea className={`w-full border-2 border-light-primary-bg rounded-md p-2 mb-3`}/>
            </div>
            <div className={`flex justify-start `}>
              <button className={`flex flex-row items-center px-10 py-5 my-3 rounded-xl shadow-primary`}>
                <span className={`mr-1`}>Send</span>
                <BsArrowRight/>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className={`p-20`}>
       
      </div>
    </div>
  );
};

export default PortfolioPage;
