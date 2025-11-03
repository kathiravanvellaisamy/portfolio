import Image from "next/image"


const MyLatestWork = () => {
  return (
    <div id="works" className="w-full px-[12%] pt-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-ovo">Recent Projects</h4>
        <h2 className="text-center text-5xl font-ovo ">My Latest Work</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">Here are a few of my recent web projects that showcase my design and
    development skills using modern frontend and backend technologies.</p>

    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5">
        <div className="relative cursor-pointer group  border border-slate-300 rounded-lg p-3">
            <div>
                <h2 className="py-1 text-lg font-extralight">Project title here</h2>
               
            </div> 
            <div>
                <Image src="/demo/ai.png" alt="project1" width={1000} height={100} className="w-full rounded-lg" />
            </div>
        </div>
        <div className="relative cursor-pointer group  border border-slate-300 rounded-lg p-3">
            <div>
                <h2 className="py-1 text-lg font-extralight">Project title here</h2>
               
            </div> 
            <div>
                <Image src="/demo/college.png" alt="project1" width={1000} height={100} className="w-full rounded-lg" />
            </div>
        </div>
        <div className="relative cursor-pointer group   border border-slate-300 rounded-lg p-3">
            <div>
                <h2 className="py-1 text-lg font-extralight">Project title here</h2>
               
            </div> 
            <div>
                <Image src="/demo/food.png" alt="project1" width={1000} height={100} className="w-full rounded-lg" />
            </div>
        </div>
        <div className="relative cursor-pointer   border border-slate-300 rounded-lg p-3">
            <div>
                <h2 className="py-1 text-lg font-extralight">Project title here</h2>
               
            </div> 
            <div>
                <Image src="/demo/ecoomerce.png" alt="project1" width={1000} height={100} className="w-full rounded-lg" />
            </div>
        </div>
        <div className="relative cursor-pointer group   border border-slate-300 rounded-lg p-3">
            <div>
                <h2 className="py-1 text-lg font-extralight">Project title here</h2>
               
            </div> 
            <div>
                <Image src="/demo/saas.png" alt="project1" width={1000} height={100} className="w-full rounded-lg" />
            </div>
        </div>
        <div className="relative cursor-pointer group   border border-slate-300 rounded-lg p-3">
            <div>
                <h2 className="py-1 text-lg font-extralight">Project title here</h2>
               
            </div> 
            <div>
                <Image src="/demo/travel.png" alt="project1" width={1000} height={100} className="w-full rounded-lg" />
            </div>
        </div>
    </div>

    </div>

    
  )
}

export default MyLatestWork