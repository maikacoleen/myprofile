import { useEffect, useState } from "react";

const Intro = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [isHovered, setIsHovered] = useState(false);
  const [shouldBounce, setShouldBounce] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
    //   setMousePosition({ x: e.clientX, y: e.clientY });
    // Calculate the mouse position relative to the center of the viewport
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setMousePosition({
      x: e.clientX - centerX,
      y: e.clientY - centerY,
    });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

//   Scroll down button bounce effect
  useEffect(() => {
    let timeoutId;
    
    if (!isHovered) {
      timeoutId = setTimeout(() => {
        setShouldBounce(true);
      }, 500);
    } else {
      setShouldBounce(false);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isHovered]);

  return (
    <header className="relative w-full min-h-screen overflow-hidden">
      <div className="max-w-full min-h-screen flex items-center relative px-4 md:px-8">
        {/* Text Container */}
        <div 
          className="flex flex-col z-10 text-center w-full"
          style={{
            transform: `translate(${mousePosition.x/20}px, ${mousePosition.y/20}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 font-bold">
            Hello, I am <strong className="text-yellowtext">Maika.</strong>
          </h1>
          <h2 className="text-white text-sm sm:text-md md:text-2xl max-w-3xl mx-auto">
            Web Developer - Front-End - Back-End - Full Stack
          </h2>
        </div>

        {/* Image Container */}
        <div 
          className="absolute right-0 md:right-60 h-full flex items-center justify-end w-5/6 md:w-1/2 max-w-md"
          style={{
            transform: `translate(${mousePosition.x/30}px, ${-mousePosition.y/30}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src="images/maika.jpeg" 
            alt="Maika Rabenitas" 
            className="w-auto h-3/5 object-cover opacity-75"
            loading="eager"
          />
        </div>

        {/* Scroll Button */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={scrollToSection}
            className={`"animate-bounce hover:animate-none w-14 h-14 rounded-full bg-yellowtext flex justify-center items-center transition-all duration-300 ${shouldBounce ? 'animate-bounce' : ''} `}
          >
            <img src="images/icons/down.svg" alt="down arrow" className="h-8 w-8" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Intro;