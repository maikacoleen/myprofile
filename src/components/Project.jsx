import Card from "./Card";
import project from "../data/project";

const Project = () => {
    return (
        <section id="project" className="my-10 mt-10 mx-5 md:mx-40 pt-16 sm:pt-20">
            <h1 className="text-yellowtext text-3xl font-bold py-3 pb-6">Projects.</h1>
            
            {/* Responsive grid with consistent gaps and auto-sizing */}
            <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                          gap-6 md:gap-8 lg:gap-10
                          justify-items-center">
                {project.map((project, index) => (
                    <Card 
                        key={index} 
                        link={project.link} 
                        file={project.img} 
                        title={project.title} 
                        description={project.describe} 
                        tech={project.tech} 
                    />
                ))}
            </div>
        </section>
    );
}

export default Project;



// const Project = () => {
//     return (
//         <section id="project" className="my-10 mt-36 mx-5 md:mx-40">
//             <h1 className="text-yellowtext text-3xl font-bold py-3">Project.</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
//             {
//                 project.map((project,index) => (
//                     <Card key={index} link={project.link} file={project.img} title={project.title} description={project.describe} tech={project.tech} />
//                 ))
//             }
//             </div>
            
//         </section>
//     );
// }

// export default Project; 
