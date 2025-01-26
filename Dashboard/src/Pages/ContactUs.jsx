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
import Mcontactus from './Mcontactus'
import Docu from '../Images/Docu.png'
import Arc from '../Images/Arc.png'

const ContactUs = () => {
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
     <div className="w-[325px] h-[0px] "></div>
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
     <div className="w-[336px] pl-[11.05px] pt-[15.41px]  pb-[14.74px] hover:bg-[#eee7f4] rounded-[5px] justify-end items-center inline-flex overflow-hidden">
       <div className="self-stretch justify-center items-center gap-[61px] inline-flex">
         <div className="justify-start items-start gap-[9px] flex">
           <div className="w-[17px] h-[17px] justify-center items-center flex">
             <div className="w-[17px] h-[17px] absolute  left-[44px]">
               <img src={Docu} alt="" />
             </div>
           </div>
           <div className="w-[137px] h-4 text-[#3a3a3a] text-sm font-medium font-['HK Grotesk'] absolute left-[70px] leading-none"><Link to='/FAQ'>FAQ</Link></div>
         </div>
         <div className="w-6 h-6 justify-center items-center flex">
           <div className="w-6 h-6 absolute left-[268px]">
             <img src={Arc} alt="" />
           </div>
         </div>
       </div>
     </div>
     <div className="w-[336px] pt-[14.57px] pb-[15.43px] hover:bg-[#eee7f4]  rounded-[5px] justify-center items-center inline-flex overflow-hidden">
       <div className="grow shrink basis-0 self-stretch justify-center items-center gap-[61px] inline-flex">
         <div className="justify-start items-start gap-[9px] flex">
           <div className="w-[17px] h-[17px] justify-center items-center flex">
             <div className="w-[17px] h-[17px] relative">
               <img src={Docu} alt="" />
             </div>
           </div>
           <div className="w-[137px] h-4 text-[#494949] text-sm font-medium font-['HK Grotesk'] leading-none"><Link to='/Feeds'>Feedback</Link></div>
         </div>
         <div className="w-6 h-6 justify-center items-center flex">
           <div className="w-6 h-6 relative">
             <img src={Arc} alt="" />
           </div>
         </div>
       </div>
     </div>
     <div className="w-[336px] h-[54px] pl-[23.70px] pr-[106.30px] hover:bg-[#eee7f4] pt-[14.72px]  pb-[22.28px] rounded-[5px] justify-start items-center inline-flex overflow-hidden">
       <div className="self-stretch justify-center items-center gap-[61px] inline-flex">
         <div className="justify-start items-start gap-[9px] flex">
           <div className="w-[17px] h-[17px] justify-center items-center flex">
             <div className="w-[17px] h-[17px] absolute left-[44px]">
               <img src={Docu} alt="" />
             </div>
           </div>
           <div className="w-[137px] h-4 text-[#494949] text-sm font-medium font-['HK Grotesk'] absolute left-[70px]  leading-none">Contact Us</div>
         </div>
         <div className="w-6 h-6 justify-center items-center flex">
           <div className="w-6 h-6 absolute left-[268px]">
             <img src={Arc} alt="" />
           </div>
         </div>
       </div>
     </div>
   </div>
  
  <form>
  <div className="w-[373px] h-[584px] left-[25px] top-[405px] absolute bg-white rounded-[10px]  overflow-hidden">
    <div className="w-[133px] left-[120px] top-[31px] absolute text-[#521292] text-xl font-bold font-['HK Grotesk'] uppercase">Contact Us</div>
    <div className="w-[325.07px] h-[256.89px] left-[24.79px] top-[273.52px] absolute">
      <div className="w-[125.07px] h-[19.41px] left-[0.26px] top-0 absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Message</div>
      <div className="w-[178px] h-[19.41px] left-[73.21px] top-[237.48px] absolute"><span class="text-[#3d4b55] text-[10px] font-medium font-['HK Grotesk']  leading-tight">Add me to your network,</span><span class="text-[#521292] text-[10px] font-medium font-['HK Grotesk'] leading-tight"> </span><span class="text-[#521292] text-[10px] font-bold font-['HK Grotesk'] leading-tight">Subcribe</span></div>
      <div className="w-[325.07px] h-[117.59px] left-0 top-[19.17px] absolute">
        <div className="w-[13.24px] h-[50.08px] left-[5.18px] top-[26.67px] absolute" />
        <input type="text" className="w-[325.07px] h-[117.59px] left-0 top-0 absolute rounded-md border pb-[60px] pl-3 text-[13px] border-[#bdbdbd]"  placeholder="Enter your message"/>
      </div>
    </div>
    <div className="h-[69.30px] left-[24.79px] top-[81.32px] absolute">
      <div className="w-[305.74px] h-[19.41px] left-[0.64px] top-0 absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk']  leading-tight">Contact Number</div>
      <div className="w-[319.21px] h-[49.90px] left-0 top-[19.41px] absolute">
        <div className="w-[32.36px] h-[21.25px] left-[12.66px] top-[11.09px] absolute" />
        <input type="text" className="w-[319.21px] h-[49.90px] left-0 pl-3 text-[13px] top-0 absolute rounded-md border border-[#bdbdbd]" placeholder="Enter your Contact number" />
      </div>
    </div>
  </div>
  <div className="w-[78px] h-[37px] px-[27px] py-[17px] left-[173px] top-[855px] absolute bg-[#521292] rounded-sm justify-center items-center gap-2.5 inline-flex">
    <button className="text-[#fefefe] text-sm font-medium font-['HK Grotesk'] capitalize"><Link>Sent</Link></button>
  </div>
  <div className="h-[77.08px] left-[48.69px] top-[579.80px] absolute">
    <div className="w-[125.07px] h-[21.66px] left-[0.26px] top-0 absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk']  leading-tight">Email</div>
    <div className="w-[325.07px] h-[55.69px] left-0 top-[21.40px] absolute">
      <div className="w-[13.24px] h-[23.72px] left-[5.18px] top-[12.63px] absolute" />
      <input type="text" className="w-[325.07px] h-[55.69px]  pl-3 text-[13px] left-0 top-0 absolute rounded-md border border-[#bdbdbd]" placeholder="Enter your Email" />
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
                     <div className="w-[152px] text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link >Profile</Link></div>
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
<Mcontactus />
</>
  )
}

export default ContactUs