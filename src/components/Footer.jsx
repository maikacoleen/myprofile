const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
    <div>
      <div className="flex justify-center">
        <button onClick={scrollToTop} className="flex flex-row items-center justify-center bg-yellowtext rounded-full py-2 pr-3 pl-5 underline font-medium">
            Back To Top
            <img className="h-5 w-5" src="images/icons/up.svg" alt="up" />
        </button>
      </div> 
      <span className="flex justify-center text-icongrey my-10 pt-10">© {new Date().getFullYear()} Maika Rabenitas. All rights reserved. </span>

    </div> 
    );
}

export default Footer;