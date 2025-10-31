import Image from "next/image"
import { MdOutlineWavingHand } from "react-icons/md";


const HeroSection = () => {
  return (
    <div className="w-11/12 max-w-3xl mx-auto text-center h-screen flex flex-col items-center justify-center gap-4">
        <div>
            <Image src="/profile.png" alt="Profile" width={100} height={100} className="rounded-full w-32"/>
            
        </div>
        <h3 className="flex items-center gap-0.5 text-xl md:text-2xl mb-3 font-ovo">Konnichiwa! I'm Kathiravan Vellaisamy <span className="text-orange-400"><MdOutlineWavingHand /></span></h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">frontend web developer based in India</h1>
        <p className="max-w-2xl mx-auto font-ovo"> I’m Web Designer from Tamil Nadu with 6+ years of experience, skilled in creating modern, responsive, and user-focused websites.</p>
    </div>
  )
}

export default HeroSection