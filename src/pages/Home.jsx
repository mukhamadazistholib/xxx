import React from 'react'
import Listrik from './modals/Listrik'
import Schedule from './modals/Schedule'
import Petani from './modals/Petani'
import Pets from './modals/Pets'
import HumaniesSchedule from './modals/HumaniesSchedule'
import Fundraising from './modals/Fundraising'
import About from './modals/About'
import Korupsi from './modals/Korupsi'
import Books from './modals/Books'
import Awards from './modals/Awards'
import LapanganPekerjaan from './modals/LapanganPekerjaan'
import KebutuhanPokok from './modals/KebutuhanPokok'
import PerlindunganHukum from './modals/PerlindunganHukum'
import TataKota from './modals/TataKota'
import Pendidikan from './modals/Pendidikan'

export default function Home() {
  return (
    <div>
      
      
      <div className="flex h-screen items-center justify-center">
        <div className="relative w-[389px] h-[693px]">
            <div className="layer absolute inset-0 bg-cover bg-center false">
            <div className="absolute left-2 top-2 flex items-center gap-x-2">
                <img src="/static/images/sound-off.webp" alt="Toggle mute button" className="false w-[10%] h-auto" />
                <img src="/static/images/hint-off.webp" alt="Toggle mute button" className="false w-[10%] h-auto"/>
            </div>

            
            <img src="/static/images/bg-2.webp" alt="Background Image" className="absolute top-0 -z-10 h-auto w-[100%]" />
            
            {/* <img src="/static/images/calendar.webp" alt="Jadwal Pak Anies" className="absolute left-[34%] top-[10.9%] cursor-pointer false w-[28%] h-auto" /> */}
            <Schedule />

            {/* <img src="/static/images/lamp.webp" alt="Visi misi Pak Anies dan Cak Imin" className="absolute left-[26.2%] top-[0%] cursor-pointer false w-[12%] h-auto" /> */}
            <Listrik />
            
            {/* <img src="/static/images/awards.webp" alt="Penghargaan Pak Anies" className="absolute bottom-[46%] left-0 z-[2] cursor-pointer false w-[20%] h-auto"/> */}
            <Awards />

            <img src="/static/images/fish.webp" alt="Visi misi kesejahteraan nelayan" className="absolute bottom-[22.5%] right-[30%] z-10 cursor-pointer false w-[12%] h-auto" />
            
            {/* <img src="/static/images/white-cat.webp" alt="Kucing Pak Anies" className="absolute bottom-[21%] right-[29%] cursor-pointer false w-[20%] h-auto" /> */}
            {/* <Pets /> */}

            {/* <img src="/static/images/cat-animated.webp" alt="Kucing Pak Anies" className="absolute bottom-[30%] right-[5%] z-10 cursor-pointer false w-[30%] h-auto" /> */}
            {/* <Pets /> */}

            {/* <img src="/static/images/black-cat.webp" alt="Kucing Pak Anies" className="absolute left-[32%] top-[39%] cursor-pointer false w-[23%] h-auto" /> */}

            {/* <img src="/static/images/rat.webp" alt="Visi misi pemberantasan korupsi dan KPK" className="absolute left-[39%] top-[55%] cursor-pointer false w-[7%] h-auto" /> */}
            <Korupsi />

            {/* <img src="/static/images/brown-cat.webp" alt="Kucing Pak Anies" className="absolute right-[12%] top-[6%] z-10 cursor-pointer false w-[24%] h-auto" /> */}
            <Pets />

            {/* <img src="/static/images/plants.webp" alt="Visi misi lingkungan dan sumber daya alam" className="absolute right-[18.8%] top-[8%] z-10 cursor-pointer false w-[19.4%] h-auto" /> */}
            <Petani />

            {/* <img src="/static/images/tree.webp" alt="Visi misi lingkungan dan sumber daya alam" className="absolute right-[0%] top-[0%] cursor-pointer false w-[22%] h-auto" /> */}
            <HumaniesSchedule />

            {/* <img src="/static/images/truck.webp" alt="Fundraising" className="absolute right-[0%] top-[24.6%] cursor-pointer false w-[28%] h-auto" /> */}
            <About />
            
            {/* <img src="/static/images/owl.webp" alt="Fundraising" className="absolute right-[0%] top-[11%] cursor-pointer false w-[15%] h-auto" /> */}
            <Fundraising />

            {/* <img src="/static/images/books.webp" alt="Fundraising" className="absolute left-[0%] top-[11%] cursor-pointer false w-[22.6%] h-auto" /> */}
            <Books />

            {/* <img src="/static/images/bag.webp" alt="Fundraising" className="absolute bottom-[8%] right-[0%] cursor-pointer false w-[16%] h-auto" /> */}
            <Pendidikan />

            {/* <img src="/static/images/food.webp" alt="Visi misi ketahanan pangan" className="absolute bottom-[0.4%] left-[11%] cursor-pointer false w-[34%] h-auto" /> */}
            <KebutuhanPokok />

            {/* <img src="/static/images/lanyard.webp" alt="Visi misi lapangan pekerjaan" className="absolute bottom-[12%] left-[0%] cursor-pointer false w-[12%] h-auto" /> */}
            <LapanganPekerjaan />
            
            <img src="/static/images/phone-animated.webp" alt="Visi misi lapangan pekerjaan" className="absolute bottom-[11.3%] left-[15.8%] sm:bottom-[11.5%] cursor-pointer false w-[18%] h-auto" />
            
            {/* <img src="/static/images/cards.webp" alt="Visi misi kartu-kartu" className="absolute bottom-[7.8%] left-[10%] cursor-pointer false w-[14%] h-auto z-50" /> */}
            <PerlindunganHukum />

            {/* <img src="/static/images/wallet.webp" alt="Visi misi bantuan hukum bagi rakyat kurang mampu" className="imeg absolute bottom-[0%] left-[0%] cursor-pointer false w-[9%] h-auto" /> */}
            
            {/* <img src="/static/images/transportation.webp" alt="Visi misi kesejahteraan dan tata kota" className="imeg absolute bottom-[0%] right-[16.2%] cursor-pointer false w-[44%] h-auto" /> */}
            <TataKota />
            </div>
        </div>
    </div>


    </div>
  )
}
