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
import Acr from '../Images/Acr.png'
import Useredit from '../Images/Useredit.png'
import Fb from '../Images/Fb.png'
import Twitter from '../Images/Twitter.png'
import Linkedin from '../Images/Linkedin.png'
import Instagram from '../Images/Instagram.png'
import Docu from '../Images/Docu.png'


const Maccountset = () => {
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
                <img src={Acr} alt="" />
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
                <div className="w-[137px] h-4 text-[#3a3a3a] text-sm font-medium font-['HK Grotesk'] leading-none">Account settings</div>
              </div>
              <div className="w-6 h-6 justify-center items-center flex">
                <div className="w-6 h-6 relative">
                  <img src={Acr} alt="" />
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
           <img className="w-[83px] h-[83px] left-[119.57px] top-[41.66px] absolute rounded-[60px]" src={Ellipse} />
           <div className="left-[114.01px] top-[131.16px] absolute text-[#171625] text-sm font-medium font-['HK Grotesk'] leading-none">Ada Tobi Musa</div>
      </div>
     

  
  <div className="w-[676.23px] h-[105.26px] left-[693.22px] top-[180.71px] absolute bg-[#fefefe] rounded-[10px]">
    <div className="w-7 h-7 left-[276.52px] top-[-336.05px] absolute" />
    {/* <div className="w-[671px] h-[0px] left-[0.82px] top-[62px] absolute border border-[#eef0f6]"></div> */}
    <div className="left-[544.51px] top-[745.45px] absolute text-[#fefefe] text-base font-medium font-['Montserrat'] capitalize"><Link>Save</Link></div>
    <div className="w-[127.56px] h-[42px] left-[519.96px] top-[32.14px] absolute">
      <div className="w-[127.56px] h-[42px] left-0 top-0 absolute bg-[#521292] rounded-md" />
      <div className="w-[35px] h-[19px] left-[46.07px] top-[12.25px] absolute text-[#fefefe] text-base font-medium font-['HK Grotesk'] capitalize"><Link>Edit</Link></div>
    </div>
    <div className="w-[35px] h-[35px] left-[24.97px] top-[34.42px] absolute justify-center items-center inline-flex">
      <div className="w-[35px] h-[35px] relative">
        <div className="w-[30.95px] h-[30.95px] left-[10.12px] top-[3.12px] absolute">
          <img src={Useredit} alt="" />
        </div>
      </div>
    </div>
    <div className="left-[89.01px] top-[42.77px] absolute text-[#1c1c1c] text-base font-semibold font-['HK Grotesk']">Edit  Profile Setting</div>
  </div>
  <div className="w-[676.23px] h-[559.96px] left-[693.22px] top-[373.71px] absolute bg-[#fefefe] rounded-[10px]">
    < div className="w-7 h-7 left-[276.52px] top-[-109.05px] absolute" />
    {/* <div className="w-[671px] h-[0px] left-[0.82px] top-[62px] absolute border border-[#eef0f6]"></div> */}
    <div className="w-[164px] h-[54px] left-[480.41px] top-[727.65px] absolute">
      <div className="w-[164px] h-[54px] left-0 top-0 absolute bg-[#521292] rounded-md" />
      <div className="left-[64.10px] top-[17.80px] absolute text-[#fefefe] text-base font-medium font-['HK Grotesk'] capitalize">Save</div>
    </div>
    <div className="w-[164px] h-[54px] left-[297.41px] top-[726.64px] absolute">
      <div className="w-[164px] h-[54px] left-0 top-0 absolute rounded-md border border-[#ff0033]" />
      <div className="left-[62.10px] top-[17.79px] absolute text-[#ff0033] text-base font-medium font-['HK Grotesk'] capitalize">Clear</div>
    </div>
    <div className="left-[39.97px] top-[34.51px] absolute text-[#1c1c1c]/50 text-base font-semibold font-['HK Grotesk']">Social Media Account</div>
    <div className="w-[590px] h-[0px] left-[40.17px] top-[72.51px] absolute border border-[#521292]/50"></div>
    <div className="w-[590px] h-[54px] left-[40.31px] top-[97.51px] absolute rounded-md border border-[#bdbdbd]" />
    <div className="w-[590px] h-[54px] left-[40.73px] top-[176.51px] absolute rounded-md border border-[#bdbdbd]" />
    <div className="w-[590px] h-[54px] left-[41.16px] top-[255.51px] absolute rounded-md border border-[#bdbdbd]" />
    <div className="w-[590px] h-[54px] left-[41.58px] top-[334.52px] absolute rounded-md border border-[#bdbdbd]" />
    <div className="p-2.5 left-[50.32px] top-[99.56px] absolute justify-center items-center gap-2.5 inline-flex">
    <div className="w-6 h-6 relative">
        <img src={Fb} alt="" />
      </div>
      <div className="p-[5px] justify-start items-end gap-2.5 flex">
        <div className="text-right text-black text-base font-semibold font-['HK Grotesk'] leading-tight tracking-tight">Facebook</div>
      </div>
    </div>
    <div className="p-2.5 left-[50.74px] top-[177.57px] absolute justify-center items-center gap-2.5 inline-flex">
    <div className="w-6 h-6 relative">
        <img src={Twitter} alt="" />
      </div>
      <div className="p-[5px] justify-start items-end gap-2.5 flex">
        <div className="text-right text-black text-base font-semibold font-['HK Grotesk'] leading-tight tracking-tight">Twitter</div>
      </div>
    </div>
    <div className="p-2.5 left-[51.17px] top-[257.57px] absolute justify-center items-center gap-2.5 inline-flex">
      <div className="w-6 h-6 relative">
        <img src={Linkedin} alt="" />
      </div>
      <div className="p-[5px] justify-start items-end gap-2.5 flex">
        <div className="text-right text-black text-base font-semibold font-['HK Grotesk'] leading-tight tracking-tight">Linkedin</div>
      </div>
    </div>
    <div className="p-2.5 left-[51.60px] top-[336.57px] absolute justify-center items-center gap-2.5 inline-flex">
      <div className="w-6 h-6 relative">
        <img src={Instagram} alt="" />
      </div>
      <div className="p-[5px] justify-start items-end gap-2.5 flex">
        <div className="text-right text-black text-base font-medium font-['HK Grotesk'] leading-tight tracking-tight">Instagram</div>
      </div>
    </div>
    <div className="w-[164px] h-[54px] left-[468.30px] top-[466.86px] absolute">
      <div className="w-[164px] h-[54px] left-0 top-0 absolute bg-[#521292] rounded-md" />
      <div className="left-[64.10px] top-[17.80px] absolute text-[#fefefe] text-base font-medium font-['HK Grotesk'] capitalize"><Link> Save</Link></div>
    </div>
    <div className="left-[551.43px] top-[118.32px] absolute text-[#828282] text-xs font-medium font-['HK Grotesk']"><Link>Add / Edit</Link></div>
    <div className="left-[551.86px] top-[198.32px] absolute text-[#828282] text-xs font-medium font-['HK Grotesk']"><Link>Add / Edit</Link></div>
    <div className="left-[552.28px] top-[276.32px] absolute text-[#828282] text-xs font-medium font-['HK Grotesk']"><Link>Add / Edit</Link></div>
    <div className="left-[552.71px] top-[356.33px] absolute text-[#828282] text-xs font-medium font-['HK Grotesk']"><Link>Add / Edit</Link></div>
  </div>
</div>
  )
}

export default Maccountset