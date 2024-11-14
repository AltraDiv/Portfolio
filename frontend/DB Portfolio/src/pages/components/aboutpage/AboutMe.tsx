import React from 'react';
import Projects from './Projects';

const AboutMe: React.FC = () => {
    return (
        <section className="bg-white text-gray-300 min-h-screen">
            <div className="max-w-screen-lg px-4 py-12 mx-auto lg:px-8 sm:py-16 lg:py-24">
                {/* About Me Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-black">About Me</h1>
                    <p className="mt-4 text-gray-700">
                        I’m a passionate software developer with experience in web and mobile app development.
                        I love creating solutions that are efficient and most importantly work. I love learning
                        different ways to solve problems. I also love rockets!
                    </p>
                </div>

                {/* Skills and Interests */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="rounded-lg p-6 bg-gray-800 shadow-lg">
                        <h2 className="text-2xl font-semibold text-white mb-4">Skills</h2>
                        <ul className="list-disc list-inside text-gray-400">
                            <li>React.js, TypeScript, C++</li>
                            <li>Python, Flask</li>
                            <li>Machine Learning with PyTorch</li>
                            <li>SQL Databases</li>
                        </ul>
                    </div>
                    <div className="rounded-lg p-6 bg-gray-800 shadow-lg">
                        <h2 className="text-2xl font-semibold text-white mb-4">Interests</h2>
                        <p className="text-gray-400">
                            Apart from coding, I enjoy gaming, am currently in the Waterloo Rocket Club, and love to read books.
                            I also have a keen interest in startups and hope to create innovative solutions.
                        </p>
                    </div>
                </div>

                <Projects />
                
            </div>
        </section>
    );
};

export default AboutMe;
