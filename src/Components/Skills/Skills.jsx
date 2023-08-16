import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Skills = () => {
    const skillsData = [
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 70 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'React', percentage: 65 },
        { name: 'Node.js', percentage: 90 },
        { name: 'Angular', percentage: 40 },
    ];

    return (
        <div className="text-bg-dark">
            <div className="container text-center p-5">
                <h3 className="pt-5 text-danger">Skills</h3>
                <p className="p-2 mb-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda laborum animi repudiandae repellat non
                    soluta, asperiores officiis distinctio, dolores voluptatem modi a odio adipisci itaque sit optio iste
                    aliquam voluptates esse, blanditiis laboriosam? Officiis veritatis fugiat et maiores illo minima quo aliquam
                    dolore. Consequuntur necessitatibus deserunt earum, quo nihil doloribus.
                </p>
                <div className=" d-flex justify-content-center align-items-center">
                    <p className="fs-3 text-danger">MERN Stack Developer</p>
                </div>

                <div className="row mb-5 d-flex justify-content-s">
                    <div className=" ">
                        {skillsData.map(skill => (
                            <div key={skill.name} className="mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>{skill.name}</span>
                                    <CircularProgressbar
                                        value={skill.percentage}
                                        text={`${skill.percentage}%`}
                                        styles={{
                                            path: { stroke: `rgba(255, 0, 0, ${skill.percentage / 100})` },
                                            trail: { stroke: '#d6d6d6' },
                                            text: { fill: '#f00', fontSize: '1.2rem' },

                                            root: { width: '65px', height: '65px' },

                                            path: { strokeWidth: '8px' },
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

