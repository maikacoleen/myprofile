function Skill({file, name}){
    return (
        <div className="grid justify-items-center my-7 mx-3">
            <div className=" bg-iconblack h-16 w-16 rounded-full flex items-center justify-center border-4 border-icongrey">
            <img src={`images/skills/${file}`} alt={name} className="h-9 w-9"/>
            </div>
            <p className="text-icongrey pt-3">{name}</p>  
        </div>
    );
};

export default Skill;