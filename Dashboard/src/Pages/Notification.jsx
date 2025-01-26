import React from 'react'

import Man from '../Images/Man.png'
import Menu from '../Images/Menu.png'
import Add from '../Images/Add.png'
import { useState } from 'react'
import User from '../Images/User.png'
import Power from '../Images/Power.png'
import Setting from '../Images/Setting.png'
import Outline from '../Images/Outline.png'
import Vector1 from '../Images/vector1.png'
import Vector11 from '../Images/vector11.png'
import building from '../Images/building.png'
import { Link } from 'react-router-dom'
import Acr from '../Images/Arc.png'
import Tg from "../Images/Tg.png"
import Tg2 from "../Images/Tg2.png"
import Mnotification from './Mnotification'
import Docu from '../Images/Docu.png'

const Notification = () => {
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

  <div className="left-[25px] top-[93px] absolute text-[#171725] text-base font-medium font-['HK Grotesk']">Settings</div>
  <div className="w-[371.87px] h-[205.69px] left-[27px] top-[127.04px] absolute bg-[#fefefe] rounded-[10px]">
    {/* <div className="w-[325px] h-[0px] left-[-1.80px] top-[158.99px] absolute border border-[#eef0f6]"></div> */}
    <div className="h-[175.04px] left-[18.44px] top-[18.10px] absolute flex-col justify-start items-start gap-1 inline-flex">
      <div className="pl-6 pr-[45px] py-[15px] rounded-[5px] justify-start items-center inline-flex overflow-hidden">
        <div className="self-stretch justify-center items-center gap-[61px] inline-flex">
          <div className="justify-start items-start gap-[9px] flex">
            <div className="w-[17px] h-[17px] justify-center items-center flex">
              <div className="w-[17px] h-[17px] relative">
                 <img src={Docu} alt="" />
              </div>
            </div>
            <div className="w-[137px] h-4 text-[#494949] text-sm font-medium font-['HK Grotesk'] leading-none"><Link to='/Set'>Basic settings</Link></div>
          </div>
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative">
               <img src={Acr} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="pl-6 pr-[11px] py-[15px] rounded-[5px] justify-end items-center inline-flex overflow-hidden">
        <div className="self-stretch justify-center items-center gap-[61px] inline-flex">
          <div className="justify-start items-start gap-[9px] flex">
            <div className="w-[17px] h-[17px] justify-center items-center flex">
              <div className="w-[17px] h-[17px] relative">
                 <img src={Docu} alt="" />
              </div>
            </div>
            <div className="w-[137px] h-4 text-[#3a3a3a] text-sm font-medium font-['HK Grotesk'] leading-none"><Link to='/AccountSet'>Account settings</Link></div>
          </div>
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative">
                <img src={Acr} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="pl-6 pr-11 py-[15px] bg-[#eee7f4] rounded-[5px] justify-start items-center inline-flex overflow-hidden">
        <div className="self-stretch justify-center items-center gap-[61px] inline-flex">
          <div className="justify-start items-start gap-[9px] flex">
            <div className="w-[17px] h-[17px] justify-center items-center flex">
              <div className="w-[17px] h-[17px] relative">
                 <img src={Docu} alt="" />
              </div>
            </div>
            <div className="w-[137px] h-4 text-[#494949] text-sm font-medium font-['HK Grotesk'] leading-none">Notification</div>
          </div>
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative">
                <img src={Acr} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-[386.10px] h-[493.98px] left-[20.66px] top-[388.12px] absolute bg-[#fefefe] rounded-[10px]">
    <div className="left-[18.11px] top-[19.50px] absolute text-[#171625] text-lg font-semibold font-['HK Grotesk']  leading-snug">Notifications</div>
    <div className="w-7 h-7 left-[-9.25px] top-[178.27px] absolute" />
    <div className="w-[389px] h-[0px] left-[-2.14px] top-[62.32px] absolute border border-[#eef0f6]"></div>
    <div className="w-[349px] h-[54px] left-[18.06px] top-[99.43px] absolute bg-[#f8f6fc] rounded-[5px]  overflow-hidden">
      <div className="left-[24px] top-[15px] absolute justify-start items-center gap-[45px] inline-flex">
        <div className="w-[290px] h-4 text-[#494949] text-xs font-medium font-['HK Grotesk'] leading-none">Allow Push Notification</div>
       
      </div>
      <div className="w-[24.68px] h-[15px] left-[301.82px] top-[19.55px] absolute">
      <img src={Tg} alt="" />
      </div>
    </div>
    <div className="w-[349px] h-[54px] left-[18.51px] top-[183.43px] absolute bg-[#f8f6fc] rounded-[5px]  overflow-hidden">
      <div className="left-[24px] top-[15px] absolute justify-start items-center gap-[45px] inline-flex">
        <div className="w-[290px] h-4 text-[#494949] text-xs font-medium font-['HK Grotesk'] leading-none">Allow Email Notification</div>
      </div>
      <div className="w-[24.68px] h-[15px] left-[301.82px] top-[18.55px] absolute">
        <img src={Tg2} alt="" />
      </div>
    </div>
    <div className="w-[349px] h-[54px] left-[18.96px] top-[267.44px] absolute bg-[#f8f6fc] rounded-[5px]  overflow-hidden">
      <div className="left-[24px] top-[15px] absolute justify-start items-center gap-[45px] inline-flex">
        <div className="w-[290px] h-4 text-[#494949] text-xs font-medium font-['HK Grotesk'] leading-none">Allow SMS Notification</div>
      </div>
      <div className="w-[24.68px] h-[15px] left-[301.82px] top-[18.55px] absolute">
      <img src={Tg2} alt="" />
      </div>
    </div>
    <div className="w-[115px] h-[37.87px] left-[244.83px] top-[426.68px] absolute">
      <div className="w-[115px] h-[37.87px] left-0 top-0 absolute bg-[#521292] rounded-md" />
      <div className="w-10 h-5 left-[38.05px] top-[9.21px] absolute text-[#fefefe] text-base font-medium font-['Montserrat'] capitalize">Save</div>
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
                   <div className="w-[152px] text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link to=''>Profile</Link></div>
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
<Mnotification />
</>
  )
}

export default Notification