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
import Search2 from '../Images/Search2.png'
import Acr from '../Images/Acr.png'
import Docu from '../Images/Docu.png'
import Mset from './Mset'




const Set = () => {
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

    <div className="h-[174.86px] left-[18.44px] top-[18.10px] absolute flex-col justify-start items-start gap-1 inline-flex">
      <div className="pl-6 pr-[45px] py-[15px] hover:bg-[#eee7f4] rounded-[5px] justify-start items-center inline-flex overflow-hidden">
        <div className="self-stretch justify-center items-center gap-[61px] inline-flex">
          <div className="justify-start items-start gap-[9px] flex">
            <div className="w-[17px] h-[17px] justify-center items-center flex">
              <div className="w-[17px] h-[17px] relative">
                <img src={Docu} alt="" />
              </div>
            </div>
            <div className="w-[137px] h-4 text-[#494949] text-sm font-medium font-['HK Grotesk'] leading-none">Basic settings</div>
          </div>
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative">
              <img src={Acr} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="pl-6 pr-[11px] py-[15px] hover:bg-[#eee7f4]  rounded-[5px] justify-end items-center inline-flex overflow-hidden">
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
      <div className="pl-6 pr-[11px] py-[15px] hover:bg-[#eee7f4]  rounded-[5px] justify-end items-center inline-flex overflow-hidden">
        <div className="self-stretch justify-center items-center gap-[61px] inline-flex">
          <div className="justify-start items-start gap-[9px] flex">
            <div className="w-[17px] h-[17px] justify-center items-center flex">
              < div className="w-[17px] h-[17px] relative">
                <img src={Docu} alt="" />
              </div>
            </div>
            <div className="w-[137px] h-4 text-[#494949] text-sm font-medium font-['HK Grotesk'] leading-none"><Link to='/Notification'>Notification</Link></div>
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
  <form>
  <div className="w-[377.71px] h-[666.64px] left-[24.37px] top-[370.54px] absolute bg-[#fefefe] rounded-[10px]">
    <div className="left-[18.11px] top-[19.50px] absolute text-[#171625] text-sm font-semibold font-['HK Grotesk'] leading-snug">General settings</div>
    <div className="left-[303.12px] top-[22.23px] absolute justify-start items-center gap-[7px] inline-flex">
      <div className="w-4 h-4 pr-px pb-px justify-center items-center flex overflow-hidden">
        <div className="w-[15px] h-[15px] relative">
          <div className="w-[13px] h-[13px] left-0 top-0 absolute" />
          <img src={Search2} alt="" />
        </div>
      </div>
      <div className="opacity-80 text-[#bdbdbd] text-xs font-normal font-['HK Grotesk'] leading-tight tracking-tight">Search</div>
    </div>
    <div className="w-7 h-7 left-[-17.25px] top-[264.27px] absolute" />
    {/* <div className="w-[375px] h-[0px] left-[2.96px] top-[62.47px] absolute border border-[#eef0f6]"></div> */}
    <div className="h-[478.03px] pt-[0.15px] pb-[11.90px] left-[9.06px] top-[71.39px] absolute flex-col justify-start items-end gap-[26.15px] inline-flex">
      <div className="w-[354px] h-[27px] relative">
        <div className="w-[82px] left-[1.01px] top-[1.01px] absolute text-center text-[#521292] text-xs font-medium font-['HK Grotesk'] leading-none">General info</div>
        <div className="w-[150px] left-[121.01px] top-[0.66px] absolute text-center text-[#838ea6] text-xs font-medium font-['HK Grotesk'] leading-none"><Link to='/Date'>Date and time setting</Link></div>
        <div className="w-[354px] h-[0px] left-[0.14px] top-[26.87px] absolute border border-[#bdbdbd]"></div>
        <div className="w-[91px] h-[0px] left-[0.15px] top-[27px] absolute border-4 border-[#521292]"></div>
      </div>
      <div className="w-[358.04px] h-[410.89px] relative flex-col justify-start items-start flex">
        <div className="w-[350.56px] h-[177.73px] relative">
          <div className="w-[134.86px] h-[19.81px] left-[0.27px] top-[2.21px] absolute origin-top-left rotate-[0.69deg] text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Font size</div>
          {/* <div className="w-[350.50px] h-[52.93px] left-[0.08px] top-[20.80px] absolute">
            <div className="w-[14.29px] h-[22.94px] left-[5.64px] top-[12.42px] absolute" />
            <input type="text" className="w-[350.49px] h-[52.78px] left-0 top-[0.15px] absolute rounded-md border border-[#bdbdbd]" style={{zIndex:1}} placeholder='Default' />
          </div> */}
          <select className="w-[350.49px] h-[52.78px] left-0 top-[20.15px] pl-3 text-[13px] absolute rounded-md border border-[#bdbdbd]" style={{zIndex:1}}>
             <option value="">Default</option>
             <option value="">10px</option>
             <option value="">20px</option>
             <option value="">30px</option>
             <option value="">40px</option>
          </select>
          
        </div>
        {/* <div className="text-[#828282] text-sm font-medium font-['Montserrat']">Default</div> */}
        <div className="w-4 h-4 origin-top-left  justify-center items-center inline-flex">
          <div className="w-4 h-4 relative">
          </div>
        </div>
        <div className="h-[198.28px] pl-[2.34px] pr-[121.31px] pb-[175.83px] justify-start items-center inline-flex">
          <div className="w-[226.93px] h-[21.44px] text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Theme</div>
          {/* <div className="w-[350.50px] h-[52.93px] left-[0.56px] top-[115.81px] absolute">
            <div className="w-[14.29px] h-[22.94px] left-[5.64px] top-[12.42px] absolute" />
            <input type="text" className="w-[350.49px] h-[52.78px] left-0 top-[-10.89px] absolute rounded-md border border-[#bdbdbd]" style={{zIndex:1}} placeholder='White' />
          </div> */}
          <select className="w-[350.49px] h-[52.78px] pl-3 text-[13px] left-0 top-[110.89px] absolute rounded-md border border-[#bdbdbd]" style={{zIndex:1}}>
            <option value="" >White</option>
            <option value="">Black</option>
            <option value="">Red</option>
          </select>
        </div>


        
        <div className="w-[352.77px] h-[138.35px] relative top-[-170px]">
          <div className="w-[135.73px] h-[19.81px] left-[0.49px] top-[64.65px] absolute origin-top-left rotate-[0.69deg] text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Language</div>
          {/* <div className="w-[352.77px] h-[138.28px] left-0 top-[0.06px] absolute">
            <div className="w-[14.38px] h-[22.94px] left-[6.27px] top-[97.60px] absolute" />
            <input type='text' className="w-[352.76px] h-[52.70px] left-[0.34px] top-[85.58px] absolute rounded-md border border-[#bdbdbd]" style={{zIndex:1}} placeholder='English' />
            
          </div> */}
          <select className="w-[352.76px] h-[52.70px] text-[13px] left-[0.34px] pl-3 top-[85.58px] absolute rounded-md border border-[#bdbdbd]" style={{zIndex:1}}>
            <option value="">English</option>
            <option value="">France</option>
          </select>
        </div>
        <div className="w-4 h-4 origin-top-left rotate-[89.69deg] justify-center items-center inline-flex">
          <div className="w-4 h-4 relative">
          </div>
        </div>
        <div className="w-6 h-6 relative" />
        <div className="w-4 h-4 justify-center items-center inline-flex">
          <div className="w-4 h-4 relative">
          </div>
        </div>
        <div className="origin-top-left  w-[178.42px] h-[74.86px] relative top-[-112px]">
          <div className="w-[178.12px] h-[53.08px] left-[0.37px] top-[21.30px] absolute  rounded-md border border-[#bdbdbd]" />
          <div className="origin-top-left  w-[84.12px] h-[53.56px] left-[0.37px] top-[22.30px] absolute">
            <div className="w-[84.12px] h-[50.56px] left-0 top-0 absolute   bg-[#521292] rounded-md" />
            <button className="w-[26.04px] h-[16.87px] left-[29.10px] top-[18.27px] absolute   text-[#fefefe] text-sm font-medium font-['HK Grotesk']]">LTR</button>
          </div>
          <button className="w-[27.04px] h-[16.86px] left-[123.47px] top-[40.09px] absolute   text-[#828282] text-sm font-medium font-['HK Grotesk']">RTL</button>
          <div className="w-[127.05px] h-[20.37px] left-0 top-[0.06px] absolute   text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Layout</div>
        </div>
      </div>
    </div>

    <div className="w-[94.15px] h-[31px] left-[255.87px] top-[601.87px] absolute">
      <div className="w-[94.15px] h-[31px] left-0 top-0 absolute bg-[#521292] rounded-md" />
      <button className="w-[39px] h-[11px] left-[27.03px] top-[6.15px] absolute text-[#fefefe] text-base font-medium font-['HK Grotesk'] capitalize">Save</button>
    </div>
    <div className="w-[94.15px] h-[31px] left-[150.87px] top-[601.29px] absolute">
      <div className="w-[94.15px] h-[31px] left-0 top-0 absolute rounded-md border border-[#ff0033]" />
      <button className="w-[46px] h-[11px] left-[24.03px] top-[6.13px] absolute text-[#ff0033] text-base font-medium font-['Montserrat'] capitalize">Clear</button>
    </div>
  </div>
  </form>




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
               <div className="w-[152px] text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight">Profile</div>
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
<Mset />
</>
  )
}

export default Set
