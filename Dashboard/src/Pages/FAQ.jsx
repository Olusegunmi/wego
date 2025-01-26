import React from 'react'
import { useState } from 'react'
import Man from '../Images/Man.png'
import Menu from '../Images/Menu.png'
import Add from '../Images/Add.png'
import User from '../Images/User.png'
import Power from '../Images/Power.png'
import Setting from '../Images/Setting.png'
import Outline from '../Images/Outline.png'
import Vector1 from '../Images/vector1.png'
import Vector11 from '../Images/vector11.png'
import building from '../Images/building.png'
import { Link } from 'react-router-dom'
import Mfaq from './Mfaq'
import Docu from '../Images/Docu.png'
import Arc from '../Images/Arc.png'

const FAQ = () => {
    const [navbar, setNavbar] = useState (true)
            
                const HandleClick = ()=> {
                  setNavbar(!navbar)
                }
  return (
    <>
      <div className="w-[424px] h-[1009px] relative bg-white mx-auto justify-center pl-[-14px] overflow-hidden md:hidden">
        <div className="w-[490px] h-[1090px] left-[-27px] top-[65px] absolute bg-[#f8f6fc]" />
    <div className="w-[428px] h-20 left-0 top-0 absolute bg-neutral-50  overflow-hidden">
      <div className="w-[39px] h-[39px] left-[40px] top-[21px] absolute ">
        <div className="w-6 h-6 left-[8px] top-[7px] absolute" onClick={HandleClick} >
          <div className="w-6 h-6 left-0 top-0 absolute">
          {!navbar ? <img src={Add} className='w-[24px] h-[24px] sm:ml-[150px] ' /> : <img src={Menu} />}
          </div>
        </div>
      </div>
      <div className="w-11 h-11 left-[357px] top-[21px] absolute">
        <div className="w-10 h-10 left-[2px] top-[2px] absolute">
          <img className="w-10 h-10 left-0 top-0 absolute rounded-full" src={Man} />
        </div>
        <div className="w-11 h-11 left-0 top-0 absolute rounded-full border border-[#757575]" />
      </div>
    </div>


  <div className="left-[30px] top-[93px] absolute text-[#171725] text-base font-medium font-['HK Grotesk']">Help</div>
  <div className="h-[246.72px] pr-[48.65px] pt-[158.99px] pb-[85.95px] left-[27px] top-[127.04px] absolute bg-[#fefefe] rounded-[10px] justify-start items-center inline-flex">
    <div className="w-[325px] h-[0px]"></div>
  </div>
  <div className="h-[235.39px] left-[41.27px] top-[136.74px] absolute flex-col justify-start items-start gap-1 inline-flex">
    <div className="w-[337px] pt-[15.26px] pb-[14.74px] hover:bg-[#eee7f4] rounded-[5px] justify-center items-center inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch justify-center items-center gap-[61px] inline-flex">
        <div className="justify-start items-start gap-[9px] flex">
          <div className="w-[17px] h-[17px] justify-center items-center flex">
            <div className="w-[17px] h-[17px] relative">
               <img src={Docu} alt="" />
            </div>
          </div>
          <div className="w-[137px] h-4 text-[#494949] text-sm font-medium font-['HK Grotesk'] leading-none"><Link to='/Help'>Get Help</Link></div>
        </div>
        <div className="w-6 h-6 justify-center items-center flex">
          <div className="w-6 h-6 relative">
            <img src={Arc} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="w-[336px] pl-[11.05px] pt-[15.41px] pb-[14.59px] hover:bg-[#eee7f4] rounded-[5px] justify-end items-center inline-flex overflow-hidden">
      <div className="self-stretch justify-center items-center gap-[61px] inline-flex">
        <div className="justify-start items-start gap-[9px] flex">
          <div className="w-[17px] h-[17px] justify-center items-center flex">
            <div className="w-[17px] h-[17px] absolute left-[44px]">
               <img src={Docu} alt="" />
            </div>
          </div>
          <div className="w-[137px] h-4 text-[#3a3a3a] text-sm font-medium font-['HK Grotesk'] absolute left-[70px] leading-none">FAQ</div>
        </div>
        <div className="w-6 h-6 justify-center items-center flex">
          <div className="w-6 h-6 absolute left-[268px]">
            <img src={Arc} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="w-[336px] pt-[14.57px] pb-[15.43px] hover:bg-[#eee7f4] rounded-[5px] justify-center items-center inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch justify-center items-center gap-[61px] inline-flex">
        <div className="justify-start items-start gap-[9px] flex">
          <div className="w-[17px] h-[17px] justify-center items-center flex">
            <div className="w-[17px] absolute left-[44px]">
               <img src={Docu} alt="" />
            </div>
          </div>
          <div className="w-[137px] h-4 text-[#494949] text-sm font-medium font-['HK Grotesk'] leading-none"><Link to='/Feeds'>Feedback</Link></div>
        </div>
        <div className="w-6 h-6 justify-center items-center flex">
          <div className="w-6 h-6 absolute left-[268px]">
            <img src={Arc} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="w-[336px] h-[54px] pl-[23.70px] pr-[106.30px] pt-[14.72px] pb-[22.28px] hover:bg-[#eee7f4] rounded-[5px] justify-start items-center inline-flex overflow-hidden">
      <div className="self-stretch justify-center items-center gap-[61px] inline-flex">
        <div className="justify-start items-start gap-[9px] flex">
          <div className="w-[17px] h-[17px] justify-center items-center flex">
            <div className="w-[17px] h-[17px] absolute left-[44px]">
               <img src={Docu} alt="" />
            </div>
          </div>
          <div className="w-[137px] h-4 text-[#494949] text-sm font-medium absolute left-[70px] font-['HK Grotesk'] leading-none"><Link to='/ContactUs'>Contact Us</Link></div>
        </div>
        <div className="w-6 h-6 justify-center items-center flex">
          <div className="w-6 h-6 absolute left-[268px]">
            <img src={Arc} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-[378px] h-[560px] left-[26px] top-[397px] absolute bg-white  overflow-hidden">
    <div className="left-[468.61px] top-[99.79px] absolute origin-top-left rotate-[14.60deg] text-[#f1eff5] text-[700px] font-bold font-['Gotham']">?</div>
    <div className="w-[204px] left-[37px] top-[34px] absolute text-[#521292] text-xl font-bold font-['HK Grotesk'] uppercase">Commonly Ask Question</div>
    <div className="w-[234.67px] h-[41px] left-[37px] top-[119px] absolute text-[#939393] text-lg font-medium font-['HK Grotesk']">How it works</div>
    <div className="w-[258.98px] h-[41px] left-[37px] top-[166px] absolute text-[#939393] text-lg font-medium font-['HK Grotesk']">How valid is the inspection report</div>
    <div className="w-[328.09px] h-[41px] left-[37px] top-[233px] absolute text-[#939393] text-lg font-medium font-['HK Grotesk']">Can the inspection report be downloaded</div>
    <div className="w-[318.22px] h-[41px] left-[37px] top-[290px] absolute text-[#939393] text-lg font-medium font-['HK Grotesk']">How to Request for inspection report </div>
    <div className="w-[289.36px] h-[41px] left-[37px] top-[337px] absolute text-[#939393] text-lg font-medium font-['HK Grotesk']">Can a user become an agent</div>
    <div className="w-[341px] h-[41px] left-[37px] top-[384px] absolute text-[#939393] text-lg font-medium font-['HK Grotesk']">What are the certification of the inspection</div>
    <div className="w-[289.36px] h-[41px] left-[37px] top-[451px] absolute text-[#939393] text-lg font-medium font-['HK Grotesk'] capitalize">How to use setting menu</div>
    <div className="w-[289.36px] h-[41px] left-[37px] top-[508px] absolute text-[#939393] text-lg font-medium font-['HK Grotesk'] capitalize">How to view Inspection report</div>
    <div className="w-[381px] h-[41px] left-[37px] top-[655px] absolute text-[#939393] text-[22px] font-medium font-['HK Grotesk'] capitalize">How to Download Inspection report</div>
    <div className="w-[343px] h-[0px] left-[35px] top-[100px] absolute border border-[#bdbdbd]"></div>
    <div className="w-[30px] h-[30px] left-[560px] top-[119px] absolute justify-center items-center inline-flex">
      <div className="w-[30px] h-[30px] relative">
      </div>
    </div>
    <div className="w-[30px] h-[30px] left-[560px] top-[177px] absolute justify-center items-center inline-flex">
      <div className="w-[30px] h-[30px] relative">
      </div>
    </div>
    <div className="w-[30px] h-[30px] left-[560px] top-[245px] absolute justify-center items-center inline-flex">
      <div className="w-[30px] h-[30px] relative">
      </div>
    </div>
    <div className="w-[30px] h-[30px] left-[560px] top-[313px] absolute justify-center items-center inline-flex">
      <div className="w-[30px] h-[30px] relative">
      </div>
    </div>
    <div className="w-[30px] h-[30px] left-[560px] top-[379px] absolute justify-center items-center inline-flex">
      <div className="w-[30px] h-[30px] relative">
      </div>
    </div>
    <div className="w-[30px] h-[30px] left-[560px] top-[446px] absolute justify-center items-center inline-flex">
      <div className="w-[30px] h-[30px] relative">
      </div>
    </div>
    <div className="w-[30px] h-[30px] left-[560px] top-[513px] absolute justify-center items-center inline-flex">
      <div className="w-[30px] h-[30px] relative">
      </div>
    </div>
    <div className="w-[30px] h-[30px] left-[560px] top-[580px] absolute justify-center items-center inline-flex">
      <div className="w-[30px] h-[30px] relative">
      </div>
    </div>
    <div className="w-[30px] h-[30px] left-[560px] top-[647px] absolute justify-center items-center inline-flex">
      <div className="w-[30px] h-[30px] relative">
      </div>
    </div>
  </div>



  <div className={!navbar ? 'fixed top-[100px] left-[20px] w-[80%] h-[100vh] justify-center mx-auto  md:hidden z-[2] ease-in-out duration-500 bg-white' :'fixed top-[-100%]  w-[80%] left-[20px] h-[100vh] z-[-5] mt-[90px] ease-in-out duration-500'}>
          <div className="w-[222px] h-[422px] relative ml-[40px]">
         <div className="w-[222px] h-[422px] left-0 top-0 absolute">
           <div className="w-[222px] h-[352px] left-0 top-0 absolute">
             <div className="w-[200px] h-[47px] hover:bg-[#eee7f4] hover:border-r-[#521292] hover:border-r-8  left-0 top-0 absolute  overflow-hidden">
               <div className="p-2 left-0 top-[3.50px] absolute justify-start items-center gap-[11px] inline-flex">
                 <div className="w-6 h-6 relative">
                   <div className="w-6 h-6 left-[0] top-0 absolute">
                     <img src={Vector1} alt="" />
                   </div>
                 </div>
                 <button className="w-[152px] text-[#521292] ml-[-40px] text-base font-medium font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/Dashboard'>Dashboard</Link></button>
               </div>
             </div>
             {/* <div className="w-[5px] h-[47px] left-[280px] top-0 absolute bg-[#521292] rounded-[1px]" /> */}
       
       
       
             <div className="w-[200px] h-[47px] hover:bg-[#eee7f4] hover:border-r-[#521292] hover:border-r-8  left-[0] top-[122px] absolute justify-start items-center gap-3.5 inline-flex overflow-hidden">
               <div className="p-2 justify-start items-center gap-[11px] flex">
                 <div className="w-6 h-6 relative">
                   <div className="w-6 h-6 left-0 top-0 absolute">
                        <img src={building} alt="" />
                   </div>
                 </div>
                 <div className="w-[152px] text-[#521292] text-base font-medium font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/ViewProperty'>View More Property</Link></div>
               </div>
               
             </div>
             <div className="w-[200px] h-[47px] hover:bg-[#eee7f4] hover:border-r-[#521292] hover:border-r-8  pr-[29px] left-0 top-[61px] absolute justify-start items-center gap-3.5 inline-flex">
               <div className="w-[168px] h-9 relative">
               <img src={Vector11} className="w-5 h-6 left-[9px] top-[8px] absolute" />
                 <div className="w-[152px] left-[43px] top-[8.50px] absolute text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link to="/Inspection">Inspection Report</Link></div>
               </div>
               < div className="w-[5px] h-[47px] opacity-0 bg-white rounded-[1px]" />
             </div>
             <div className="w-[200px] h-[47px] hover:bg-[#eee7f4] hover:hover:border-r-[#521292] hover:border-r-8  left-0 top-[299px] absolute justify-start items-start gap-3.5 inline-flex">
               <div className="p-2 justify-start items-center gap-[11px] flex">
                 <img src={Outline} className="w-6 h-6 relative  overflow-hidden" />
                 <div className="w-[152px] text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/Help'>Help</Link></div>
               </div>
               <div className="w-[5px] h-[47px] opacity-0 bg-white rounded-[1px]" />
             </div>
             <div className="w-[200px] h-[47px] hover:bg-[#eee7f4] hover:border-r-[#521292] hover:border-r-8  p-2 left-0 top-[238px] absolute justify-start items-center gap-[11px] inline-flex">
               <div className="w-6 h-6 relative">
                 <div className="w-6 h-6 left-0 top-0 absolute">
                   <img src={Setting} alt="" />
                 </div>
               </div>
               <div className="w-[152px] text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/Set'>Settings</Link></div>
             </div>
             <div className="w-[222px] left-0 top-[183px] absolute justify-start items-start gap-3.5 inline-flex">
               <div className="w-[222px] h-[47px] relative bg-[#eee7f4]/0">
                 <div className="w-[200px] h-[47px] hover:bg-[#eee7f4] hover:border-r-[#521292] hover:border-r-8 p-2 left-0 top-0 absolute justify-start items-center gap-[11px] inline-flex">
                   <div className="w-6 h-6 relative">
                     <div className="w-6 h-6 left-0 top-0 absolute">
                        <img src={User} alt="" />
                     </div>
                   </div>
                   <div className="w-[152px] text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/Profile'>Profile</Link></div>
                 </div>
                 <div className="w-[5px] h-[47px] left-[217px] top-0 absolute rounded-[1px]" />
               </div>
               <div className="w-[5px] h-[47px] opacity-0 bg-white rounded-[1px]" />
             </div>
           </div>
           <div className="p-2 left-0 top-[382px] absolute justify-start items-center gap-[11px] inline-flex">
             <img src={Power} className="w-6 h-6 relative  overflow-hidden" />
             <div className="w-[152px] text-[#521292] text-base font-bold font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/SignUp'>Logout</Link></div>
           </div>
         </div>
         </div>
           <div className='w-[265px] h-[5px] mt-[30px] left-[-20px] top-[554px] bg-[#521292]'></div>
            
          </div>

</div>
<Mfaq />
</>
  )
}

export default FAQ