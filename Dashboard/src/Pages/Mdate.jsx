import React from 'react'
import User from '../Images/User.png'
import Power from '../Images/Power.png'
import Setting from '../Images/Setting.png'
import Outline from '../Images/Outline.png'
import notifications from '../Images/notifications.png'
import Vector1 from '../Images/vector1.png'
import Search from '../Images/Search.png'
import Man from '../Images/Man.png'
import building from '../Images/building.png'
import Vector11 from '../Images/vector11.png'
import { Link } from 'react-router-dom'
import Wego from '../Images/Wego.png'
import Ellipse from '../Images/Ellipse.png'
import Search2 from '../Images/Search2.png'
import Docu from '../Images/Docu.png'
import Arc from '../Images/Arc.png'

const Mdate = () => {
  return (
    <div className="hidden w-[1440px] h-[1024px] relative bg-white  overflow-hidden md:block">
  <div className="w-[1558px] h-[1024px] left-[-59px] top-0 absolute">
    <div className="w-[1558px] h-[1024px] left-0 top-0 absolute bg-[#f8f6fc] rounded-[25px] shadow-[6px_0px_18px_0px_rgba(0,0,0,0.06)]" />
    <div className="w-[1558px] h-[1024px] left-0 top-0 absolute bg-[#f8f6fc]/60 rounded-[25px] shadow-[6px_0px_18px_0px_rgba(0,0,0,0.06)]" />
    <div className="w-6 h-6 left-[471px] top-[473px] absolute" />
  </div>

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
                       <div className="w-[100px] text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/Help'>Help</Link></div>
                     </div>
                     <div className="w-[5px] h-[47px] opacity-0 bg-white rounded-[1px]" />
                   </div>
                   <div className="p-2 left-0 top-[238px] absolute justify-start items-center hover:bg-[#eee7f4]  hover:border-r-[#521292] hover:border-r-8 gap-[11px] inline-flex">
                     <div className="w-6 h-6 relative">
                       <div className="w-6 h-6 left-0 top-0 absolute">
                         <img src={Setting} alt="" />
                       </div>
                     </div>
                     <div className="w-[130px] text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/Set'>Settings</Link></div>
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





  {/* <div className="w-[5px] h-10 left-[243px] top-[422px] absolute bg-[#521292] rounded-[1px]" /> */}
  
  <form className="w-[668.73px] h-[811.50px] left-[700.37px] top-[181.67px] absolute bg-[#fefefe] rounded-[10px]">
    <div className="left-[18.11px] top-[19.50px] absolute text-[#171625] text-lg font-semibold font-['HK Grotesk'] leading-snug">General settings</div>
    <div className="left-[584.14px] top-[23.77px] absolute justify-start items-center gap-[7px] inline-flex">
      <div className="w-4 h-4 pr-px pb-px justify-center items-center flex overflow-hidden">
        <div className="w-[15px] h-[15px] relative">
          <img src={Search2} className="w-[13px] h-[13px] left-0 top-0 absolute" />
        </div>
      </div>
      <div className="opacity-80 text-[#bdbdbd] text-xs font-normal font-['HK Grotesk'] leading-tight tracking-tight">Search</div>
    </div>
    <div className="w-7 h-7 left-[273.75px] top-[337.27px] absolute" />
    <div className="w-[671px] h-[0px] left-[-1.94px] top-[62.32px] absolute border border-[#eef0f6]"></div>
    <div className="w-[164px] h-[54px] left-[477.65px] top-[727.96px] absolute">
      <div className="w-[164px] h-[54px] left-0 top-0 absolute bg-[#521292] rounded-md" />
      <button className="left-[64.10px] top-[17.80px] absolute text-[#fefefe] text-base font-medium font-['HK Grotesk'] capitalize">Save</button>
    </div>
    <div className="w-[164px] h-[54px] left-[294.64px] top-[726.96px] absolute">
      <div className="w-[164px] h-[54px] left-0 top-0 absolute rounded-md border border-[#ff0033]" />
      <button className="left-[62.10px] top-[17.79px] absolute text-[#ff0033] text-base font-medium font-['HK Grotesk'] capitalize">Clear</button>
    </div>
    <div className="left-[34.84px] top-[80.76px] absolute flex-col justify-center items-start gap-[25px] inline-flex">
      <div className="w-[590px] h-[26.99px] relative">
        <div className="w-[99px] left-[12.60px] top-[1.07px] absolute text-center text-[#838ea6] text-xs font-medium font-['HK Grotesk'] leading-none">Company info</div>
        <div className="w-[134px] left-[149.60px] top-[0.82px] absolute text-center text-[#304269] text-xs font-medium font-['HK Grotesk'] leading-none">Date and time setting</div>
        <div className="w-[590px] h-[0px] left-[0.15px] top-[26.99px] absolute border border-[#bdbdbd]"></div>
        <div className="w-[161px] h-[0px] left-[135.85px] top-[27.74px] absolute border-4 border-[#521292]"></div>
      </div>
      <div className="self-stretch flex-col justify-start items-start gap-[21px] inline-flex">
        <div className="h-[74.76px] relative">
          <div className="w-[227px] h-[21px] left-[0.48px] top-0 absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Date format</div>
          <div className="w-[590px] h-[54px] left-[0.11px] top-[20.76px] absolute">
            <div className="w-6 h-[23px] left-[9.47px] top-[12.29px] absolute" />
            <input type="date" className="w-[590px] h-[54px] pl-3 left-0 top-0 absolute rounded-md border border-[#bdbdbd] uppercase"  />
            {/* <div className="left-[22.10px] top-[18.36px] absolute text-[#828282] text-sm font-medium font-['Montserrat']">DD-MM-YYYY</div> */}
            {/* <div className="w-4 h-4 left-[563.13px] top-[22.09px] absolute origin-top-left rotate-[89.69deg] justify-center items-center inline-flex">
              <div className="w-4 h-4 relative">
              </div>
            </div> */}
          </div>
        </div>
        <div className="h-[75px] relative">
          <div className="w-[227px] h-[21px] left-[0.41px] top-0 absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Time zone</div>
          <div className="w-[590px] h-[54px] left-[0.11px] top-[21px] absolute">
            <div className="w-6 h-[23px] left-[9.88px] top-[12.05px] absolute" />
            <input type='timezone' className="w-[590px] h-[54px] left-0 top-0 absolute rounded-md border border-[#bdbdbd]" placeholder='Africa/Lagos' />
            {/* <div className="w-4 h-4 left-[562.66px] top-[21.85px] absolute origin-top-left rotate-[89.69deg] justify-center items-center inline-flex">
              <div className="w-4 h-4 relative">
              </div>
            </div> */}
            {/* <div className="left-[22.51px] top-[18.12px] absolute text-[#828282] text-sm font-medium font-['Montserrat']">Africa/Lagos</div> */}
            <select className="w-[590px] h-[54px] left-0 top-0 pl-3 absolute rounded-md border border-[#bdbdbd]">
               <option value="">Africa/Lagos</option>
               <option value="">Europe/Machester</option>
            </select>
          </div>
        </div>
        <div className="w-[178.25px] h-[75.24px] relative">
          <div className="w-[178px] h-[54px] left-[0.37px] top-[21.24px] absolute rounded-md border border-[#bdbdbd]" />
          <div className="w-[84px] h-[54px] left-[0.37px] top-[21.24px] absolute">
            <div className="w-[84px] h-[54px] left-0 top-0 absolute bg-[#521292] rounded-md" />
            <div className="left-[14.92px] top-[18.19px] absolute text-[#fefefe] text-sm font-medium font-['HK Grotesk']"><Link>12 Hours</Link></div>
          </div>
          <div className="left-[102.29px] top-[39.91px] absolute text-[#828282] text-sm font-medium font-['HK Grotesk']"><Link>24 Hours</Link></div>
          <div className="w-[127px] h-[21px] left-0 top-0 absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Time format</div>
        </div>
      </div>
    </div>
  </form>

 <div className="left-[289px] top-[126px] absolute text-[#171725] text-2xl font-medium font-['HK Grotesk']">Settings</div>
  <div className="w-[371.87px] h-[556.19px] left-[292px] top-[180px] absolute bg-[#fefefe] rounded-[10px]">
          <div className="w-[325px] h-[0px] left-[-1.80px] top-[158.99px] absolute border border-[#eef0f6]"></div>
          <div className="h-[174.86px] left-[19.31px] top-[178.11px] absolute flex-col justify-start items-start gap-1 inline-flex">
            <div className="pl-6 pr-[45px] py-[15px] hover:bg-[#eee7f4] rounded-[5px] justify-start items-center inline-flex overflow-hidden">
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
                    <img src={Arc} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-6 pr-[45px] py-[15px] hover:bg-[#eee7f4] rounded-[5px] justify-end items-center inline-flex overflow-hidden">
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
                  <img src={Arc} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-6 pr-[45px] py-[15px] hover:bg-[#eee7f4] rounded-[5px] justify-end items-center inline-flex overflow-hidden">
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
                   <img src={Arc} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
             <img className="w-[83px] h-[83px] left-[119.57px] top-[41.66px] absolute rounded-[60px]" src={Ellipse} />
             <div className="left-[114.01px] top-[131.16px] absolute text-[#171625] text-sm font-medium font-['HK Grotesk'] leading-none">Ada Tobi Musa</div>
     </div>
</div>
  )
}

export default Mdate