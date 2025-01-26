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

import Mvp from '../Pages/Mvp'

const ViewProperty = () => {
    const [navbar, setNavbar] = useState (true)
   
       const HandleClick = ()=> {
         setNavbar(!navbar)
       }

  return (
    <>
    <div className="w-[428px] h-[1009px] relative bg-white mx-auto grid justify-center overflow-hidden md:hidden ">
  <div className="w-[490px] h-[984px] left-[-27px] top-[25px] absolute bg-[#f8f6fc]" />
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
  <div className="w-[380px] h-[630px] left-[24px] top-[120px] absolute">
    <div className="w-[380px] h-[630px] left-0 top-0 absolute bg-white rounded-[10px]" />
    <div className="w-[166px] left-[107px] top-[49px] absolute text-center text-[#171725] text-2xl font-bold font-['HK Grotesk']">View Avaliable Property</div>
    
    <div className="w-[331px] h-[74.75px] left-[22px] top-[276px] absolute">
      <div className="w-[127.35px] h-[21px] left-[0.27px] top-0 absolute text-[#3d4b55] text-sm font-bold font-['Montserrat'] leading-tight">City</div>
      <div className="w-[331px] h-[54px] left-0 top-[20.75px] absolute">
        <div className="w-[13.48px] h-[23px] left-[5.28px] top-[12.25px] absolute" />
        <input type="text" className="w-[331px] h-[54px] left-0 top-0 absolute rounded-md border pl-4  border-[#bdbdbd]"  placeholder='Enter your City'/>
      </div>
    </div>
    <div className="w-[331px] h-[74.75px] left-[22px] top-[165px] absolute">
      <div className="w-[127.35px] h-[21px] left-[0.27px] top-0 absolute text-[#3d4b55] text-sm font-bold font-['Montserrat'] leading-tight">Area</div>
      <div className="w-[331px] h-[54px] left-0 top-[20.75px] absolute">
        <div className="w-[13.48px] h-[23px] left-[5.28px] top-[12.25px] absolute" />
        <input type='text' className="w-[331px] h-[54px] left-0 top-0 pl-4 absolute rounded-md border border-[#bdbdbd]"  placeholder='Enter your Area' />
       
      </div>
    </div>
    <div className="w-[331px] h-[74.75px] left-[22px] top-[387px] absolute">
      <div className="w-[127.35px] h-[21px] left-[0.27px] top-0 absolute text-[#3d4b55] text-sm font-bold font-['Montserrat'] leading-tight">Country</div>
      <div className="w-[331px] h-[54px] left-0 top-[20.75px] absolute">
        <div className="w-[13.48px] h-[23px] left-[5.28px] top-[12.25px] absolute" />
        <input type='text' className="w-[331px] h-[54px] left-0 top-0 absolute pl-4 rounded-md border border-[#bdbdbd]" placeholder='Enter your Country' />
    </div>
    </div>
 </div>

    <div className="w-[119px] h-[55px] px-[27px] py-[17px] left-[159px] top-[620px] absolute bg-[#521292] rounded-[5px] justify-center items-center gap-2.5 inline-flex">
      <div className="text-[#fefefe] text-base font-medium font-['HK Grotesk'] capitalize"><Link to='/Vap' >Proceed</Link></div>
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
        <div className="w-[130px] h-[37px]  ml-[65px] mt-[50px] bg-[#23bcbc] rounded-sm justify-center items-center gap-2.5 inline-flex">
         <div className="text-[#fefefe] text-[10px] font-bold font-['HK Grotesk'] capitalize">View Inspection Sample</div>
        </div>  
       </div>
</div>
<Mvp />
</>
  )
}

export default ViewProperty