import React, { useState } from 'react'
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
import Docu from '../Images/Docu.png'
import Arc from '../Images/Arc.png'
import ASright from '../Images/ASright.png'
import AsLeft from '../Images/AsLeft.png'

const Mfeeds = () => {
  const [count , setCount] = useState(1)

  const Increment = () =>{
    setCount(count + 1 )
  }

  const Decrement = () => {
    setCount(count - 1 )
  }
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



      <div className="w-[5px] h-[47px] left-[243px] top-[483px] absolute bg-[#521292] rounded-[1px]" />
      <div className="left-[289px] top-[126px] absolute text-[#171725] text-2xl font-medium font-['HK Grotesk']">Help</div>
        <div className="w-[371.87px] h-[556.19px] left-[292px] top-[180px] absolute bg-[#fefefe] rounded-[10px]">
   
        <div className="h-[234.78px] left-[26.28px] top-[61.88px] absolute flex-col justify-start items-start gap-1 inline-flex">
          <div className="pl-6 pr-[45px] py-[15px] hover:bg-[#eee7f4] rounded-[5px] justify-start items-center inline-flex overflow-hidden">
            <div className="self-stretch justify-center items-center gap-[61px] inline-flex">
              <div className="justify-start items-start gap-[9px] flex">
                <div className="w-[17px] h-[17px] justify-center items-center flex">
                  <div className="w-[17px] h-[17px] relative">
                    <img src={Docu} alt="" />
                  </div>
                </div>
                <div className="w-[137px] h-4 text-[#494949] text-sm font-medium font-['HK Grotesk'] leading-none"><Link to='/Help'>Get Help</Link></div>
              </div>

              <div className="w-6 h-6 justify-center items-center flex">
                <div className="w-6 h-6 relative">
                  <img src={Arc} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="pl-6 pr-[43px] py-[15px] hover:bg-[#eee7f4] rounded-[5px] justify-start items-center inline-flex overflow-hidden">
            <div className="self-stretch justify-center items-center gap-[61px] inline-flex">
              <div className="justify-start items-start gap-[9px] flex">
                <div className="w-[17px] h-[17px] justify-center items-center flex">
                  <div className="w-[17px] h-[17px] relative">
                    <img src={Docu} alt="" />
                  </div>
                </div>
                <div className="w-[137px] h-4 text-[#3a3a3a] text-sm font-medium font-['HK Grotesk'] leading-none"><Link to='/FAQ'>FAQ</Link></div>
              </div>

              <div className="w-6 h-6 justify-center items-center flex">
                <div className="w-6 h-6 relative">
                  <img src={Arc} alt="" />
                </div>
              </div>
            </div>
          </div>

        
          <div className="pl-6 pr-[45px] py-[15px] hover:bg-[#eee7f4] rounded-[5px] justify-start items-center inline-flex overflow-hidden">
            <div className="self-stretch justify-center items-center gap-[61px] inline-flex">
              <div className="justify-start items-start gap-[9px] flex">
                <div className="w-[17px] h-[17px] justify-center items-center flex">
                  <div className="w-[17px] h-[17px] relative">
                    <img src={Docu} alt="" />
                  </div>
                </div>
                <div className="w-[137px] h-4 text-[#494949] text-sm font-medium font-['HK Grotesk'] leading-none">Feedback</div>
              </div>

              <div className="w-6 h-6 justify-center items-center flex">
                <div className="w-6 h-6 relative">
                  <img src={Arc} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-[54px] pl-6 pr-[45px] pt-[15px] pb-[22px] hover:bg-[#eee7f4] rounded-[5px] justify-start items-center inline-flex overflow-hidden">
            <div className="self-stretch justify-center items-center gap-[61px] inline-flex">
              <div className="justify-start items-start gap-[9px] flex">
                <div className="w-[17px] h-[17px] justify-center items-center flex">
                  <div className="w-[17px] h-[17px] relative">
                    <img src={Docu} alt="" />
                  </div>
                 </div>
                <div className="w-[137px] h-4 text-[#494949] text-sm font-medium font-['HK Grotesk'] leading-none"><Link to='/ContactUs'>Contact Us</Link></div>
              </div>

              <div className="w-6 h-6 justify-center items-center flex">
                <div className="w-6 h-6 relative">
                  <img src={Arc} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[677px] h-[643px] left-[693px] top-[178px] absolute bg-white  overflow-hidden">
        <div className="w-6 h-[20.31px] left-[44.40px] top-[224.34px] absolute" />
        <div className="w-[117.21px] h-[38.59px] left-[515px] top-[560px] absolute">
          <div className="w-[117.21px] h-[38.59px] left-0 top-0 absolute bg-[#521292] rounded-md" />
          <button className="w-[42px] h-[18px] left-[38px] top-[8px] absolute text-[#fefefe] text-base font-medium font-['HK Grotesk'] capitalize"><Link>Send</Link></button>
        </div>
        <div className="w-[117.21px] h-[38.59px] left-[384px] top-[560px] absolute">
          <div className="w-[117.21px] h-[38.59px] left-0 top-0 absolute rounded-md border border-[#bfbebe]" />
          <button className="w-[41px] h-5 left-[38px] top-[8px] absolute text-[#7f7d7e] text-base font-medium font-['HK Grotesk'] capitalize"><Link to="/FAQ">Back</Link></button>
        </div>
        <div className="w-[116px] left-[45px] top-[54px] absolute text-[#521292] text-xl font-bold font-['HK Grotesk'] uppercase">Feedback</div>
        <div className="h-[75px] left-[45px] top-[137px] absolute">
          <div className="w-[227px] h-[21px] left-[0.48px] top-[-0px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Contact Number</div>
            <div className="w-[237px] h-[54px] left-0 top-[21px] absolute">
            <div className="w-6 h-[23px] left-[9.40px] top-[12px] absolute" />
            <input type="text" className="w-[237px] h-[54px] left-0 top-0 absolute rounded-md pl-3  text-[14px] border border-[#bdbdbd]" placeholder="Enter your Contact number"/>
          </div>
        </div>

        <div className="w-[314px] h-[21px] left-[45px] top-[241px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">How would you rate the service</div>
          <div className="w-[46px] h-[46px] left-[103px] top-[272px] absolute bg-[#f1eff5]" />
          <div className="left-[119px] top-[280px] absolute text-[#828282]/50 text-2xl font-bold font-['HK Grotesk']">{count}</div>
          <div className="w-[30px] h-[30px] left-[61px] top-[280px] absolute justify-center items-center inline-flex">
            <div className="w-[30px] h-[30px] relative">
              <button onClick={Increment}><img src={AsLeft} alt="" /></button>
            </div>
          </div>

          <div className="w-[30.14px] h-[30.14px] rotate-180  left-[161px] top-[279.93px] absolute">
            <button onClick={Decrement}><img src={ASright} alt="" /></button>
          </div>
          <div className="h-[148px] left-[45px] top-[345px] absolute">
          <div className="w-[227px] h-[21px] left-[0.48px] top-[-0px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Your Opinion</div>
          <div className="w-[590px] h-[127.25px] left-0 top-[20.75px] absolute">
            <div className="w-6 h-[54.20px] left-[9.40px] top-[28.87px] absolute" />
            <input type="text" className="w-[590px] h-[127.25px] left-0 top-0 absolute rounded-md border pl-3 pb-[60px] text-[14px] border-[#bdbdbd]" placeholder="We would also like to know your view about us" />
          </div>
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

export default Mfeeds