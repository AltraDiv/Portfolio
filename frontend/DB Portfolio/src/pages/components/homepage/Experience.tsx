import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        {
            title: 'Backend Developer',
            company: 'CrackInterview',
            duration: 'July 2024 - September 2024',
            description: 'Researched, documented, and implemented a chatbot using DialoGPT and PyTorch, trained with PDF questionnaires and deployed with Flask. Led backend maintenance and AI integration, and developed a real-time, one-on-one chat system using WebSockets and asyncio.',
        },
        {
            title: 'Software Developer, Business Intelligence',
            company: 'Credit Valley Hospital; Trillium Health Partners',
            duration: 'Aug 2019 - Feb 2020',
            description: 'Developed custom websites and reports to streamline work and reduce wait times for physicians and staff. Spearheaded the "Priority Tracking Tool" project, significantly enhancing wait times for 1.75 million patients across Trillium Health Partners. Used MSSQL, C#, HTML, CSS, and JavaScript for full-stack development.',
        },
        {
            title: 'Junior Full Stack Developer',
            company: 'Replic',
            duration: 'July 2021 - May 2022',
            description: 'Developed a startup website using MVC and ASP.NET in Microsoft Visual Studio, following JIRA tasks to implement controller logic. Utilized MSSQL for database management, C# for backend, CsHtml for frontend views, and AWS RDS for deployment.',
        },
        {
            title: 'AI Mentor',
            company: 'GenAI Genesis Hackathon',
            duration: 'March 2024',
            description: 'Selected as one of 15 mentors out of over 1200 applicants to assist 300 students. Awarded "Best Mentor" for exceptional support in APIs, debugging, and machine learning guidance.',
        },
        {
            title: 'Propulsion Engineer',
            company: 'Waterloo Rocketry',
            duration: 'July 2023 - Present',
            description: 'Helped develop CAD drawings using SolidWorks, machined nozzles, ablative test stands and planned coldflow tests and static fire tests.',
        }
    ];

    return (
        <section className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Work Experience</h2>
            <div className="flex flex-col gap-4">
                {experiences.map((experience, index) => (
                    <div key={index} className="border-b pb-4">
                        <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
                        <p className="text-gray-600">{experience.company}</p>
                        <p className="text-gray-500">{experience.duration}</p>
                        <p className="text-gray-700 mt-1">{experience.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
