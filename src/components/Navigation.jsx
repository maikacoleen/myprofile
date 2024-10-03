const Navigation = () => {
    return (
        <nav>
            <div className="flex justify-end py-2">
                <div>
                    <button className="rounded-lg px-4 py-3 m-1 text-yellowtext hover:bg-yellowtext/10 hover:underline hover:decoration-wavy hover:decoration-yellowtext hidden sm:block">ABOUT</button>
                </div>
                <div>
                    <button className="rounded-lg px-4 py-3 m-1 text-yellowtext hover:bg-yellowtext/10 hover:underline hover:decoration-wavy hover:decoration-yellowtext hidden sm:block">PROJECTS</button>
                </div>
                <div>
                    <button className="rounded-lg px-4 py-3 m-1 text-yellowtext hover:bg-yellowtext/10 hover:underline hover:decoration-wavy hover:decoration-yellowtext hidden sm:block">CONTACT</button>
                </div>
                <div>
                    <button className="rounded-lg px-4 py-3 m-1 bg-yellowtext/10 hover:bg-yellowtext/20">
                    <img src="/linkedin.svg" alt="LinkedIn" className="h-6 w-6 inline-block" />
                    </button>
                </div>
                <div>
                    <button className="rounded-lg px-4 py-3 m-1 bg-yellowtext/10 hover:bg-yellowtext/20">
                    <img src="/github.svg" alt="GitHub" className="h-6 w-6 inline-block" />
                    </button>
                </div>
                <div className="sm:hidden  hover:bg-yellowtext/20 rounded-lg px-4 py-3 m-1 flex items-center group">
                    <span className="relative tems-center">
                    <button className=" text-yellowtext group-hover:underline group-hover:decoration-wavy group-hover:decoration-yellowtext translate-x-1.5 transition-transform duration-500 ease-in-out group-hover:translate-x-0">MENU</button>
                    </span>
                    <span className="w-3 h-3 ml-1 rounded-full bg-yellowtext scale-[0.8] translate-x-1.5 transition-all duration-500 ease-in-out group-hover:scale-[1.25] group-hover:translate-x-0 group-hover:ml-1"></span>
                </div>
            </div>
        </nav>

    );
};

export default Navigation;