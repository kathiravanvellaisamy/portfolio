
import { IoLogoHtml5 } from "react-icons/io5"
import { FaCss3Alt } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoDocker } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { FaAws } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const skillIcons = [
    {
        title: "HTML",
        icon: <IoLogoHtml5 size={40} />
    },
    {
        title: "CSS",
        icon: <FaCss3Alt size={40} />
    },
    {
        title: "Tailwind CSS",
        icon: <SiTailwindcss size={40} />
    },
    {
        title: "Javascript",
        icon: <IoLogoJavascript size={40} />
    },
    {
        title: "React Js",
        icon: <GrReactjs size={40} />
    },
    {
        title: "NextJs",
        icon: <RiNextjsFill size={40} />
    },
    {
        title: "Docker",
        icon: <IoLogoDocker size={40} />
    },
    {
        title: "Github",
        icon: <FaSquareGithub size={40} />
    },
    {
        title: "AWS",
        icon: <FaAws size={40} />
    },
    {
        title: "Mongo DB",
        icon: <SiMongodb size={40} />
    },
    {
        title: "Postgresql",
        icon: <BiLogoPostgresql size={40} />
    },
    {
        title: "Express",
        icon: <SiExpress size={40}   />
    }
]


const Skills = () => {
  return (
    <div id="skills" className="w-11/12 max-w-7xl mx-auto text-center h-screen  scroll-mt-16 p-[12%]">
            <h4 className="text-center mb-2 text-lg font-ovo">What I Know</h4>
            <h2 className="text-center text-5xl font-ovo"> Skills & Technologies</h2>
            <div className="max-w-7xl mx-auto ">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 py-16">
 
                 
                 
                
                {skillIcons.map((skill, index) => (
                <div key={index} title={skill.title} className="p-3 border border-slate-200 rounde-md  flex items-center
                        justify-center  hover:scale-110 transition-transform duration-300 text-gray-800 hover:text-orange-400 ">
                            
                            {skill.icon}
                </div>
                
            ))}
                   
            </div>
            
            </div>
            
        </div>
  )
}

export default Skills