import { useEffect, useState } from "react";


const Intro = () => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({x: e.clientX, y: e.clientY});
            // console.log('Mouse X:', e.clientX, 'Mouse Y:', e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <header className = "relative">
            <div className="max-w-full min-h-screen flex items-center relative">
                <div className="flex flex-col z-10 relative p-8 text-center w-full"  style={{
                        transform: `translate(${mousePosition.x/20}px, ${mousePosition.y/20}px)`
                    }}>
                    <h1 className="text-white text-5xl md:text-7xl mb-4 font-bold">
                        Hello, I am <strong className="text-yellowtext">Maika.</strong>
                    </h1>
                    <h2 className="text-white text-md md:text-2xl">
                        Web Developer - Front-End - Back-End - Full Stack
                    </h2>
                </div>
                <div className="absolute right-0 md:right-60 h-full flex items-center justify-end w-5/6 md:w-1/2 max-w-md" style={{
                        transform: `translate(${mousePosition.x/30}px, ${-mousePosition.y/30}px)`
                    }}>
                    <img 
                        src="/maika.jpeg" 
                        alt="Maika Rabenitas" 
                        className="w-auto h-3/5 opacity-75"
                    />
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <a href="#about">
                    <button className="animate-bounce hover:animate-none w-14 h-14 rounded-full bg-yellowtext flex justify-center items-center">
                        <img src="/down.svg" alt="down arrow" className="h-8 w-8" />
                    </button>
            </a>
            </div>
               
                
            </div>
          
            
       
        </header>
    );
};

export default Intro;
