

const Background = () => {
    return (
        <div className="w-full h-screen fixed z-[2]">
               <nav className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-700 font-semibold text-lg">Documetns.</nav>


               <h1 className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none font-semibold text-zinc-900 tracking-tighter space-x-1 ">
               <span className="D">D</span>
               <span className="O">O</span>
               <span className="C">C</span>
               <span className="S">S</span>
               <span className="ss">.</span>
               
               </h1>
        </div>
    );
};

export default Background;