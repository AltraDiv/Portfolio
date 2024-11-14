import React from 'react';

const Education: React.FC = () => {
    return (
        <section className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
            <div className="bg-white p-4 rounded-lg shadow mb-4">
                <p className="text-gray-600">Aug 2021 - May 2024</p>
                <h3 className="text-xl font-semibold text-gray-800">Bachelor of Computational Mathematics, Honours</h3>
                <p className="text-gray-500">University of Waterloo</p>
                <p className="text-gray-500 mt-2">GPA: 2.7</p>
                <p className="text-gray-600 mt-4">
                    Computational Mathematics with a Minor in Computing. Relevant Courses:
                    Linear Algebra I & II, Calculus III, Introduction To Machine Learning, 
                    Object Oriented Programming (CS135, CS136, CS246, etc), Data Structures and Algorithms,
                    Optimization (Co250), Applied Cryptography, Introduction to Computational Mathematics, 
                    Computational Statistics and Data Analysis, Deterministic OR Models.
                </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-600">Sept 2017 - June 2020</p>
                <h3 className="text-xl font-semibold text-gray-800">Highschool</h3>
                <p className="text-gray-500">Father Michael Goetz Secondary School</p>
                <p className="text-gray-500 mt-2">Average: 92%</p>
                <p className="text-gray-600 mt-4">
                   Graduated with a 92% average and an ICT SHSM (Specialist High Skills Majour) Certificate Red Emblem in Diploma.
                   Took courses in Computer Science, Calculus, Advanced Functions and Technology.
                </p>
            </div>
        </section>
    );
};

export default Education;
