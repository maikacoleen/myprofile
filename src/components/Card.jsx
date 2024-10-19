import Tag from "./Tag";

const Card = ({link, file, title, description, tech}) => {
    return (
        <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-xl overflow-hidden group 
                        focus-within:ring-2 hover:ring-2 ring-white ring-offset-1 ring-offset-black 
                        transition-shadow duration-300">

            {/* Image container */}
            <a href={link} className="block relative w-full h-full">
                <div className="w-full h-full bg-cardcolor">
                    <img 
                        src={`/images/project/${file}`} 
                        alt="brownie" 
                        className="w-full h-full opacity-40 object-cover"
                    />
                </div>

                {/* Overlay with blur effect */}
                <div className="absolute inset-0 bg-gray-900/0">
                <div className="absolute inset-0 bg-black/20 backdrop-blur 
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-300">
                 </div>
                 </div>

                {/* Content container - Always visible on mobile */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col gap-2 
                              transition-transform duration-500
                              sm:translate-y-full sm:group-hover:translate-y-0
                              translate-y-0">
                    
                    {/* Title with wavy underline effect - Always visible on mobile */}
                    <h1 className="relative text-white text-xl sm:text-2xl font-bold
                                transition-transform duration-500
                                sm:translate-y-[-320%] sm:group-hover:translate-y-0
                                translate-y-0
                                decoration-wavy 
                                sm:decoration-transparent sm:group-hover:decoration-yellowtext
                                decoration-yellowtext
                                underline
                                group-hover:cursor-pointer">
                        {title}
                    </h1>

                    {/* Description - Always visible on mobile */}
                    <p className="text-yellowtext my-0 text-sm sm:text-base
                                group-hover:translate-y-0">
                        {description}
                    </p>

                    {/* Tech stack - Always visible on mobile */}
                    <div className="flex flex-wrap gap-2 group-hover:translate-y-0">
                        {tech.map((tech, index) => (
                            <Tag key={index} tech={tech} />
                        ))}
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Card;