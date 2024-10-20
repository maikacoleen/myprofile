import Skill from "./Skill";
import skills from "../data/skills.js";

const About = () => {

    const languages = skills.filter(
        skill => skill.type === 'Language'
    );
    const webdev = skills.filter(
        skill => skill.type === 'Web Development'
    );
    const other = skills.filter(
        skill => skill.type === 'etc'
    );

    return(
        <section id="about" className="my-10 mt-10 mx-5 md:mx-40 pt-16 sm:pt-20">
            <div>
            <h1 className="text-yellowtext text-3xl font-bold py-3">About.</h1>
            <div className="my-5">
            <p className="text-white text-lg" >Hello! My name is Maika Rabenitas. I am a recent Computer Science graduate from the University of Victoria, passionate about expanding my skills across various areas of tech. Growing up as a big fan of Apple products, one of my dream jobs was to work at an Apple Store. I got the opportunity to make that dream a reality and became an Apple Certified Technician. It was an exciting role, and it gave me a closer look at the tech industry—one that I hadn’t initially considered for myself.</p><br />
            <p className="text-white text-lg">
            Tech always had a masculine image to me, and I didn’t initially see myself in the field. At the time, the stereotype was that computers and technology were areas dominated by men, so it simply didn’t seem like a path I would follow. But my time at Apple opened my eyes to the diversity within the industry, and I began to grow curious about computers and software development. That curiosity led me to explore the world of programming, marking the beginning of my journey into tech.</p>
            </div>
            </div>

            <div>
                <h1 className="text-white text-2xl font-bold">Journey</h1>
                <div className="my-5">
                <p className="text-white text-lg">My journey into tech really took off when I started learning web development through Udemy courses. I remember diving into HTML, CSS, and JavaScript, just curious to see what I could build. Before long, that curiosity turned into my first real project—building a website for an English learning school. It was exciting to see how those skills could be put into action.</p><br />

                <p className="text-white text-lg">During university, I had the chance to apply for a grant outside of my academic coursework by submitting a technical proposal. Working with a team of four, we developed an idea, mapped out the technology stack, and created a project timeline to bring it to life. Although the project is still in development, this experience taught me that learning extends beyond the classroom and helped me gain foundational knowledge of the development lifecycle.</p><br />

                <p className="text-white text-lg">Along the way, I’ve participated in hackathons, organized workshops for the Google Developer Student Club, and collaborated on various projects. These experiences have sharpened both my technical and communication skills, and they’ve reinforced what I love most about this field: the opportunity to collaborate with others. I don’t just learn new languages or frameworks because they’re popular—I learn them when they benefit the project I’m working on. Working as part of a team, learning from my peers, and growing together to achieve shared goals is what keeps me passionate about tech.
                </p>
                </div>
            </div>

            <div>
                <h1 className="text-white text-2xl font-bold">Skills</h1>
                <div className="my-5 md:mx-5 pb-20 p-5 bg-blackblue rounded-3xl ">
                    <h1 className="text-white text-xl font-bold pt-5">Languages</h1>
                    <div className="flex flex-row flex-wrap justify-start">
                    
                    {   
                    languages
                        .sort((a, b) => a.level - b.level)
                        .map((icon, index) => (
                        <Skill key={index} file={icon.file} name={icon.name} />
                        ))
                    }
                
                    </div>
    
                    <h1 className="text-white text-xl font-bold pt-5">Web Development</h1>
                    <div className="flex flex-row flex-wrap justify-start">
                    {   
                    webdev
                        .sort((a, b) => a.level - b.level) 
                        .map((icon, index) => (
                        <Skill key={index} file={icon.file} name={icon.name} />
                        ))
                    }
                    </div>
                    <h1 className="text-white text-xl font-bold pt-5">Database & Cloud</h1>
                    <div className="flex flex-row flex-wrap justify-start">
                    {   
                    other
                        .sort((a, b) => a.level - b.level) // Sort by icon.level
                        .map((icon, index) => (
                        <Skill key={index} file={icon.file} name={icon.name} />
                        ))
                    }
                    </div>

                    

                </div>
            </div>
        </section>

    );

};

export default About;