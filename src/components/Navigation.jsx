import { useState, useEffect } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Shared scroll function with offset calculation
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        const navHeight = document.querySelector('nav').offsetHeight;
        const mobileMenuHeight = isOpen ? document.querySelector('.mobile-menu').offsetHeight : 0;
        const totalOffset = navHeight + mobileMenuHeight;

        if (section) {
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            
            // Close mobile menu after clicking
            // if (isOpen) {
            //     setIsOpen(false);
            // }
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            {/* Main navigation container */}
            <div className="flex justify-end items-center fixed py-1 px-5 w-full z-20 bg-black/50 backdrop-blur">
                {/* Desktop navigation items */}
                <div className="hidden sm:flex items-center gap-2">
                    <button 
                        onClick={() => scrollToSection('about')} 
                        className="rounded-lg px-4 py-3 m-1 text-yellowtext 
                                 hover:bg-yellowtext/10 hover:underline 
                                 hover:decoration-wavy hover:decoration-yellowtext">
                        ABOUT
                    </button>
                    <button 
                        onClick={() => scrollToSection('project')}
                        className="rounded-lg px-4 py-3 m-1 text-yellowtext 
                                 hover:bg-yellowtext/10 hover:underline 
                                 hover:decoration-wavy hover:decoration-yellowtext">
                        PROJECTS
                    </button>
                    <button 
                        onClick={() => scrollToSection('contact')}
                        className="rounded-lg px-4 py-3 m-1 text-yellowtext 
                                 hover:bg-yellowtext/10 hover:underline 
                                 hover:decoration-wavy hover:decoration-yellowtext">
                        CONTACT
                    </button>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-1">
                    <a href="https://linkedin.com/in/maikacoleen" 
                       className="rounded-lg px-4 py-3 m-1 bg-yellowtext/10 hover:bg-yellowtext/20">
                        <img src="images/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
                    </a>
                    <a href="https://github.com/maikacoleen" 
                       className="rounded-lg px-4 py-3 m-1 bg-yellowtext/10 hover:bg-yellowtext/20">
                        <img src="images/icons/github.svg" alt="GitHub" className="h-6 w-6" />
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className="sm:hidden hover:bg-yellowtext/20 rounded-lg px-4 py-3 m-2 
                              flex items-center group cursor-pointer"
                     onClick={toggleMenu}>
                    <span className="relative items-center">
                        <button className="text-yellowtext group-hover:underline 
                                         group-hover:decoration-wavy group-hover:decoration-yellowtext 
                                         translate-x-1.5 transition-transform duration-500 
                                         ease-in-out group-hover:translate-x-0">
                            MENU
                        </button>
                    </span>
                    <span className="w-3 h-3 ml-1 rounded-full bg-yellowtext 
                                   scale-[0.8] translate-x-1.5 transition-all duration-500 
                                   ease-in-out group-hover:scale-[1.25] 
                                   group-hover:translate-x-0 group-hover:ml-1">
                    </span>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`mobile-menu fixed left-0 w-full py-2 
                           flex items-center justify-center gap-2 
                           bg-black/50 backdrop-blur-md
                           transform transition-all duration-500 ease-in-out
                           sm:hidden
                           ${isOpen ? 'top-[69px] opacity-100 visible' : 
                                    'top-0 opacity-0 invisible'}`}>
                <button 
                    onClick={() => scrollToSection('about')}
                    className="rounded-lg p-3 text-yellowtext 
                             hover:bg-yellowtext/10 hover:underline 
                             hover:decoration-wavy hover:decoration-yellowtext">
                    ABOUT
                </button>
                <button 
                    onClick={() => scrollToSection('project')}
                    className="rounded-lg p-3 text-yellowtext 
                             hover:bg-yellowtext/10 hover:underline 
                             hover:decoration-wavy hover:decoration-yellowtext">
                    PROJECTS
                </button>
                <button 
                    onClick={() => scrollToSection('contact')}
                    className="rounded-lg p-3 text-yellowtext 
                             hover:bg-yellowtext/10 hover:underline 
                             hover:decoration-wavy hover:decoration-yellowtext">
                    CONTACT
                </button>
            </div>
        </nav>
    );
};

export default Navigation;

