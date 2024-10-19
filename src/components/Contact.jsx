const Contact = () => {
    return (
        <section id="contact" className="my-10 mt-10 mx-5 md:mx-40">
            
            
            <h1 className="text-yellowtext text-3xl font-bold py-3 pb-6">Contact.</h1>
            <div className="flex flex-row items-center justify-center gap-2 my-5 py-10">
            <a href="https://linkedin.com/in/maikacoleen" className="mx-5">
            <div className="flex flex-row gap-1 items-center md:px-24">
                <button className="text-yellowtext underline underline-yellowtext text-lg hover:underline hover:decoration-wavy hover:decoration-yellowtext">LinkedIn</button>
                <img src="images/icons/link.svg" alt="link" className="h-5 w-5" />
            </div>
            </a>
            <a href="mailto:maikacoleen1205@gmail.com" className="mx-5">
            <div className="flex flex-row gap-1 items-center md:px-24">
                <button className="text-yellowtext underline underline-yellowtext text-lg hover:underline hover:decoration-wavy hover:decoration-yellowtext">Email</button>
                <img src="images/icons/link.svg" alt="link" className="h-5 w-5" />
            </div>
            </a>
            </div>

        </section>
    )
}

export default Contact;