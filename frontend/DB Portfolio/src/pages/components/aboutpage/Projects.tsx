import React from 'react';
import Portfolio from '../../../assets/Portfolio.png';
import Nasa from '../../../assets/Nasa.png';
import VitalSense from '../../../assets/VitalSense.png';
import Tetris from '../../../assets/Tetris.png';
import Driving from '../../../assets/Driving.jpg';
import Compiler from '../../../assets/Compiler.webp';
import TrackingTool from '../../../assets/TrackingTool.jpeg';

const projects = [
	{
		id: 1,
		title: "Personal Portfolio Website",
		category: "Web Development",
		imgSrc: Portfolio,
		githubLink: "https://github.com/Altradiv/portfolio",
	},
	{
		id: 2,
		title: "NASA Satelite Agriculture Tool",
		category: "Data Science",
		imgSrc: Nasa,
		githubLink: "https://github.com/AltraDiv/NasaSpaceApps",
	},
	{
		id: 3,
		title: "VitalSense",
		category: "Web Developerment/AI",
		imgSrc: VitalSense,
		githubLink: "https://github.com/AltraDiv/VitalSense",
	},
	{
		id: 4,
		title: "Tetris",
		category: "Backend/Object Oriented Programming",
		imgSrc: Tetris,
		githubLink: "https://github.com/AltraDiv/Tetris-Game",
	},
	{
		id: 5,
		title: "Impaired Driving Detection",
		category: "FullStack/AI API's/Backend",
		imgSrc: Driving,
		githubLink: "https://github.com/AltraDiv/ImpairedDrivingDetector",
	},
	{
		id: 5,
		title: "Compiler",
		category: "Backend",
		imgSrc: Compiler,
		githubLink: "https://github.com/AltraDiv/CompilerProject",
	},
	{
		id: 6,
		title: "Other",
		category: "Backend",
		imgSrc: TrackingTool,
		githubLink:
			"https://www.dropbox.com/scl/fo/qe9rv0qdro6yfar9aw7uf/ABOw8fx2eX4zAnIJ_mYS7LQ?rlkey=wqttxajyni1rtivoh78v24ptg&dl=0",
	},
];

const Projects: React.FC = () => {
    return (
        <section className="bg-white min-h-screen text-black">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Projects</h2>
                </div>
                
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-white">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative rounded-lg overflow-hidden group bg-gray-800 shadow-lg transition-transform transform hover:scale-105"
                        >
                            <img
                                src={project.imgSrc}
                                alt={project.title}
                                className="object-cover w-full h-56 transition-opacity duration-300 opacity-80 group-hover:opacity-30"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 p-4">
                                <span className="px-3 py-1 text-sm font-semibold text-white bg-red-600 rounded-full mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-yellow-400 hover:text-yellow-300"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default Projects;
