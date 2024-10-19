function Skill({file, name}){
    return (
        <div className="grid justify-items-center mt-5 md:mt-7 mx-3 px-1">
            <div className="bg-iconblack h-14 w-14 md:h-16 md:w-16 rounded-full flex items-center justify-center border-4 border-icongrey">
            <img src={`images/skills/${file}`} alt={name} className="h-7 w-7 md:h-9 md:w-9"/>
            </div>
            <p className="text-icongrey pt-3 text-xs md:text-sm">{name}</p>  
        </div>
    );
};

export default Skill;