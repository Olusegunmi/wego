import React from 'react'
import Man from '../Images/Man.png'
import Menu from '../Images/Menu.png'
import Research from '../Images/Research.png'
import download from '../Images/download.png'
import Ellipse19 from '../Images/Ellipse19.png'
import Ellipse32 from '../Images/Ellipse32.png'
import Ellipse31 from '../Images/Ellipse31.png'
import Request from '../Images/Request.png'
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
import MDashboard from './MDashboard'
import Home1 from "../images/Home1.png"

const Dashboard = () => {
    const [navbar, setNavbar] = useState (true)

    const HandleClick = ()=> {
      setNavbar(!navbar)
    }
  return (
    
   <>
    <div className="w-[428px] h-[1155px] relative mx-auto bg-white md:hidden">
      {/* <div className="w-[490px] h-[1090px] left-[-27px] top-[65px] absolute bg-[#f8f6fc]" /> */}
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

  
  <div className="w-[239px] h-[70px] left-[23px] top-[92px] absolute">
    <div className="left-0 top-0 absolute"><span class="text-[#0e132f] text-xl font-normal font-['HK Grotesk'] leading-[34px]">Hi</span><span class="text-[#0e132f] text-xl font-semibold font-['HK Grotesk'] leading-[34px]">, </span><span class="text-[#0e132f] text-xl font-extrabold font-['HK Grotesk'] leading-[34px]">Ada Tobi Musa</span></div>
    <div className="left-0 top-[25px] absolute text-[#565a6d] text-xs font-normal font-['HK Grotesk'] leading-[34px]">Here is the overview of your recent activity</div>
  </div>
  <div className="w-[179px] h-[165px] left-[224px] top-[155px] absolute bg-white rounded-[5px]" />
  <div className="w-[181px] h-[166.80px] left-[23px] top-[158.20px] absolute">
    <div className="w-[181px] h-[166.80px] left-0 top-0 absolute bg-white rounded-[5px]" />
    <div className="w-[129.48px] h-[138.41px] pr-[5px] left-[25.06px] top-[8.28px] absolute flex-col justify-center items-center gap-[5px] inline-flex">
      <img className="w-[50px] h-[50px]" src={Research} />
      <div className="text-center"><span class="text-black text-[15px] font-normal font-['HK Grotesk'] leading-tight tracking-tight">Viewed<br/></span><span class="text-black text-[15px] font-semibold font-['HK Grotesk'] leading-tight tracking-tight">Inspection <br/>Report</span></div>
    </div>
  </div>
  <div className="w-[380px] h-[86px] left-[24px] top-[337px] absolute bg-[#bce4eb] rounded-[5px]" />
  <div className="w-[379px] h-[86px] left-[24px] top-[1042px] absolute bg-[#bce4eb] rounded-[5px]" />
  <div className="w-[379px] h-[86px] left-[24px] top-[742px] absolute bg-white rounded-[5px]" />
  <div className="left-[62px] top-[355px] absolute justify-center items-center gap-1.5 inline-flex">
    <img className="w-[50px] h-[50px]" src={Request} />
    <div className="text-black text-base font-semibold font-['HK Grotesk'] leading-tight tracking-tight">Request for Inspection Report</div>
  </div>
  <div className="h-[136px] px-[5px] left-[261px] top-[158px] absolute flex-col justify-center items-center gap-[5px] inline-flex">
    <div className="w-[70px] h-[70px] relative">
      <img className="w-[50px] h-[50px] left-[10px] top-[10px] absolute" src={download} />
    </div>
    <div className="w-[109px] h-[61px] text-center"><span class="text-black text-[15px] font-normal font-['HK Grotesk'] leading-tight tracking-tight">Downloaded<br/></span><span class="text-black text-[15px] font-semibold font-['HK Grotesk'] leading-tight tracking-tight">Inspection <br/>Report</span></div>
  </div>
  <div className="w-[379px] h-[271px] left-[24px] top-[441px] absolute bg-white rounded-[5px]" />
  <div className="w-[379px] h-[167px] left-[24px] top-[854px] absolute bg-[#f0dc96] rounded-[10px]" />
  <img src={Home1} className="w-[222px] h-[155px] left-[181px] top-[884px] absolute  overflow-hidden" />
  <div className="left-[45px] top-[872px] absolute text-black text-2xl font-medium font-['Montserrat'] capitalize">Find <br/>your next</div>
  <div className="w-[211px] h-[47px] left-[54px] top-[943px] absolute text-[#c90a0a] text-5xl font-normal font-['Thinking Of Betty'] capitalize">Home</div>
  <div className="w-[194px] h-[193.30px] left-[121px] top-[441px] absolute">
    <img src={Ellipse19} className="left-[113px] top-[22.14px] absolute " />
    <img src={Ellipse31} className="left-[18.31px] top-[40px] absolute" />
    <img src={Ellipse32} className="left-[55.61px] top-[20px] absolute" />
    <div className="w-[104.83px] h-[12.66px] left-[45.73px] top-[80.98px] absolute text-center text-black text-[18px] font-semibold font-['HK Grotesk'] leading-none tracking-tight">Inspection <br/>Report</div>
  </div> 
  <div className="w-3 h-3 left-[40px] top-[675px] absolute bg-[#521292] rounded-full" />
  <div className="left-[331px] top-[665px] absolute text-right"><span class="text-black text-xs font-semibold font-['HK Grotesk'] leading-none tracking-tight">30 </span><span class="text-[#a6acbe] text-xs font-semibold font-['HK Grotesk'] leading-none tracking-tight">(25%)</span></div>
  <div className="w-[278px] h-[34px] left-[66px] top-[671px] absolute text-black text-xs font-medium font-['HK Grotesk'] tracking-tight">Inspection report required</div>
  <div className="w-[294px] h-[34px] left-[41px] top-[784px] absolute text-black text-xl font-bold font-['HK Grotesk'] tracking-tight">10 Inspection Request</div>
  <div className="w-3 h-3 left-[40px] top-[650px] absolute bg-[#23bcbc] rounded-full" />
  <div className="w-3 h-3 left-[40px] top-[628px] absolute bg-[#ffd548] rounded-full" />
  <div className="left-[335px] top-[643px] absolute text-right"><span class="text-black text-xs font-semibold font-['HK Grotesk'] leading-none tracking-tight">10 </span><span class="text-[#a6acbe] text-xs font-semibold font-['HK Grotesk'] leading-none tracking-tight">(10%)</span></div>
  <div className="left-[330px] top-[620px] absolute text-right"><span class="text-black text-xs font-semibold font-['HK Grotesk'] leading-none tracking-tight">60 </span><span class="text-[#a6acbe] text-xs font-semibold font-['HK Grotesk'] leading-none tracking-tight">(65%)</span></div>
  <div className="w-[278px] h-[34px] left-[66px] top-[649px] absolute text-black text-xs font-medium font-['HK Grotesk']tracking-tight">Downloaded Inspection report</div>
  <div className="w-[231px] h-[34px] left-[66px] top-[627px] absolute text-black text-xs font-medium font-['HK Grotesk'] tracking-tight">Viewed Inspection report</div>
  <div className="left-[114px] top-[1073px] absolute text-[#050505] text-base font-semibold font-['HK Grotesk'] capitalize">View Inspection Sample</div>
  <div className="left-[43px] top-[761px] absolute text-[#521292] text-xs font-medium font-['HK Grotesk']">Previous Inspection Request</div>
  <button className="left-[331px] top-[784px] absolute text-[#565a6d] text-xs font-normal font-['HK Grotesk'] leading-[34px]"><Link to="/">View More</Link></button>

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
          <button className="w-[152px] text-[#521292] ml-[-40px] text-base font-medium font-['HK Grotesk'] leading-tight tracking-tight">Dashboard</button>
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
          <div className="w-[152px] text-[#521292] text-base font-medium font-['HK Grotesk'] leading-tight tracking-tight"><Link to="/ViewProperty">View More Property</Link></div>
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
    <div className="w-[130px] h-[37px]  ml-[65px] mt-[50px] bg-[#23bcbc] rounded-sm justify-center items-center gap-2.5 inline-flex">
     <div className="text-[#fefefe] text-[10px] font-bold font-['HK Grotesk'] capitalize">View Inspection Sample</div>
    </div>  
   </div>
   
</div>
<MDashboard />
</>
  )
}

export default Dashboard