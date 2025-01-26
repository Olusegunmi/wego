import React from 'react'
import { useState } from 'react'
import Menu from '../Images/Menu.png'
import Man from '../Images/Man.png'
import Add from '../Images/Add.png'
import User from '../Images/User.png'
import Power from '../Images/Power.png'
import Setting from '../Images/Setting.png'
import Outline from '../Images/Outline.png'
import building from '../Images/building.png'
import Vector1 from '../Images/vector1.png'
import Vector11 from '../Images/vector11.png'
import { Link } from 'react-router-dom'
import Minspection from './Minspection'

const Inspection = () => {
     const [navbar, setNavbar] = useState (true)
       
           const HandleClick = ()=> {
             setNavbar(!navbar)
           }
    
  return (
    <>
    <div className="w-[426px] h-[1009px] relative bg-white mx-auto justify-center ml-[-14px]  grid   overflow-hidden md:hidden">
  <div className="w-[490px] h-[984px] left-[-27px] top-[25px] absolute bg-[#f8f6fc] " />
  <div className="w-[428px] h-20 left-0 top-0 absolute bg-neutral-50  overflow-hidden">
    <div className="w-[39px] h-[39px] left-[40px] top-[21px] absolute">
      <div className="w-6 h-6 left-[8px] top-[7px] absolute" onClick={HandleClick}>
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
  <div className="w-[380px] h-[776px] left-[24px] top-[160px] absolute bg-white rounded-[10px]" />
  <div className="w-[123px] left-[34px] top-[92px] absolute text-[#171725] text-[15px] font-bold font-['HK Grotesk']">View Avaliable Property</div>
  <div className="w-[160px] h-[37px] px-[5px] py-[17px] left-[244px] top-[90px] absolute bg-[#521292] rounded-sm justify-center items-center gap-2.5 inline-flex">
    <div className="text-[#fefefe] text-[13px] font-medium font-['HK Grotesk'] capitalize"><Link to='/RequestFS'>Request for inspection</Link></div>
  </div>
  <div className="w-[153px] left-[39px] top-[185px] absolute text-center text-[#521292] text-xs font-medium font-['HK Grotesk'] leading-none">View Inspection Report</div>
  <div className="w-[119px] left-[215px] top-[185px] absolute text-center text-[#838ea6] text-xs font-medium font-['HK Grotesk'] leading-none"><Link to='/InspectRequest'>Inspection Request</Link></div>
  <div className="w-[349px] h-[0px] left-[42px] top-[211px] absolute border-2 border-black"></div>
  <div className="w-[152px] h-[0px] left-[42px] top-[211px] absolute border-4 border-[#521292]"></div>
  <div className="w-6 h-6 left-[367px] top-[182px] absolute  overflow-hidden" />
  <div className="w-[58px] left-[309px] top-[232px] absolute text-center text-black text-[10px] font-bold font-['HK Grotesk'] leading-none">Expires on</div>
  <div className="w-[91px] left-[42px] top-[232px] absolute text-center text-black text-[10px] font-bold font-['HK Grotesk'] leading-none">Viewed Property </div>
  <div className="w-[169px] h-[655px] left-[48px] top-[269px] absolute">
    <div className="w-[156px] h-[55px] left-0 top-0 absolute"><span class="text-[#939393] text-[10px] font-semibold font-['HK Grotesk'] capitalize">20 Flats of 5 Unit Blocks Estate</span><span class="text-[#939393] text-[10px] font-medium font-['HK Grotesk'] capitalize">
    <br/>Kotopo Along Osiele Road before, UNAB university Junction, Abekouta
    Block of Flats, E</span></div>
    <div className="w-[156px] h-[78.55px] left-[-0px] top-[91.22px] absolute"><span class="text-[#939393] text-[10px] font-semibold font-['HK Grotesk'] capitalize">20 Flats of 5 Unit Blocks Estate</span><span class="text-[#939393] text-[10px] font-medium font-['HK Grotesk'] capitalize">
    <br/>Kotopo Along Osiele Road before, UNAB university Junction, Abekouta
    Block of Flats, E</span></div>
    <div className="w-[156px] h-[78.55px] left-[-0px] top-[183.70px] absolute"><span class="text-[#939393] text-[10px] font-semibold font-['HK Grotesk'] capitalize">20 Flats of 5 Unit Blocks Estate</span><span class="text-[#939393] text-[10px] font-medium font-['HK Grotesk'] capitalize">
    <br/>Kotopo Along Osiele Road before, UNAB university Junction, Abekouta
    Block of Flats, E</span></div>
    <div className="w-[156px] h-[78.55px] left-[-0px] top-[285.06px] absolute"><span class="text-[#939393] text-[10px] font-semibold font-['HK Grotesk'] capitalize">20 Flats of 5 Unit Blocks Estate</span><span class="text-[#939393] text-[10px] font-medium font-['HK Grotesk'] capitalize">
    <br/>Kotopo Along Osiele Road before, UNAB university Junction, Abekouta
    Block of Flats, E</span></div>
    <div className="w-[156px] h-[78.55px] left-[-0px] top-[382.61px] absolute"><span class="text-[#1e1e1e] text-[10px] font-semibold font-['HK Grotesk'] capitalize">20 Flats of 5 Unit Blocks Estate</span><span class="text-[#1e1e1e] text-[10px] font-medium font-['HK Grotesk'] capitalize">
    <br/>Kotopo Along Osiele Road before, UNAB university Junction, Abekouta
    Block of Flats, E</span></div>
    <div className="w-[156px] h-[78.55px] left-[-0px] top-[480.16px] absolute"><span class="text-[#939393] text-[10px] font-semibold font-['HK Grotesk'] capitalize">20 Flats of 5 Unit Blocks Estate</span><span class="text-[#939393] text-[10px] font-medium font-['HK Grotesk'] capitalize">
    <br/>Kotopo Along Osiele Road before, UNAB university Junction, Abekouta
    Block of Flats, E</span></div>
    <div className="w-[169px] h-[79px] left-0 top-[576px] absolute"><span class="text-[#939393] text-[10px] font-semibold font-['HK Grotesk'] capitalize">20 Flats of 5 Unit Blocks Estate</span><span class="text-[#939393] text-[10px] font-medium font-['HK Grotesk'] capitalize">
    <br/>Kotopo Along Osiele Road before, UNAB university Junction, Abekouta
    Block of Flats, E</span></div>
  </div>
  <div className="w-[55px] h-2 left-[309px] top-[293px] absolute text-[#939393] text-[10px] font-medium font-['HK Grotesk'] leading-3">2022-04-05</div>
  <div className="w-[55px] h-2 left-[309px] top-[383px] absolute text-[#939393] text-[10px] font-medium font-['HK Grotesk'] leading-3">2022-04-05</div>
  <div className="w-[55px] h-2 left-[309px] top-[476px] absolute text-[#939393] text-[10px] font-medium font-['HK Grotesk'] leading-3">2022-04-05</div>
  <div className="w-[55px] h-2 left-[309px] top-[573px] absolute text-[#939393] text-[10px] font-medium font-['HK Grotesk'] leading-3">2022-04-05</div>
  <div className="w-[58px] h-2 left-[309px] top-[675px] absolute text-[#939393] text-[10px] font-bold font-['HK Grotesk'] leading-3">2022-04-05</div>
  <div className="w-[55px] h-2 left-[309px] top-[772px] absolute text-[#939393] text-[10px] font-medium font-['HK Grotesk'] leading-3">2022-04-05</div>
  <div className="w-[55px] h-2 left-[309px] top-[864px] absolute text-[#939393] text-[10px] font-medium font-['HK Grotesk'] leading-3">2022-04-05</div>
  <div className="w-[382px] h-[0px] left-[22px] top-[342px] absolute border border-[#bdbdbd]"></div>
  <div className="w-[382px] h-[0px] left-[22px] top-[439px] absolute border border-[#bdbdbd]"></div>
  <div className="w-[382px] h-[0px] left-[22px] top-[537px] absolute border border-[#bdbdbd]"></div>
  <div className="w-[382px] h-[0px] left-[22px] top-[633px] absolute border border-[#bdbdbd]"></div>
  <div className="w-[382px] h-[0px] left-[22px] top-[734px] absolute border border-[#bdbdbd]"></div>
  <div className="w-[382px] h-[0px] left-[22px] top-[828px] absolute border border-[#bdbdbd]"></div>
  <div className="w-1 h-[653px] left-[384px] top-[255px] absolute">
    <div className="w-1 h-[653px] left-0 top-0 absolute bg-[#c4c4c4] rounded-[50px]" />
    <div className="w-[2.86px] h-[57.67px] left-[0.57px] top-[70.09px] absolute bg-white rounded-[50px]" />
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
             
       
       
       
             <div className="w-[200px] h-[47px] hover:bg-[#eee7f4] hover:border-r-[#521292] hover:border-r-8  left-[0] top-[122px] absolute justify-start items-center gap-3.5 inline-flex overflow-hidden">
               <div className="p-2 justify-start items-center gap-[11px] flex">
                 <div className="w-6 h-6 relative">
                   <div className="w-6 h-6 left-0 top-0 absolute">
                        <img src={building} alt="" />
                   </div>
                 </div>
                 <div className="w-[152px] text-[#521292] text-base font-medium font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/ViewProperty'><Link to='/ViewProperty'>View More Property</Link></Link></div>
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
             <div className="w-[152px] text-[#521292] text-base font-bold font-['HK Grotesk'] leading-tight tracking-tight"><Link>Logout</Link></div>
           </div>
         </div>
         </div>
           <div className='w-[265px] h-[5px] mt-[30px] left-[-20px] top-[554px] bg-[#521292]'></div>
            
        </div>

</div>
<Minspection />
</>
  )
}

export default Inspection