import React from 'react'
import Wego from '../images/Wego.png'
import ArrowR from '../images/ArrowR.png'
import ArrowL from '../images/ArrowL.png'
import Pexel from '../images/Pexel.png'
import Pexel2 from '../images/Pexel2.png'
import Pexel3 from '../images/Pexel3.png'
import Pexel4 from '../images/Pexel4.png'
import Pexel5 from '../images/Pexel5.png'
import Map from '../images/Map.png'
import notification from '../images/notifications.png'
import Man from '../Images/Man.png'
import Vector1 from '../Images/vector1.png'
import User from '../Images/User.png'
import Power from '../Images/Power.png'
import Setting from '../Images/Setting.png'
import Outline from '../Images/Outline.png'
import Vector2 from '../Images/Vector2.png'
import Vector4 from '../Images/Vector4.png'
import Minus from '../Images/Minus.png'
import Search from '../Images/Search.png'
import Cpl1 from '../Images/Cpl1.png'
import Cpl2 from '../Images/Cpl2.png'
import Cpl3 from '../Images/Cpl3.png'
import Cpl4 from '../Images/Cpl4.png'
import Cpl5 from '../Images/Cpl5.png'
import Info from '../Images/Info.png'
import Asl from '../Images/Asl.png'
import Asr from '../Images/Asr.png'
import { Link } from 'react-router-dom'



const Button = () => {
  
return (
  <div className="hidden sm:hidden md:block w-[1440px] h-[1782px] relative overflow-hidden">
    <div className="w-[1558px] h-[3208px] left-[-59px] top-0 absolute">
      <div className="w-[1558px] h-[3208px] left-0 top-0 absolute  rounded-[25px] shadow-[6px_0px_18px_0px_rgba(0,0,0,0.06)]" />
      <div className="w-6 h-[75.19px] left-[471px] top-[1481.82px] absolute" />
    </div>
    <div className="left-[32px] top-[232px] absolute justify-start bg items-start gap-3.5 inline-flex">
      <div className="w-[5px] h-[47px] opacity-0 rounded-[1px]" />
    </div>
    <div className="w-64 h-[918px] relative">
    <div className="w-64 h-[918px] left-0 top-[-30px] absolute  shadow-[6px_0px_18px_0px_rgba(0,0,0,0.06)]" />
    <img src={Wego} alt="" className='w-[112px] h-9 mt-[30px] ml-[60px] ' style={{zIndex:3}} />
    
    <div className="w-[222px] h-[422px] left-[23px] top-[244px] absolute">
  
      <div className="w-[222px] h-[422px] left-0 top-0 absolute">
        
        <div className="w-[222px] h-[352px] left-0 top-0 absolute">
          <div className="left-0 top-0 absolute justify-start items-center gap-3.5 inline-flex overflow-hidden">
            
            <div className="p-2 justify-start items-center gap-[11px] flex">
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute">
                  <img src={Vector1} alt="" />
                </div>
              </div>
              <div className="w-[152px] text-[#521292] text-base hover:font-extrabold font-medium font-['HK Grotesk'] leading-tight tracking-tight"><Link to="/Dashboard">Dashboard</Link></div>
            </div>
            <div className="w-[5px] h-[47px] rounded-[1px]" />
          </div>

          <div className="left-0 top-[61px] absolute justify-start items-start gap-3.5 inline-flex">
            <div className="p-2 justify-start items-center gap-[11px] flex">
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute">
                 <img src={User} alt="" />
                </div>
              </div>
              <div className="w-[152px] text-[#521292] text-base font-normal hover:font-extrabold font-['HK Grotesk'] leading-tight tracking-tight"><Link to="/Profile">Profile</Link></div>
            </div>
            <div className="w-[5px] h-[47px] opacity-0 bg-white rounded-[1px]" />
          </div>


          
          <div className="left-0 top-[122px] absolute justify-start items-start gap-3.5 inline-flex">
            <div className="p-2 justify-start items-center gap-[11px] flex">
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute">
                <img src={Minus} alt="" />
                </div>
              </div>
              <div className="w-[152px] text-[#521292] text-base hover:font-extrabold font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/ViewProperty'>View Property</Link></div>
            </div>
            <div className="w-[5px] h-[47px] opacity-0 bg-white rounded-[1px]" />
          </div>


          <div className="left-[8px] top-[183px] absolute justify-start items-start gap-3.5 inline-flex">
            <div className="justify-start items-center gap-3.5 flex">
              <div className="w-[168px] h-9 relative">
                <div className="w-6 h-6 left-0 top-[10px] absolute">
                  <img src={Vector2} alt="" />
                </div>
                <div className="w-[152px] left-[43px] top-[8.50px] absolute text-[#521292] text-base hover:font-extrabold ml-[-6px] font-normal font-['HK Grotesk'] leading-tight tracking-tight"><Link>Feedback</Link></div>
              </div>
              <div className="w-[5px] h-[47px] opacity-0 bg-white rounded-[1px]" />
            </div>
            <div className="w-[5px] h-[47px] opacity-0 bg-white rounded-[1px]" />
          </div>
         

          <div className="p-2 left-[6px] top-[244px] absolute justify-start items-center gap-[11px] inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-[-8px] top-0 absolute">
               <img src={Setting} alt="" />
              </div>
            </div>
            <div className="w-[152px] text-[#521292] text-base font-normal hover:font-extrabold ml-[-6px] font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/Set'>Settings</Link></div>
          </div>


          <div className="p-2 left-[6px] ml-[-40px] top-[298px] absolute justify-start items-center gap-[11px] inline-flex">
            <div className="w-6 h-6 relative  overflow-hidden" />
                <div className="w-6 h-6 ">
                  <img src={Outline} alt="" />
                </div>
            <div className="w-[152px] text-[#521292] text-base font-normal hover:font-extrabold font-['HK Grotesk'] leading-tight tracking-tight"><Link to='/Help'>Help</Link></div>
          </div>
        </div>
      </div>

      <div className="w-64 h-[7px] left-[-23px] top-[500px] absolute bg-[#521292]" />

    </div>
    <div className="p-2 left-[-10px] top-[813px] absolute justify-start items-center gap-[11px] inline-flex">
      <div className="w-6 h-6 relative   overflow-hidden" />
        <img src={Power}  alt="" />
      <div className="w-[152px] text-[#521292] text-base font-bold font-['HK Grotesk'] hover:font-extrabold leading-tight tracking-tight"><Link to="/SignUP">Logout</Link></div>
    </div>
    </div>

    <div className="p-2 left-[287px] top-[23px] absolute justify-start items-center gap-[11px] inline-flex">
      <div className="w-6 h-6 relative">
        <div className="w-6 h-6 left-0 top-0 absolute">
          <img src={Vector1} alt="" />
        </div>
      </div>
      <div className="w-[152px] text-[#521292] text-base font-medium font-['HK Grotesk'] leading-tight tracking-tight">Report Page</div>
    </div>

    <div className="w-[1197px] h-[57px] left-[259px] top-[20px] absolute">
      <div className="w-[865px] h-11 left-[262px] top-0 absolute">
        <input type="text" className="w-[594px] h-10 left-0 top-[2px] p-[8px] absolute bg-white" />
        <img src={notification} className="w-6 h-6 left-[613px] top-[9px] absolute  overflow-hidden" />
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


    <div className="w-[1119px] h-[88px] left-[286px] top-[1640px] absolute bg-[#22bcbc]/60" />
    <div className="w-[204px] left-[313px] top-[126px] absolute text-[#521292] text-2xl font-bold font-['HK Grotesk'] capitalize">Inspection Report </div>
    <div className="w-[212px] h-[55px] px-[27px] py-[17px] left-[1170px] top-[114px] absolute bg-[#521292] rounded-[5px] justify-center items-center gap-2.5 inline-flex">
      <button className="text-[#fefefe] text-base font-medium font-['HK Grotesk'] capitalize">Download</button>
    </div>


    <div className="w-[1119px] h-[1366px] left-[282px] top-[238px] absolute bg-white" />
    <div className="w-[283px] h-[523px] left-[1089px] top-[301px] absolute rounded-[5px]  overflow-hidden">
      <div className="w-[383px] h-[538px] left-[-29px] top-[-15px] absolute bg-[#f8f6fc]" />
      <img className="w-[93px] h-[93px] left-[91px] top-[49px] absolute rounded-[60px]" src={Man} />
      <div className="w-[97.63px] h-[19.02px] left-[85px] top-[153.16px] absolute text-[#171625] text-sm font-semibold font-['HK Grotesk'] leading-none">Ada Tobi Musa</div>
      <div className="left-[15px] top-[13px] absolute text-right text-[#cfcfcf] text-base font-bold font-['HK Grotesk'] leading-none">Agent  Profile</div>
      <div className="w-[138px] h-[35.91px] left-[68px] top-[473px] absolute rounded border border-[#c4c4c4]" />
      <div className="left-[98.98px] top-[479.34px] absolute text-[#4f4f4f] text-[7.04px] font-normal font-['Montserrat'] leading-3">Inspection Date</div>
      <div className="w-5 h-5 left-[73px] top-[481px] absolute">
        <div className="w-5 h-5 left-0 top-0 absolute">
        </div>
      </div>
      <img className="w-[54px] h-[44.66px] left-[54px] top-[405px] absolute" src={Cpl4} />
      <img className="w-[54px] h-[46.83px] left-[117px] top-[404px] absolute" src={Cpl5} />
    </div>


    <div className="w-[108px] left-[328px] top-[240px] absolute text-center  text-[#521292] text-sm font-normal font-['HK Grotesk'] leading-none">Property info</div>
    <div className="w-[120px] left-[485px] top-[242px] absolute text-center text-[#838ea6] hover:text-[#521292] hover:border-b-8 hover:border-[#521292] pb-[15px]   text-sm font-normal font-['HK Grotesk'] leading-none">Property details</div>
    <div className="w-[129px] left-[652px] top-[242px] absolute text-center text-[#838ea6] hover:text-[#521292] hover:border-b-8 hover:border-[#521292] pb-[15px] text-sm  font-normal font-['HK Grotesk'] leading-none">Property History</div>
    <div className="w-[129px] left-[818px] top-[242px] absolute text-center text-[#838ea6] hover:text-[#521292] hover:border-b-8 hover:border-[#521292] pb-[15px] text-sm font-normal font-['HK Grotesk'] leading-none">Neighborhood</div>
    <div className="w-[70px] left-[996px] top-[242px] absolute text-center text-[#838ea6] hover:text-[#521292] hover:border-b-8 hover:border-[#521292] pb-[15px] text-sm font-normal font-['HK Grotesk'] leading-none">Indoor</div>
    <div className="w-[65px] left-[1147px] top-[243px] hover:border-b-8 hover:border-[#521292] hover:text-[#521292] pb-[13px] absolute text-center text-[#838ea6] text-sm font-normal font-['HK Grotesk'] leading-none">Outdoor</div>
    <div className="w-[1042px] h-[0px] left-[333px] top-[270px] absolute border-2 border-[#bdbdbd]"></div>
    <div className="w-[113px] h-[0px] left-[326px] top-[270px] absolute border-4 border-[#521292]"></div> 
    <div className="w-6 h-6 left-[1338px] top-[236px] absolute">
      <button className="w-6 h-6 left-0 top-0 absolute">
        <img src={Asr} alt="" />
      </button>
    </div>
    <div className="w-6 h-6 left-[1298px] top-[236px] absolute">
      <button className="w-6 h-6 left-0 top-0 absolute">
      <img src={Asl} alt="" />
      </button>
    </div>

    
    <img className="w-[744px] h-[525px] left-[328px] top-[301px] absolute rounded-[15px]" src={Pexel} />
    <img className="w-[137px] h-[94px] left-[491px] top-[766px] absolute" src={Pexel3} />
    <img className="w-[137px] h-[94px] left-[349px] top-[766px] absolute" src={Pexel2} />
    <img className="w-[137px] h-[94px] left-[632px] top-[766px] absolute" src={Pexel4} />
    <img className="w-[137px] h-[94px] left-[773px] top-[766px] absolute border-2 border-[#ffd548]" src={Pexel5} />
    <img className="w-[137px] h-[94px] left-[914px] top-[766px] absolute" src={Map} />
    <div className="w-[720px] h-[26.40px] left-[340px] top-[810px] absolute">
      <div className="w-6 h-[26.40px] left-0 top-0 absolute bg-[#22bcbc]/75 rounded-[50px]">
        <button className="w-6 h-[26.40px] left-0 top-0 absolute">
          <img src={ArrowL} alt="" />
        </button>
      </div>
      <div className="w-6 h-[26.40px] left-[696px] top-0 absolute bg-[#22bcbc]/75 rounded-[50px]">
        <button className="w-6 h-[26.40px] left-0 top-0 absolute">
          <img src={ArrowR} alt="" />
        </button>
      </div>
    </div>

    
    <div className="w-[78px] h-[25px] left-[327px] top-[1039px] absolute text-[#521292] text-base font-medium font-['HK Grotesk'] capitalize">bedroom</div>
    <div className="w-[83px] h-[25px] left-[445px] top-[1039px] absolute text-[#521292] text-base font-medium font-['HK Grotesk'] capitalize">Bathroom</div>
    <div className="w-[39px] h-[25px] left-[568px] top-[1039px] absolute text-[#521292] text-base font-medium font-['HK Grotesk'] capitalize">Built</div>
    <div className="w-[98px] h-[25px] left-[948px] top-[1039px] absolute text-[#521292] text-base font-medium font-['HK Grotesk'] capitalize">area safety</div>
    <div className="w-[67px] h-[25px] left-[681px] top-[1039px] absolute text-[#521292] text-base font-medium font-['HK Grotesk'] capitalize">Packing</div>
    <div className="w-[39px] h-[25px] left-[815px] top-[1039px] absolute text-[#521292] text-base font-medium font-['HK Grotesk'] capitalize">area</div>
    <div className="w-[581px] h-[77px] left-[327px] top-[920px] absolute"><span class="text-[#521292] text-4xl font-bold font-['HK Grotesk'] capitalize">20 Flats of 5 Unit Blocks Estate</span><span class="text-black text-2xl font-medium font-['HK Grotesk'] capitalize">
    <br/></span><span class="text-black text-xl font-medium font-['HK Grotesk'] capitalize">Kotopo Along Osiele Road before, UNAB university Junction, Abekouta
    (Block of Flats, ESTATES)</span></div>

    <div className="left-[1188px] top-[793px] absolute text-neutral-800 text-[8.45px] font-medium font-['Montserrat'] leading-3">2021-04-05 03:38+01:00</div>
    <div className="w-[128.55px] h-[19.02px] left-[1107.10px] top-[505.54px] absolute text-[#171625] text-sm font-semibold font-['HK Grotesk'] leading-none">About the Inspector</div>
    <div className="w-[97.63px] h-[19.02px] left-[1107.10px] top-[614.54px] absolute text-[#171625] text-sm font-semibold font-['HK Grotesk'] leading-none">Certification</div>
    <img className="w-[42px] h-[54px] left-[1236px] top-[641px] absolute" src={Cpl2} />
    <img className="w-[55px] h-[54px] left-[1175px] top-[641px] absolute" src={Cpl1} />
    <img className="w-[54px] h-[54px] left-[1284px] top-[641px] absolute" src={Cpl3} />
    <div className="w-[252px] left-[1106px] top-[526px] absolute text-black text-xs font-normal font-['HK Grotesk'] capitalize">The property is serenely located in the most desired spot of Abeokuta, no wander tenants queue in wait for any vacancy at any time in the building.</div>

    

    <div className="w-[203.43px] h-[53.62px] left-[327.25px] top-[1147.03px] absolute">
      <div className="w-[203.43px] h-[53.62px] left-0 top-0 absolute bg-[#c5b0db]" />
      <div className="w-[7.88px] h-[53.62px] left-0 top-0 absolute bg-[#521292]" />
      <div className="h-[33.12px] left-[22.08px] top-[10.25px] absolute justify-center items-center gap-2 inline-flex">
        <div className="w-[27.60px] h-[27.60px] relative">
          <div className="w-[27.60px] h-[27.60px] left-0 top-0 absolute">
            <img src={Info} alt="" />
          </div>
        </div>
        <div className="w-[132.47px] h-[33.12px] text-[#521292] text-2xl font-medium font-['HK Grotesk'] capitalize">description</div>
      </div>
    </div>



    <div className="w-[734.34px] h-[493.56px] left-[327px] top-[598.44px] absolute">
      <div className="w-[15px] h-[33px] left-0 top-[460.56px] absolute text-black text-2xl font-bold font-['HK Grotesk'] capitalize">6</div>
      <div className="w-[59px] h-[33px] left-[241px] top-[460.56px] absolute text-black text-2xl font-bold font-['HK Grotesk'] capitalize">2020</div>
      <div className="w-[120px] h-[33px] left-[488px] top-[460.56px] absolute"><span class="text-black text-2xl font-bold font-['HK Grotesk'] lowercase">1,024 ft</span><sup class="text-black text-2xl font-bold font-['HK Grotesk'] lowercase">2</sup></div>
      <div className="w-[15px] h-[33px] left-[121px] top-[460.56px] absolute text-black text-2xl font-bold font-['HK Grotesk'] capitalize">4</div>
      <div className="w-[120px] h-[33px] left-[353px] top-[460.56px] absolute text-black text-2xl font-bold font-['HK Grotesk'] capitalize">2 in door</div>
      <div className="w-[113.54px] h-[8.67px] left-[620.79px] top-[472.56px] absolute">
        <div className="w-[18.92px] h-[8.67px] left-0 top-0 absolute bg-[#521292]" />
        <div className="w-[18.92px] h-[8.67px] left-[23.65px] top-0 absolute bg-[#7847aa]" />
        <div className="w-[18.92px] h-[8.67px] left-[47.31px] top-0 absolute bg-[#9f7bc2]" />
        <div className="w-[18.92px] h-[8.67px] left-[70.96px] top-0 absolute bg-[#d9cae7]" />
        <div className="w-[18.92px] h-[8.67px] left-[94.62px] top-0 absolute bg-[#e4e4e4]" />
      </div>
      <div className="w-[22.08px] h-[7.40px] left-[21.54px] top-[1.76px] absolute">
      </div>
    </div>

  
    <div className="w-[804px] left-[546px] top-[1143px] absolute"><span class="text-black text-base font-normal font-['HK Grotesk'] capitalize">The property is serenely located in the most desired spot of Abeokuta, no wander tenants queue in wait <br/>for any vacancy at any time in the building.
    <br/> 
     <br/>Meanwhile, the flats are housed in a very spacious compound and the whole facility is barely  24 months old which makes it relatively a new building. All the facilities are intact and in a perfect condition and <br />below you’d learn more about the available amenities and condition.
    <br/>
    <br/> 
    <br/>
    </span>
    <li className='ml-[10px]'>All flats are fully occupied by tenants presently</li>
    <li className='ml-[10px]'>All necessary documents are available except c of o</li>
    <li className='ml-[10px]'>Located in ideal location in Abeokuta</li>
    <li className='ml-[10px]'>The Owner needs the money urgently</li>
    <li className='ml-[10px]'>All rooms are ensuit</li>
    <li className='ml-[10px]'>Marble kitchen Cabinets</li>
    <li className='ml-[10px]'>Central Borehole</li>
    <li className='ml-[10px]'>24hours Security</li>
    <li className='ml-[10px]'>Area has amazing gift of constant electricity</li>
    <li className='ml-[10px]'>POP ceiling</li>
    <li className='ml-[10px]'>Property fully fenced and gated</li>
    
    </div> 


    <div className="w-[1044px] h-[53px] left-[328px] top-[1659px] absolute">
      <img src={Vector4} alt=""  />
      <div className="w-[220px] h-[45px] px-[27px] py-[17px] left-[820px] top-[8px] absolute bg-[#5a7e7e] rounded-[5px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-[#fefefe] text-base font-medium font-['HK Grotesk'] capitalize">Back to Property info</div>
      </div>
      <div className="w-[320px] h-[47px] left-0 top-0 absolute">
        <div className="left-[72px] top-0 absolute text-black text-2xl font-semibold font-['HK Grotesk'] capitalize">View property Status</div>
      </div>
    </div>
    
  </div>
  )
}

export default Button