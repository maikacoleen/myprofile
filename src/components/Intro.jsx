// const Intro = () => {
//     return (
//         <header>
//             <div className="relative flex max-w-full pt-20">
//                 <div className="flex flex-col justify-center items-center text-center z-10 absolute">
//                     <h1 className="text-white text-7xl text-wrap">Hello, I am <strong className="text-yellowtext" aria-label="Maika Rabenitas">Maika.</strong></h1>
//                     <h2 className="text-white text-wrap text-base">Web Developer - Front-End - Back-End - Full Stack</h2>
//                 </div>
//                 <div className="relative">
//                     <img src="/maika.jpeg" alt="Maika Rabenitas" className="relative object-contain"></img>
//                 </div>
//             </div>
            
//         </header>
//     );
// };

// export default Intro;

const Intro = () => {
    return (
        <header>
            <div className="max-w-full h-screen flex justify-center">
                <div className="flex flex-col z-10 relative p-8 top-1/4">
                    <h1 className="text-white text-3xl md:text-7xl text-wrap md:mb-4 mb-1">
                        Hello, I am <strong className="text-yellowtext">Maika.</strong>
                    </h1>
                    <h2 className="text-white text-wrap text-md md:text-2xl">
                        Web Developer - Front-End - Back-End - Full Stack
                    </h2>
                </div>
                <div className="absolute top-1/4 right-0 w-5/6 md:w-1/2 max-w-md">
                    <img 
                        src="/maika.jpeg" 
                        alt="Maika Rabenitas" 
                        className="w-full h-4/6"
                    />
                </div>
            </div>
        </header>
    );
};

export default Intro;
