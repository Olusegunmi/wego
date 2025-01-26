import React from 'react'
import Menu from '../Images/Menu.png'
import Man from '../Images/Man.png'
import Search from '../Images/search.png'
import Add from '../Images/Add.png'
import User from '../Images/User.png'
import Power from '../Images/Power.png'
import Setting from '../Images/Setting.png'
import Outline from '../Images/Outline.png'
import Vector1 from '../Images/vector1.png'
import Vector11 from '../Images/vector11.png'
import building from '../Images/building.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Mmvp from '../Pages/Mmvp'

const Vap = () => {
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
  



  <div className="w-[380px] h-[685px] left-[20px] top-[172px] absolute bg-white rounded-[10px]" />
  <div className="w-[17px] h-[17px] left-[44px] top-[208px] absolute">
    <img className="w-[12.39px] h-[12.39px] left-[2.12px] top-[2.12px] absolute" src={Search} />
  </div>


  <div className="w-[102px] h-[15px] left-[69px] top-[208px] absolute text-[#334d6e]/50 text-sm font-medium font-['HK Grotesk'] leading-normal tracking-tight">Search records</div>

  <div className="w-[204px] left-[48px] top-[110px] absolute text-center text-[#171725] text-lg font-bold font-['HK Grotesk']">View Avaliable Property</div>
  <div className="w-[53px] left-[39px] top-[267px] absolute text-[#4f4f4f] text-xs font-bold font-['HK Grotesk'] leading-none">Property Site</div>
  <div className="w-[84px] h-[34px] left-[162px] top-[267px] absolute text-center text-[#4f4f4f] text-xs font-bold font-['HK Grotesk'] leading-none">Avaliable property</div>
  <div className="w-[98px] left-[290px] top-[267px] absolute text-[#4f4f4f] text-xs font-bold font-['HK Grotesk'] leading-none">Property with inspection report</div>
  <div className="w-[94px] left-[39px] top-[326px] absolute text-sm font-normal font-['Montserrat'] leading-none">Property Pro.ng</div>
  <div className="w-[33px] left-[198px] top-[335px] absolute text-right text-sm font-normal font-['Montserrat'] leading-none">100</div>
  <div className="w-[33px] left-[269px] top-[335px] absolute text-right text-sm font-normal font-['Montserrat'] leading-none">90</div>
  <div className="w-[94px] left-[39px] top-[376px] absolute text-sm font-normal font-['Montserrat'] leading-none">Property Pro.ng</div>
  <div className="w-[33px] left-[198px] top-[385px] absolute text-right  text-sm font-normal font-['Montserrat'] leading-none">100</div>
  <div className="w-[106px] left-[269px] top-[385px] absolute opacity-80 text-right text-sm font-normal font-['Montserrat'] leading-none">90</div>
  <div className="w-[94px] left-[39px] top-[426px] absolute  text-sm font-normal font-['Montserrat'] leading-none">Property Pro.ng</div>
  <div className="w-[33px] left-[198px] top-[435px] absolute text-right  text-sm font-normal font-['Montserrat'] leading-none">100</div>
  <div className="w-[106px] left-[269px] top-[435px] absolute opacity-80 text-right text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">90</div>
  <div className="w-[94px] left-[39px] top-[476px] absolute text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">Property Pro.ng</div>
  <div className="w-[33px] left-[198px] top-[485px] absolute text-right text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">100</div>
  <div className="w-[106px] left-[269px] top-[485px] absolute opacity-80 text-right text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">90</div>
  <div className="w-[94px] left-[39px] top-[526px] absolute text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">Property Pro.ng</div>
  <div className="w-[33px] left-[198px] top-[535px] absolute text-right text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">100</div>
  <div className="w-[106px] left-[269px] top-[535px] absolute opacity-80 text-right text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">90</div>
  <div className="w-[94px] left-[39px] top-[576px] absolute text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">Property Pro.ng</div>
  <div className="w-[33px] left-[198px] top-[585px] absolute text-right text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">100</div>
  <div className="w-[106px] left-[269px] top-[585px] absolute opacity-80 text-right text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">90</div>
  <div className="w-[94px] left-[39px] top-[626px] absolute text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">Property Pro.ng</div>
  <div className="w-[33px] left-[198px] top-[635px] absolute text-right text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">100</div>
  <div className="w-[106px] left-[269px] top-[635px] absolute opacity-80 text-right text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">90</div>
  <div className="w-[94px] left-[39px] top-[676px] absolute text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">Property Pro.ng</div>
  <div className="w-[33px] left-[198px] top-[685px] absolute text-right text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">100</div>
  <div className="w-[106px] left-[269px] top-[685px] absolute opacity-80 text-right text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">90</div>
  <div className="w-[94px] left-[39px] top-[726px] absolute text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">Property Pro.ng</div>
  <div className="w-[33px] left-[198px] top-[735px] absolute text-right text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">100</div>
  <div className="w-[106px] left-[269px] top-[735px] absolute opacity-80 text-right text-[#828282] text-sm font-normal font-['Montserrat'] leading-none">90</div>
  <div className="w-[377px] h-[0px] left-[21px] top-[251px] absolute border border-[#521292]"></div>
  <div className="left-[283px] top-[792px] absolute text-right text-black/50 text-xs font-normal font-['Open Sans'] leading-none">1-20 of 200 items</div>
  <div className="w-6 h-6 left-[322px] top-[816px] absolute  overflow-hidden" />
  <div className="w-6 h-6 left-[353px] top-[816px] absolute  overflow-hidden" />
  <div className="left-[36px] top-[792px] absolute text-black/50 text-xs font-normal font-['Open Sans'] leading-none">Rows per page:</div>
  <div className="w-4 h-4 left-[153px] top-[792px] absolute  overflow-hidden" />
  <div className="w-[21px] h-4 left-[130px] top-[792px] absolute text-right text-black/50 text-xs font-normal font-['Open Sans'] leading-none">20</div>

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

<Mmvp />
</>
  )
}

export default Vap