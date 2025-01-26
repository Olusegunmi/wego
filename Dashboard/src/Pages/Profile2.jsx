import React from 'react'
import { Link } from 'react-router-dom'
import Man from '../Images/Man.png'
import notifications from '../Images/notifications.png'
import User from '../Images/User.png'
import Setting from '../Images/Setting.png'
import Outline from '../Images/Outline.png'
import building from '../Images/building.png'
import Vector11 from '../Images/Vector11.png'
import Vector1 from '../Images/Vector1.png'
import Power from '../Images/Power.png'
import Search from '../Images/Search.png'
import Search2 from '../Images/Search2.png'
import Ellipse from '../Images/Ellipse.png'
import Arc from '../Images/Arc.png'
import Wego from '../Images/Wego.png'



const Profile2 = () => {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-white  overflow-hidden">
  <div className="w-[1558px] h-[1024px] left-[-52px] top-0 absolute">
    <div className="w-[1558px] h-[1024px] left-0 top-0 absolute bg-[#f8f6fc] rounded-[25px] shadow-[6px_0px_18px_0px_rgba(0,0,0,0.06)]" />
    <div className="w-6 h-6 left-[471px] top-[473px] absolute" />
  </div>
 
  <div className="p-2 left-[287px] top-[23px] absolute justify-start items-center gap-[11px] inline-flex">
              <div className="w-6 h-6 relative">
                        <div className="w-6 h-6 left-0 top-0 absolute">
                         <img src={User} alt="" />
                        </div>
                      </div>
                      <div className="w-[152px] text-[#521292] text-base font-medium font-['HK Grotesk'] leading-tight tracking-tight" style={{zIndex:1}}>Profile</div>
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




  <div className="w-[668.73px] h-[408.01px] left-[706.32px] top-[128.67px] absolute bg-white rounded-[10px]">
    <div className="left-[18.11px] top-[20.43px] absolute text-[#171625] text-lg font-semibold font-['HK Grotesk'] leading-snug">Personal Info</div>
    <div className="left-[584.14px] top-[23.54px] absolute justify-start items-center gap-[7px] inline-flex">
      <div className="w-4 h-4 relative  overflow-hidden">
        <div className="w-[15px] h-[15px] left-0 top-0 absolute">
          <img src={Search2} className="w-[13px] h-[13px] left-0 top-0 absolute" />
        </div>
      </div>
      <div className="opacity-80 text-[#bdbdbd] text-xs font-normal font-['Montserrat'] leading-tight tracking-tight"><Link>Search</Link></div>
    </div>
    <div className="w-7 h-7 left-[273.75px] top-[135.27px] absolute" />
    <div className="w-[671px] h-[0px] left-[-1.94px] top-[62.32px] absolute border border-[#eef0f6]"></div>
    <div className="w-[590.43px] h-[373.48px] left-[37.28px] top-[104.53px] absolute">
      <div className="w-[590px] h-[75px] left-[-0.59px] top-[-13px] absolute">
        <div className="w-[227px] h-[21px] left-[0.95px] top-[0.01px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Contact number</div>
        <div className="w-[590px] h-[54px] left-[0.11px] top-[21px] absolute">
          <div className="w-6 h-[23px] left-[10.41px] top-[12.06px] absolute" />
          <input type="text" className="w-[590px] h-[54px] left-0  top-0 absolute pl-7 rounded-md border border-[#bdbdbd]" placeholder='Enter your contact number' />

        </div>
      </div>
      <div className="w-[590px] h-[75px] left-[-0.59px] top-[86.24px] absolute">
        <div className="w-[227px] h-[21px] left-[0.41px] top-0 absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Location</div>
        <div className="w-[590px] h-[54px] left-[0.11px] top-[21px] absolute">
          <div className="w-6 h-[23px] left-[9.88px] top-[12.05px] absolute" />
          <input type="text" className="w-[590px] h-[54px] left-0 top-0 absolute rounded-md pl-7 border border-[#bdbdbd]" placeholder='Enter your Location (e.g City, Country)' />
        </div>
      </div>
      <div className="w-[164px] h-[54px] left-[428.13px] top-[215.35px] absolute">
        <div className="w-[164px] h-[54px] left-0 top-0 absolute bg-[#521292] rounded-md" />
        <div className="left-[64.10px] top-[17.80px] absolute text-[#fefefe] text-base font-medium font-['Montserrat'] capitalize"><Link>Save</Link></div>
      </div>
    </div>
  </div>


  <div className="w-[322.66px] h-[500.08px] left-[360.70px] top-[126.77px] absolute bg-white rounded-[10px]">
    <img className="w-[83px] h-[83px] left-[119.57px] top-[41.66px] absolute rounded-[60px]" src={Ellipse} />
    <div className="left-[114.01px] top-[131.16px] absolute text-[#171625] text-sm font-medium font-['HK Grotesk'] leading-none">Ada Tobi Musa</div>
    <div className="left-[103.17px] top-[143.21px] absolute text-right text-[#151522] text-[10px] font-normal font-['HK Grotesk'] leading-none">adatobimusa@demo.com</div>
    <div className="w-[41.79px] px-[7.64px] py-[2.29px] left-[141.29px] top-[174.99px] absolute bg-[#27ae60] rounded-[45.85px] justify-center items-center gap-[7.64px] inline-flex">
      <div className="text-right text-[#fefefe] text-[6px] font-medium font-['Montserrat'] leading-3">Active</div>
    </div>
    {/* <div className="w-[325px] h-[0px] left-[-0.82px] top-[340px] absolute border border-[#eef0f6]"></div> */}
    <div className="w-[138px] h-[35.91px] left-[14.45px] top-[213.31px] absolute">
      <div className="w-[138px] h-[35.91px] left-0 top-0 absolute rounded border border-[#c4c4c4]" />
      <div className="left-[30.98px] top-[6.34px] absolute flex-col justify-start items-start inline-flex">
        <div className="text-[#4f4f4f] text-[7.04px] font-normal font-['Montserrat'] leading-3">Created:</div>
        <div className="text-neutral-800 text-[8.45px] font-medium font-['Montserrat'] leading-3">2021-04-05 03:38+01:00</div>
      </div>
      <div className="w-[13px] h-[13px] left-[11px] top-[11px] absolute">
        <div className="w-[13px] h-[13px] left-0 top-0 absolute">
        </div>
      </div>
    </div>
    <div className="w-[138px] h-[35.91px] left-[169.50px] top-[214.16px] absolute">
      <div className="w-[138px] h-[35.91px] left-0 top-0 absolute rounded border border-[#c4c4c4]" />
      <div className="w-[13px] h-[13px] left-[11px] top-[10.55px] absolute">
        <div className="w-[13px] h-[13px] left-0 top-0 absolute">
        </div>
      </div>
      <div className="left-[30.98px] top-[6.34px] absolute flex-col justify-start items-start inline-flex">
        <div className="text-[#4f4f4f] text-[7.04px] font-normal font-['Montserrat'] leading-3">Last login:</div>
        <div className="text-neutral-800 text-[8.45px] font-medium font-['Montserrat'] leading-3">2022-04-05 03:38+01:00</div>
      </div>
    </div>
    <div className="w-[283px] h-[54px] left-[19.87px] top-[283.34px] absolute hover:bg-[#eee7f4] rounded-[5px]  overflow-hidden">
      <div className="left-[24px] top-[15px] absolute justify-center items-center gap-[61px] inline-flex">
        <div className="justify-start items-start gap-[9px] flex">
          <div className="w-[17px] h-[17px] relative">
            <div className="w-[17px] h-[17px] left-0 top-0 absolute">
            </div>
          </div>
          <div className="w-[137px] h-4 text-[#494949] text-xs font-medium font-['HK Grotesk'] leading-none"><Link to="/PublicProfile">Public Profile</Link></div>
        </div>
        <div className="w-6 h-6 relative">
          <div className="w-6 h-6 left-0 top-0 absolute">
            <img src={Arc} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="w-[283px] h-[54px] left-[20.21px] top-[345.34px] absolute hover:bg-[#eee7f4] rounded-[5px]  overflow-hidden">
      <div className="w-[248px] h-6 left-[24px] top-[15px] absolute">
        <div className="left-0 top-[3.50px] absolute justify-start items-start gap-[9px] inline-flex">
          <div className="w-[17px] h-[17px] relative">
            <div className="w-[17px] h-[17px] left-0 top-0 absolute">
          
            </div>
          </div>
          <div className="w-[137px] h-4 text-[#494949] text-xs font-medium font-['HK Grotesk'] leading-none"><Link to="/Profile2">Personal Info</Link></div>
        </div>
        <div className="w-6 h-6 left-[224px] top-0 absolute">
          <div className="w-6 h-6 left-0 top-0 absolute">
          <img src={Arc} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="w-[283px] h-[54px] left-[20.48px] top-[404.35px] hover:bg-[#eee7f4] absolute rounded-[5px]  overflow-hidden">
      <div className="left-[24px] top-[15px] absolute justify-center items-center gap-[61px] inline-flex">
        <div className="justify-start items-start gap-[9px] flex">
          <div className="w-[17px] h-[17px] relative">
            <div className="w-[17px] h-[17px] left-0 top-0 absolute">
            </div>
          </div>
          <div className="w-[137px] h-4 text-[#494949] text-xs font-medium font-['HK Grotesk'] leading-none"><Link to="/PasswordChange">Password Change</Link></div>
        </div>
        <div className="w-6 h-6 relative">
          <div className="w-6 h-6 left-0 top-0 absolute">
          <img src={Arc} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-64 h-[918px] left-0 top-[3px] absolute">
    <div className="w-64 h-[918px] left-0 top-0 absolute bg-white shadow-[6px_0px_18px_0px_rgba(0,0,0,0.06)]" />
    <div className="w-[112.62px] h-9 left-[55px] top-[42px] absolute  overflow-hidden" />
    <div className="w-64 h-[7px] left-0 top-[763px] absolute bg-[#521292]" />
  </div>
  <div className="w-[107px] h-[42.61px] left-[1262px] top-[917.39px] absolute">
    <div className="w-[107px] h-[42.61px] left-0 top-0 absolute bg-[#23bcbc] rounded-[25px]" />
    <img src={Outline}  className="w-[22.73px] h-[22.73px] left-[17.99px] top-[9.47px] absolute  overflow-hidden" />
    <div className="w-[42.61px] h-[18.94px] left-[44.50px] top-[11.36px] absolute text-[#fcfaff] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight">Help</div>
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

export default Profile2