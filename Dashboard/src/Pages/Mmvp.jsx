import React from 'react'
import Menu from '../Images/Menu.png'
import Man from '../Images/Man.png'
// import Add from '../Images/Add.png'
import User from '../Images/User.png'
import Power from '../Images/Power.png'
import Setting from '../Images/Setting.png'
import Outline from '../Images/Outline.png'
import building from '../Images/building.png'
import Vector1 from '../Images/vector1.png'
import Vector11 from '../Images/vector11.png'
import notifications from '../Images/notifications.png'
import Search from '../Images/Search.png'
import Wego from '../Images/Wego.png'
import Al from "../Images/Al.png"
import Ar from "../Images/Ar.png"
import { Link } from 'react-router-dom'

const Mmvp = () => {
  return (
    <div className="hidden w-[1440px] h-[1024px] relative bg-white  overflow-hidden md:block">
  <div className="w-[1558px] h-[1024px] left-[-59px] top-0 absolute bg-[#f8f6fc] rounded-[25px] shadow-[6px_0px_18px_0px_rgba(0,0,0,0.06)]" />
  <div className="w-[1558px] h-[1024px] left-[-59px] top-0 absolute bg-[#f8f6fc]/60 rounded-[25px] shadow-[6px_0px_18px_0px_rgba(0,0,0,0.06)]" />
  <div className="w-6 h-6 left-[412px] top-[473px] absolute" />



 <div className="p-2 left-[287px] top-[23px] absolute justify-start items-center gap-[11px] inline-flex">
                <div className="w-6 h-6 relative">
                  <div className="w-6 h-6 left-0 top-0 absolute">
                    <img src={Vector1} alt="" />
                  </div>
                </div>
                <div className="w-[152px] text-[#521292] text-base font-medium font-['HK Grotesk'] leading-tight tracking-tight">Dashborad</div>
              </div>
          
              <div className="w-[1197px] h-[57px] left-[259px] top-[20px] absolute">
                <div className="w-[865px] h-11 left-[262px] top-0 absolute">
                  <input type="text" className="w-[594px] h-10 left-0 top-[2px] p-[8px] absolute bg-white" />
                  <img src={notifications} className="w-6 h-6 left-[613px] top-[9px] absolute  overflow-hidden" />
                  <div className="w-48 h-11 left-[673px] top-0 absolute">
                    <div className="w-11 h-11 left-[148px] top-0 absolute">
                      <div className="w-10 h-10 left-[2px] top-[2px] absolute">
                        <img className="w-10 h-10 left-0 top-0 absolute rounded-full" src={Man} />
                      </div>
                      <div className="w-11 h-11 left-0 top-0 absolute rounded-full border border-[#757575]" />
                    </div>
                    <div className="w-[141px] h-[18px] left-0 top-[13px] absolute text-right text-[#252733] text-base font-semibold font-['HK Grotesk'] leading-tight tracking-tight">Ada Tobi Musa</div>
                  </div>
                  <div className="w-[0px] h-8 left-[652px] top-[6px] absolute" />
                  <div className="w-4 h-4 left-[564px] top-[14px] absolute  overflow-hidden">
                    <div className="w-[15px] h-[15px] left-0 top-0 absolute">
                      <img src={Search} className="w-[13px] h-[13px] left-0 top-0 absolute" />
                    </div>
                  </div>
                </div>
                <div className="w-[1197px] h-[3px] left-0 top-[54px] absolute bg-[#521292]" />
                <div className="w-[3px] h-8 absolute left-[920px] top-[6px] bg-[#521292]" />
              </div>




  
  <div className="w-6 h-6 left-[40px] top-[550px] absolute  overflow-hidden" />
  <div className="w-64 h-[918px] left-[3px] top-[-2px] absolute">
    <div className="w-64 h-[918px] left-0 top-0 absolute bg-white shadow-[6px_0px_18px_0px_rgba(0,0,0,0.06)]" />
    <div className="w-[112.62px] h-9 left-[55px] top-[42px] absolute  overflow-hidden" />
    <div className="w-64 h-[7px] left-0 top-[763px] absolute bg-[#521292]" />
  </div>





   <div className="w-[259px] h-[918px] left-0 top-0 absolute bg-white shadow-[6px_0px_18px_0px_rgba(0,0,0,0.06)]" />
     <div className="w-[222px] h-[422px] left-[35px] top-[205px] absolute">
     
     <Link to='/'><img src={Wego} alt="" className='w-[112px] h-9 mt-[-175px] ml-[60px] ' style={{zIndex:3}} /></Link>
       <div className="w-[222px] h-[422px] left-0 top-0 absolute">
         <div className="w-[222px] h-[352px] left-0 top-0 absolute">
           <div className="w-[203px] h-[47px] left-0 top-0 absolute hover:bg-[#eee7f4] hover:border-r-[#521292] hover:border-r-8  overflow-hidden">
             <div className="p-2 left-0 top-[3.50px] absolute justify-start items-center gap-[11px] inline-flex">
               <div className="w-6 h-6 relative">
                 <div className="w-6 h-6 left-0 top-0 absolute">
                     <img src={Vector1} alt="" />
                 </div>
               </div>
               <div className="w-[152px] text-[#521292] text-base font-medium font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/Dashboard'>Dashboard</Link></div>
             </div>
           </div>
   
   
          
           <div className="left-0 top-[122px] absolute justify-start items-center hover:bg-[#eee7f4]  hover:border-r-[#521292] hover:border-r-8 gap-3.5 inline-flex overflow-hidden">
             <div className="p-2 justify-start items-center gap-[11px] flex">
               <div className="w-6 h-6 relative">
                 <div className="w-6 h-6 left-0 top-0 absolute">
                     <img src={building} alt="" />
                 </div>
               </div>
               <div className="w-[140px] text-[#521292] text-base font-medium font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/ViewProperty'>View More Property</Link></div>
             </div>
             <div className="w-[5px] h-[47px] rounded-[1px]" />
           </div>
           <div className="pr-[29px] left-0 top-[61px] absolute justify-start items-center hover:bg-[#eee7f4]  hover:border-r-[#521292] hover:border-r-8 gap-3.5 inline-flex">
             <div className="w-[150px] h-9 relative">
             <div className="w-6 h-6 relative">
                 <div className="w-6 h-6 left-[9px] top-[6px] absolute">
                     <img src={Vector11} alt="" />
                 </div>
               </div>
               <div className="w-[152px] left-[43px] top-[8.50px] absolute text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/Inspection'>Inspection Report</Link></div>
             </div>
             <div className="w-[5px] h-[47px] opacity-0 bg-white rounded-[1px]" />
           </div>
           <div className="left-0 top-[299px] absolute justify-start hover:bg-[#eee7f4]  hover:border-r-[#521292] hover:border-r-8 items-start gap-3.5 inline-flex">
             <div className="p-2 justify-start items-center gap-[11px] flex">
               <img src={Outline} className="w-6 h-6 relative  overflow-hidden" />
               <div className="w-[100px] text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link>Help</Link></div>
             </div>
             <div className="w-[5px] h-[47px] opacity-0 bg-white rounded-[1px]" />
           </div>
           <div className="p-2 left-0 top-[238px] absolute justify-start items-center hover:bg-[#eee7f4]  hover:border-r-[#521292] hover:border-r-8 gap-[11px] inline-flex">
             <div className="w-6 h-6 relative">
               <div className="w-6 h-6 left-0 top-0 absolute">
                 <img src={Setting} alt="" />
               </div>
             </div>
             <div className="w-[130px] text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/Settings'>Settings</Link></div>
           </div>
           <div className="w-[180px] left-0 top-[183px] absolute justify-start hover:bg-[#eee7f4]  hover:border-r-[#521292] hover:border-r-8 items-start gap-3.5 inline-flex">
             <div className="w-[222px] h-[47px] relative bg-[#eee7f4]/0">
               <div className="p-2 left-0 top-0 absolute justify-start items-center gap-[11px] inline-flex">
                 <div className="w-6 h-6 relative">
                   <div className="w-6 h-6 left-0 top-0 absolute">
                     <img src={User} alt="" />
                   </div>
                 </div>
                 <div className="w-[130px] text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link to="/Profile">Profile</Link></div>
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
 
     <div className="w-[112.62px] h-9 left-[55px] top-[42px] absolute  overflow-hidden" />
   <div className="w-64 h-[7px] left-0 top-[763px] absolute bg-[#521292]" />




  <div className="left-[309px] top-[132px] absolute text-[#2d2d2d]/70 text-2xl font-bold font-['HK Grotesk']">View Avaliable Property</div>
  <div className="w-[1063px] h-[775px] left-[307px] top-[190px] absolute  shadow-[-15px_40px_100px_0px_rgba(66,0,255,0.08)]  overflow-hidden">
    <div className="w-[1063px] h-[813px] left-0 top-0 absolute bg-white rounded-xl" />
    {/* <div className="w-[1006px] h-6 left-[28px] top-[722px] absolute  overflow-hidden">
      <div className="left-0 top-[4px] absolute text-black/50 text-xs font-normal font-['Open Sans'] leading-none">Rows per page:</div>
      <div className="w-4 h-4 left-[117px] top-[4px] absolute  overflow-hidden" />
      <div className="w-[21px] h-4 left-[94px] top-[4px] absolute text-right text-black/50 text-xs font-normal font-['Open Sans'] leading-none">20</div>
      <img src={Ar} className="w-4 h-4 rotate-180 left-[945px] mt-[3px] top-0 absolute  overflow-hidden" />
      <img src={Ar} className="w-4 h-4 mt-[3px] left-[968px] top-0 absolute  overflow-hidden" />
      
    </div> */}
    <div className="w-[1032px] h-[0px] left-[21px] top-[72px] absolute border border-[#521292]"></div>
    <div className="w-[1032px] h-[0px] left-[21px] top-[128px] absolute border border-[black]"></div>
    <div className="w-[1032px] h-[0px] left-[21px] top-[191px] absolute border border-[black]"></div>
    <div className="w-[1032px] h-[0px] left-[21px] top-[260px] absolute border border-[#959595]"></div>
    <div className="w-[1032px] h-[0px] left-[21px] top-[332px] absolute border border-[#959595]"></div>
    <div className="w-[1032px] h-[0px] left-[21px] top-[388px] absolute border border-[#959595]"></div>
    <div className="w-[1032px] h-[0px] left-[21px] top-[448px] absolute border border-[#959595]"></div>
    <div className="w-[1032px] h-[0px] left-[21px] top-[506px] absolute border border-[#959595]"></div>
    <div className="w-[1032px] h-[0px] left-[21px] top-[569px] absolute border border-[#959595]"></div>
    <div className="w-[1032px] h-[0px] left-[21px] top-[632px] absolute border border-[#959595]"></div>
    <div className="w-[1032px] h-[0px] left-[21px] top-[695px] absolute border border-[#959595]"></div>
    <div className="w-[17px] h-[17px] left-[21px] top-[37px] absolute">
      <img className="w-[12.39px] h-[12.39px] left-[2.12px] top-[2.12px] absolute" src={Search} />
    </div>
    <div className="w-[102px] h-[15px] left-[46px] top-[37px] absolute text-[#334d6e]/50 text-sm font-medium font-['HK Grotesk'] leading-normal tracking-tight">Search records</div>
    <div className="p-2.5 left-[745px] top-[71px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="p-2.5 justify-start items-start gap-2.5 inline-flex">
        <div className="text-[#4f4f4f] text-sm font-bold font-['HK Grotesk'] leading-none">Property with inspection report</div>
      </div>
    </div>
    <div className="p-2.5 left-[80px] top-[71px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="p-2.5 justify-start items-start gap-2.5 inline-flex">
        <div className="text-[#4f4f4f] text-sm font-bold font-['HK Grotesk'] leading-none">Property Site</div>
      </div>
    </div>
    <div className="p-2.5 left-[408px] top-[71px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="p-2.5 flex-col justify-start items-start gap-2.5 flex">
        <div className="text-[#4f4f4f] text-sm font-bold font-['HK Grotesk'] leading-none">Avaliable property</div>
      </div>
    </div>
    <div className="w-[1137px] h-[362px]  left-[-31px] top-[143px] absolute">
      <div className="w-[1137px] h-14 left-0 top-[306px] absolute " />
      <div className="w-[138px] h-12 left-[111px] top-0 absolute">
        <div className="w-[138px] h-[0px] left-0 top-[48px] absolute"></div>
        <div className="w-[122px] left-[12px] top-[15px] absolute text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">Property Pro.ng</div>
      </div>
      <div className="w-[138px] h-12 left-[446px] top-0 absolute ">
        <div className="w-[138px] h-[0px] left-0 top-[48px] absolute"></div>
        <div className="w-[106px] left-[16px] top-[16px] absolute text-right text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">100</div>
      </div>
      <div className="w-[138px] h-12 left-[874px] top-0 absolute bg-white">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute"></div> */}
        <div className="w-[106px] left-[11px] top-[16px] absolute opacity-80 text-right  text-sm font-normal font-['HK Grotesk'] leading-none">90</div>
      </div>
    </div>
    <div className="w-[901px] h-12 left-[80px] top-[206px] absolute">
      <div className="w-[138px] h-12 left-0 top-0 absolute bg-white">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[122px] left-[12px] top-[15px] absolute text-[#828282] text-sm font-normal font-['HK Grotesk']leading-none">Property Pro.ng</div>
      </div>
      <div className="w-[138px] h-12 left-[335px] top-0 absolute bg-white">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[106px] left-[16px] top-[16px] absolute text-right text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">100</div>
      </div>
      <div className="w-[138px] h-12 left-[763px] top-0 absolute bg-white">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[106px] left-[11px] top-[16px] absolute opacity-80 text-right text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">90</div>
      </div>
    </div>
    <div className="w-[901px] h-0 left-[80px] top-[269px] absolute">
      <div className="w-[138px] h-12 left-0 top-0 absolute  ">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[122px] left-[12px] top-[15px] absolute text-black text-sm font-normal font-['HK Grotesk'] leading-none">Property Pro.ng</div>
      </div>
      <div className="w-[138px] h-12 left-[335px] top-0 absolute">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[106px] left-[16px] top-[16px] absolute text-right text-black text-sm font-normal font-['HK Grotesk'] leading-none">100</div>
      </div>
      <div className="w-[138px] h-12 left-[763px] top-0 absolute">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75" ></div> */}
        <div className="w-[106px] left-[11px] top-[16px] absolute opacity-80 text-right text-black text-sm font-normal font-['HK Grotesk'] leading-none">90</div>
      </div>
    </div>
    <div className="w-[901px] h-12 left-[80px] top-[332px] absolute">
      <div className="w-[138px] h-12 left-0 top-0 absolute">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[122px] left-[12px] top-[15px] absolute text-[#828282] text-sm font-normal font-['HK Grotesk']leading-none">Property Pro.ng</div>
      </div>
      <div className="w-[138px] h-12 left-[335px] top-0 absolute ">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[106px] left-[16px] top-[16px] absolute text-right text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">100</div>
      </div>
      <div className="w-[138px] h-12 left-[763px] top-0 absolute ">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[106px] left-[11px] top-[16px] absolute opacity-80 text-right text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">90</div>
      </div>
    </div>
    <div className="w-[901px] h-12 left-[80px] top-[395px] absolute">
      <div className="w-[138px] h-12 left-0 top-0 absolute bg-white">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[122px] left-[12px] top-[15px] absolute text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">Property Pro.ng</div>
      </div>
      <div className="w-[138px] h-12 left-[335px] top-0 absolute bg-white">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[106px] left-[16px] top-[16px] absolute text-right text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">100</div>
      </div>
      <div className="w-[138px] h-12 left-[763px] top-0 absolute bg-white">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[106px] left-[11px] top-[16px] absolute opacity-80 text-right text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">90</div>
      </div>
    </div>
    <div className="w-[901px] h-12 left-[80px] top-[458px] absolute">
      <div className="w-[138px] h-12 left-0 top-0 absolute">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[122px] left-[12px] top-[15px] absolute text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">Property Pro.ng</div>
      </div>
      <div className="w-[138px] h-12 left-[335px] top-0 absolute">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[106px] left-[16px] top-[16px] absolute text-right text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">100</div>
      </div>
      <div className="w-[138px] h-12 left-[763px] top-0 absolute">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[106px] left-[11px] top-[16px] absolute opacity-80 text-right text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">90</div>
      </div>
    </div>
    <div className="w-[901px] h-12 left-[80px] top-[521px] absolute">
      <div className="w-[138px] h-12 left-0 top-0 absolute bg-white">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[122px] left-[12px] top-[15px] absolute text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">Property Pro.ng</div>
      </div>
      <div className="w-[138px] h-12 left-[335px] top-0 absolute bg-white">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[106px] left-[16px] top-[16px] absolute text-right text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">100</div>
      </div>
      <div className="w-[138px] h-12 left-[763px] top-0 absolute bg-white">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[106px] left-[11px] top-[16px] absolute opacity-80 text-right text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">90</div>
      </div>
    </div>
    <div className="w-[901px] h-12 left-[80px] top-[584px] absolute">
      <div className="w-[138px] h-12 left-0 top-0 absolute bg-white">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[122px] left-[12px] top-[15px] absolute text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">Property Pro.ng</div>
      </div>
      <div className="w-[138px] h-12 left-[335px] top-0 absolute bg-white">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[106px] left-[16px] top-[16px] absolute text-right text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">100</div>
      </div>
      <div className="w-[138px] h-12 left-[763px] top-0 absolute bg-white">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[106px] left-[11px] top-[16px] absolute opacity-80 text-right text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">90</div>
      </div>
    </div>
    <div className="w-[901px] h-12 left-[80px] top-[647px] absolute">
      <div className="w-[138px] h-12 left-0 top-0 absolute bg-white">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[122px] left-[12px] top-[15px] absolute text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">Property Pro.ng</div>
      </div>
      <div className="w-[138px] h-12 left-[335px] top-0 absolute bg-white">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[106px] left-[16px] top-[16px] absolute text-right text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">100</div>
      </div>
      <div className="w-[138px] h-12 left-[763px] top-0 absolute bg-white">
        {/* <div className="w-[138px] h-[0px] left-0 top-[48px] absolute border border-white/75"></div> */}
        <div className="w-[106px] left-[11px] top-[16px] absolute opacity-80 text-right text-[#828282] text-sm font-normal font-['HK Grotesk'] leading-none">90</div>
      </div>
    </div>
     <div div className="w-[1006px] h-6 left-[28px] top-[722px] absolute  overflow-hidden">
        <div className="left-0 top-[4px] absolute text-black/50 text-xs font-normal font-['HK Grotesk'] leading-none">Rows per page:</div>
        <div className="w-[21px] h-4 left-[94px] top-[4px] absolute text-right text-black/50 text-xs font-normal font-['HK Grotesk'] leading-none">20</div>
        <img src={Ar} className="w-4 h-4 rotate-180 left-[945px] mt-[3px] top-0 absolute  overflow-hidden" />
        <img src={Ar} className="w-4 h-4 mt-[3px] left-[968px] top-0 absolute  overflow-hidden" />
      </div>
  </div>
   <img src={Ar} className="w-4 h-4 left-[453px]  rotate-90 mt-[2px] top-[912px] absolute   overflow-hidden" style={{zIndex:2}} />
  <div className="left-[1175px] top-[917px] absolute text-right text-[12px] font-normal  leading-none" >1-20 of 200 items</div> 
</div>
  )
}

export default Mmvp