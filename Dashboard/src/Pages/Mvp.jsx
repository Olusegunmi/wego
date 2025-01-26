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

const Mvp = () => {
  return (
    <div className="hidden md:block w-[1440px] h-[1024px] relative bg-[black]  overflow-hidden">
   <div className="w-[1558px] h-[1044px] left-[-59px] top-0 absolute">
    <div className="w-[1558px] h-[1024px] left-0 top-0 absolute bg-[#f8f6fc] rounded-[25px] shadow-[6px_0px_18px_0px_rgba(0,0,0,0.06)]" />
    <div className="w-[1065px] h-[461px] left-[487px] top-[583px] absolute  overflow-hidden" />
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




  <div className="w-[853px] h-[498px] left-[368px] top-[193px] absolute bg-white rounded-[10px]" />
  <div className="w-[285px] left-[663px] top-[239px] absolute text-[#171725] text-2xl font-bold font-['HK Grotesk']">View Avaliable Property</div>
  <div className="w-[212px] px-[27px] py-[17px] left-[688px] top-[590px] absolute bg-[#521292] rounded-[5px] justify-center items-center gap-2.5 inline-flex">
    <div className="text-[#fefefe] text-base font-medium font-['HK Grotesk'] capitalize"><Link to='/Vap'>Proceed</Link></div>
  </div>
  <div className="w-[590px] h-[74.75px] left-[499px] top-[396px] absolute">
    <div className="w-[227px] h-[21px] left-[0.48px] top-[-0px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">City</div>
    <div className="w-[590px] h-[54px] left-0 top-[20.75px] absolute">
      <div className="w-6 h-[23px] left-[9.40px] top-[12.25px] absolute" />
      <input type='text' className="w-[590px] h-[54px] left-0 top-0 absolute pl-4 rounded-md border border-[#bdbdbd]" placeholder='Enter your City' />
    </div>
  </div>
  <div className="w-[590px] h-[74.75px] left-[499px] top-[305px] absolute">
    <div className="w-[227px] h-[21px] left-[0.48px] top-[-0px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Area</div>
    <div className="w-[590px] h-[54px] left-0 top-[20.75px] absolute">
      <div className="w-6 h-[23px] left-[9.40px] top-[12.25px] absolute" />
      <input type='text' className="w-[590px] h-[54px] left-0 top-0 absolute rounded-md pl-4 border border-[#bdbdbd]" placeholder='Enter your Area' />
    </div>
  </div>
  <div className="w-[590px] h-[74.75px] left-[499px] top-[487px] absolute">
    <div className="w-[227px] h-[21px] left-[0.48px] top-[-0px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Country</div>
    <div className="w-[590px] h-[54px] left-0 top-[20.75px] absolute">
      <div className="w-6 h-[23px] left-[9.40px] top-[12.25px] absolute" />
      <input type='text' className="w-[590px] h-[54px] left-0 top-0 absolute pl-3 rounded-md border border-[#bdbdbd]" placeholder='Enter your Country' />
    </div>
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

</div>
  )
}

export default Mvp