import React from 'react';
import pdfFile from '../../../assets/Divjot_Bhogal_2025.pdf'; 

const AboutMe: React.FC = () => {
    return (
        <section className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-600 mb-4">
                Hi, I am Divjot Bhogal. I am an aspiring FullStack/Backend Engineer and developer with experience in building real-time systems
                and working on projects related to machine learning and things I find fun/interesting. Currently, I’m studying Computational Mathematics at the University of Waterloo
                in my 4b term with a Minor in Computing.
            </p>
            <div className="flex justify-between items-center gap-4">
                <a 
                    href={pdfFile} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    download="Divjot_Bhogal_2025.pdf" 
                    className="bg-black text-white rounded px-4 py-2 cursor-pointer inline-block"
                >
                    Resume
                </a>
                
                <div className="flex gap-8 text-center">
                    <div>
                        <p className="font-semibold text-gray-800">10+</p>
                        <p className="text-gray-600">Projects Completed</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">2+</p>
                        <p className="text-gray-600">Years of Job Experience</p>
                    </div>
                </div>
                
                <a href="/About" className="bg-black text-white rounded px-4 py-2 cursor-pointer inline-block">
                    Projects
                </a>
            </div>

        </section>
    );
};

export default AboutMe;
