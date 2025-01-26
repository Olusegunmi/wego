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
import Maccountset from './Maccountset'
import Useredit from '../Images/Useredit.png'
import Fb from '../Images/Fb.png'
import Twitter from '../Images/Twitter.png'
import Linkedin from '../Images/Linkedin.png'
import Instagram from '../Images/Instagram.png'
import Acr from '../Images/Acr.png'
import Docu from '../Images/Docu.png'


const AccountSet = () => {
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
      <div className="pl-6 pr-11 py-[15px] hover:bg-[#eee7f4] rounded-[5px] justify-start items-center inline-flex overflow-hidden">
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
      <div className="pl-6 pr-[11px] py-[15px] hover:bg-[#eee7f4] rounded-[5px] justify-end items-center inline-flex overflow-hidden">
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
  </div>
  <div className="w-[376.06px] h-[105.26px] left-[26.33px] top-[365.52px] absolute origin-top-left  bg-[#fefefe] rounded-[10px]">
    <div className="w-7 h-7 left-[-23.48px] top-[-336.05px] absolute" />
    {/* <div className="w-[671px] h-[0px] left-[0.82px] top-[62px] absolute border border-[#eef0f6]"></div> */}
    <div className="w-[86.35px] h-[28.43px] left-[273.37px] top-[40.17px] absolute">
      <div className="w-[86.35px] h-[28.43px] left-0 top-0 absolute bg-[#521292] rounded-md" />
      <div className="w-[33.86px] h-[12.86px] left-[26.01px] top-[2.04px] absolute text-[#fefefe] text-base font-medium font-['HK Grotesk'] capitalize"><Link>Edit</Link></div>
    </div>
    <div className="w-[35px] h-[35px] left-[24.97px] top-[34.42px] absolute justify-center items-center inline-flex">
      <div className="w-[35px] h-[35px] relative">
        <div className="w-[23.95px] h-[23.95px] left-[5.12px] top-[8.12px] absolute">
          <img src={Useredit} alt="" />
        </div>
      </div>
    </div>
    <div className="left-[69.01px] top-[42.59px] absolute text-[#1c1c1c] text-base font-semibold font-['HK Grotesk']">Edit  Profile Setting</div>
  </div>
  <div className="w-[382.22px] h-[491.85px] left-[23.77px] top-[503.71px] absolute origin-top-left  bg-[#fefefe] rounded-[10px]">
    <div className="w-7 h-7 left-[-17.48px] top-[-143.05px] absolute" />
    {/* <div className="w-[671px] h-[0px] left-[0.82px] top-[62px] absolute border border-[#eef0f6]"></div> */}
    <div className="left-[39.97px] top-[34.51px] absolute text-[#1c1c1c]/50 text-base font-semibold font-['HK Grotesk']">Social Media Account</div>
    <div className="w-[364.29px] h-[54px] left-[8.79px] top-[176.21px] absolute rounded-md border border-[#bdbdbd]" />
    <div className="w-[364.29px] h-[54px] left-[8.54px] top-[98.61px] absolute rounded-md border border-[#bdbdbd]" />
    <div className="w-[364.29px] h-[54px] left-[9.04px] top-[255.21px] absolute rounded-md border border-[#bdbdbd]" />
    <div className="w-[364.29px] h-[54px] left-[9.29px] top-[334.22px] absolute rounded-md border border-[#bdbdbd]" />
    <div className="p-2.5 left-[14.32px] top-[99.23px] absolute justify-center items-center gap-2.5 inline-flex">
      <div className="w-6 h-6 relative">
              <img src={Fb} alt="" />
            </div>
      <div className="p-[5px] justify-start items-end gap-2.5 flex">
        <div className="w-[72px] text-right text-black text-base font-semibold font-['HK Grotesk'] leading-tight tracking-tight">Facebook</div>
      </div>
    </div>
    <div className="p-2.5 left-[14.74px] top-[177.23px] absolute justify-center items-center gap-2.5 inline-flex">
       <div className="w-6 h-6 relative">
               <img src={ Twitter} alt="" />
             </div>
      <div className="p-[5px] justify-start items-end gap-2.5 flex">
        <div className="text-right text-black text-base font-semibold font-['HK Grotesk'] leading-tight tracking-tight">Twitter</div>
      </div>
    </div>
    <div className="p-2.5 left-[15.17px] top-[257.23px] absolute justify-center items-center gap-2.5 inline-flex">
       <div className="w-6 h-6 relative">
               <img src={Linkedin} alt="" />
             </div>
      <div className="p-[5px] justify-start items-end gap-2.5 flex">
        <div className="text-right text-black text-base font-semibold font-['HK Grotesk'] leading-tight tracking-tight">Linkedin</div>
      </div>
    </div>
    <div className="p-2.5 left-[15.59px] top-[336.24px] absolute justify-center items-center gap-2.5 inline-flex">
      <div className="w-6 h-6 relative">
         <img src={Instagram} alt="" />
      </div>
      <div className="p-[5px] justify-start items-end gap-2.5 flex">
        <div className="w-[74px] text-right text-black text-base font-medium font-['HK Grotesk'] leading-tight tracking-tight">Instagram</div>
      </div>
    </div>
    <div className="w-[96.37px] h-[31.73px] left-[468.30px] top-[466.87px] absolute">
      <div className="w-[96.37px] h-[31.73px] left-0 top-0 absolute bg-[#521292] rounded-md" />
      <div className="w-[21.74px] h-[11.17px] left-[37.67px] top-[10.46px] absolute text-[#fefefe] text-base font-medium font-['HK Grotesk'] capitalize"><Link>Save</Link></div>
    </div>
    <div className="left-[305.41px] top-[116.02px] absolute text-[#828282] text-xs font-medium font-['HK Grotesk']"><Link>Add / Edit</Link></div>
    <div className="left-[305.84px] top-[196.02px] absolute text-[#828282] text-xs font-medium font-['HK Grotesk']"><Link>Add / Edit</Link></div>
    <div className="left-[306.26px] top-[274.02px] absolute text-[#828282] text-xs font-medium font-['HK Grotesk']"><Link>Add / Edit</Link></div>
    <div className="left-[306.69px] top-[354.03px] absolute text-[#828282] text-xs font-medium font-['HK Grotesk']"><Link>Add / Edit</Link></div>
    <div className=" w-[115px] h-[37.87px] left-[258.62px] top-[436.71px] absolute">
      <div className="w-[115px] h-[37.87px] left-0 top-0 absolute bg-[#521292] rounded-md" />
      <div className="w-10 h-5 left-[38.03px] top-[8.36px] absolute  text-[#fefefe] text-base font-medium font-['HK Grotesk'] capitalize"><Link>Save</Link></div>
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
               <div className="w-[152px] left-[43px] top-[8.50px] absolute text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/Inspection'>Inspection Report</Link></div>
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
                 <div className="w-[152px] text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link to="/Profile">Profile</Link></div>
               </div>
               <div className="w-[5px] h-[47px] left-[217px] top-0 absolute rounded-[1px]" />
             </div>
             <div className="w-[5px] h-[47px] opacity-0 bg-white rounded-[1px]" />
           </div>
         </div>
         <div className="p-2 left-0 top-[382px] absolute justify-start items-center gap-[11px] inline-flex">
           <img src={Power} className="w-6 h-6 relative  overflow-hidden" />
           <div className="w-[152px] text-[#521292] text-base font-bold font-['HK Grotesk'] leading-tight tracking-tight"><Link>Logout</Link></div>
         </div>
       </div>
       </div>
         <div className='w-[265px] h-[5px] mt-[30px] left-[-20px] top-[554px] bg-[#521292]'></div>
          
        </div>
</div>
<Maccountset />
</>
  )
}

export default AccountSet