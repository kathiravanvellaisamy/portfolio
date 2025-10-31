import Image from "next/image"


const About = () => {
  return (
    <div id="about" className="w-full p-[12%] py-10 scroll-mt-16">
        <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
        <h2 className="text-center text-5xl font-ovo"> About Me</h2>

        <div className="w-full flex flex-col lg:flex-row items-center gap-10 my-10">
            <div className="w-64 sm:w-80 rounded-3xl max-w-none">
                <Image src="/about.png" alt="Kathiravan" height={550} width={458} className="rounded-3xl w-full" />
            </div>
            <div className="flex-1">
                <p className="mb-8 font-ovo max-w-2xl text-justify">I’m Kathir, a passionate Web Designer from Tamil Nadu with over 6 years of experience in designing and developing modern, user-friendly websites.
                I enjoy creating clean, responsive, and visually appealing web interfaces that bring ideas to life.</p>

                <p  className="mb-8 font-ovo max-w-2xl text-justify">Recently, I’ve been learning and working with modern web technologies like React, Next.js, and Tailwind CSS to build fast and dynamic web applications.
                My goal is to combine creative design with modern development to deliver smooth digital experiences.</p>

                <p  className="mb-8 font-ovo max-w-2xl text-justify">When I’m not coding or designing, I love exploring new tech trends and improving my design skills.</p>

            </div>
        </div>
    </div>
  )
}

export default About