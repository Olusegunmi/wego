import React from 'react'
import { useState } from 'react'
import Man from '../Images/Man.png'
import Menu from '../Images/Menu.png'
import Add from '../Images/Add.png'
import User from '../Images/User.png'
import Power from '../Images/Power.png'
import Setting from '../Images/Setting.png'
import Outline from '../Images/Outline.png'
import Vector1 from '../Images/vector1.png'
import Vector11 from '../Images/vector11.png'
import building from '../Images/building.png'
import { Link } from 'react-router-dom'
import Mfeeds from './Mfeeds'
import Docu from '../Images/Docu.png'
import Arc from '../Images/Arc.png'
import ASright from '../Images/ASright.png'
import AsLeft from '../Images/AsLeft.png'


const Feeds = () => {
    const [navbar, setNavbar] = useState (true)
    const [count , setCount] = useState(1)
    
    const Increment = () =>{
      setCount(count + 1 )
    }
    
    const Decrement = () => {
      setCount(count - 1 )
    }
                
        const HandleClick = ()=> {
        setNavbar(!navbar)
      }
  return (
  <>
    <div className="w-[424px] h-[1009px] relative bg-white mx-auto justify-center pl-[-14px] overflow-hidden md:hidden">
      <div className="w-[490px] h-[1090px] left-[-27px] top-[65px] absolute bg-[#f8f6fc]"/>
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



      <div className="left-[30px] top-[93px] absolute text-[#171725] text-base font-medium font-['HK Grotesk']">Help</div>
      <div className="h-[246.72px] pr-[48.65px] pt-[158.99px] pb-[85.95px] left-[27px] top-[127.04px] absolute bg-[#fefefe] rounded-[10px] justify-start items-center inline-flex">
        <div className="w-[325px] h-[0px] "></div>
      </div>

      <div className="h-[235.39px] left-[41.27px] top-[136.74px] absolute flex-col justify-start items-start gap-1 inline-flex">
        <div className="w-[337px] pt-[15.26px] pb-[14.74px] hover:bg-[#eee7f4] rounded-[5px] justify-center items-center inline-flex overflow-hidden">
        <div className="grow shrink basis-0 self-stretch justify-center items-center gap-[61px] inline-flex">
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

      <div className="w-[336px] pl-[11.05px] pt-[15.41px] pb-[14.59px] hover:bg-[#eee7f4] rounded-[5px] justify-end items-center inline-flex overflow-hidden">
        <div className="self-stretch justify-center items-center gap-[61px] inline-flex">
          <div className="justify-start items-start gap-[9px] flex">
            <div className="w-[17px] h-[17px] justify-center items-center flex">
              <div className="w-[17px] h-[17px] absolute left-[44px]">
                <img src={Docu} alt="" />
              </div>
            </div>
            <div className="w-[137px] h-4 text-[#3a3a3a] text-sm font-medium font-['HK Grotesk'] absolute left-[70px] leading-none"><Link to='/FAQ'>FAQ</Link></div>
          </div>
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 absolute left-[268px]">
              <img src={Arc} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[336px] pt-[14.57px] pb-[15.43px] hover:bg-[#eee7f4] rounded-[5px] justify-center items-center inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch justify-center items-center gap-[61px] inline-flex">
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
      
      <div className="w-[336px] h-[54px] pl-[23.70px] pr-[106.30px] pt-[14.72px] pb-[22.28px] hover:bg-[#eee7f4]  rounded-[5px] justify-start items-center inline-flex overflow-hidden">
        <div className="self-stretch justify-center items-center gap-[61px] inline-flex">
          <div className="justify-start items-start gap-[9px] flex">
            <div className="w-[17px] h-[17px] justify-center items-center flex">
              <div className="w-[17px] h-[17px] absolute left-[44px]">
                <img src={Docu} alt="" />
              </div>
            </div>
            <div className="w-[137px] h-4 text-[#494949] text-sm font-medium absolute left-[70px] font-['HK Grotesk'] leading-none"><Link to='/ContactUs'>Contact Us</Link></div>
          </div>

            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 absolute left-[268px]">
                <img src={Arc} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-[372px] h-[571px] left-[26px] top-[397px] absolute bg-white  overflow-hidden">
        <div className="w-[13.20px] h-[18.04px] left-[24.40px] top-[199.22px] absolute" />
        <div className="w-[86.84px] h-[28.59px] left-[262.37px] top-[522px] absolute">
          <div className="w-[86.84px] h-[28.59px] left-0 top-0 absolute bg-[#521292] rounded-md" />
          <div className="w-[33px] h-[13px] left-[28.63px] top-[8px] absolute text-[#fefefe] text-xs font-medium font-['HK Grotesk'] capitalize">Send</div>
        </div>
        <div className="w-[86.84px] h-[28.59px] left-[165.31px] top-[522px] absolute">
          <div className="w-[86.84px] h-[28.59px] left-0 top-0 absolute rounded-md border border-[#bfbebe]" />
          <div className="w-8 h-[15px] left-[27.69px] top-[7px] absolute text-[#7f7d7e] text-xs font-medium font-['HK Grotesk'] capitalize">Back</div>
        </div>

        <div className="w-[116px] left-[25px] top-[34px] absolute text-[#521292] text-xl font-bold font-['HK Grotesk'] uppercase">Feedback</div>
        <div className="h-[66.60px] left-[24.73px] top-[121.66px] absolute">
          <div className="w-[310.59px] h-[18.65px] left-[0.65px] top-0 mt-[-5px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Contact Number</div>
          <div className="w-[324.27px] h-12 left-0 top-[18.65px] absolute">
            <div className="w-[32.88px] h-[20.42px] left-[12.87px] top-[10.66px] absolute" />
            <input type="text" className="w-[324.27px] h-12 left-0 top-0 absolute pl-3 rounded-md border text-[13px] border-[#bdbdbd]" placeholder="Enter your Contact number" />
          </div>
        </div>

        <div className="w-[247.27px] h-[18.65px] left-[24.73px] top-[214.02px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">How would ypu rate the service</div>
        <div className="w-[25.28px] h-[27px] left-[56.60px] top-[250.54px] absolute bg-[#f1eff5]" />
        <div className="w-[8.24px] h-[27.53px] left-[65.39px] top-[253.65px] absolute text-[#828282]/50 text-[12px] font-bold font-['HK Grotesk']">{count}</div>
        <div className="w-[30px] h-[30px] left-[23px] top-[250px] absolute justify-center items-center inline-flex">
          <div  className="w-[30px] h-[30px] relative">
            <button ><img src={AsLeft} alt="" onClick={Increment} /></button>
          </div>
        </div>

        <div className="w-[30px] h-[30px] left-[117px] top-[280px] absolute origin-top-left rotate-180 justify-center items-center inline-flex">
          <div   className="w-[30px] h-[30px] relative">
            <button ><img src={ASright} alt="" onClick={Decrement} /></button>
          </div>
        </div>

        <div className="w-[324.01px] h-[148.63px] left-[24.99px] top-[306.37px] absolute">
          <div className="w-[124.73px] h-[30.31px] left-0 top-0 absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Your Opinion</div>
          <div className="w-[324px] h-[129px] left-[0.01px] top-[19.63px] absolute">
            <div className="w-[13.20px] h-[78.23px] left-[4.89px] top-[41.99px] absolute" />
            <input type="text" className="w-[324px] h-[129px] text-[12px] pl-3 left-0 top-0 absolute rounded-md pb-[60px] border border-[#bdbdbd]" placeholder="We would also like to know your view about us" />
          </div>
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


              <div className="w-[200px] h-[47px] hover:bg-[#eee7f4] hover:border-r-[#521292] hover:border-r-8  p-2 left-0 top-[238px] absolute justify-start items-center gap-[11px] inline-flex">
                <div className="w-6 h-6 relative">
                  <div className="w-6 h-6 left-0 top-0 absolute">
                    <img src={Setting} alt="" />
                  </div>
                </div>
                <div className="w-[152px] text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/Set'>Settings</Link></div>
              </div>

              <div className="w-[200px] h-[47px] hover:bg-[#eee7f4] hover:hover:border-r-[#521292] hover:border-r-8  left-0 top-[299px] absolute justify-start items-start gap-3.5 inline-flex">
                <div className="p-2 justify-start items-center gap-[11px] flex">
                  <img src={Outline} className="w-6 h-6 relative  overflow-hidden" />
                  <div className="w-[152px] text-[#521292] text-base font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link>Help</Link></div>
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
    <Mfeeds />
  </> 

  )
}

export default Feeds