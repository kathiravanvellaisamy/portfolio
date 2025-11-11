

const Contact = () => {
  return (
        <div id="contact" className="w-11/12 max-w-7xl mx-auto text-center h-screen  scroll-mt-8 p-[12%]">
            <h4 className="text-center mb-2 text-lg font-ovo">Whether it’s a website, app, or idea — I’d love to hear from you.</h4>
            <h2 className="text-center text-5xl font-ovo"> Let’s Create Something Amazing Together</h2>

            <div className="max-w-lg mx-auto px-6">
                <div className="w-full py-2 flex flex-col md:flex-row gap-2 justify-center items-center">
                    <input type="text" name="" placeholder="Name" className="border border-slate-400 rounded-md px-2 py-1 mt-5 w-full"/>
                </div>
                 <div className="w-full py-2 flex flex-col md:flex-row gap-2 justify-center items-center">
                    <input type="email" name="" placeholder="Email" className="border border-slate-400 rounded-md px-2 py-1   w-full"/>
                </div>
                 <div className="w-full pt-2 flex flex-col md:flex-row gap-2 justify-center items-center">
                    <textarea  name="" placeholder="Description" className="border border-slate-400 rounded-md px-2 py-1  w-full"></textarea>
                </div>

                <div className=" flex items-center justify-center">
                     <button className="mt-5  w-full  bg-slate-800 hover:bg-orange-400 text-white py-2.5 px-5 cursor-pointer rounded-md">Send Message</button>                  
                </div>
                 
                
            </div>
        </div>
          
  )
}

export default Contact