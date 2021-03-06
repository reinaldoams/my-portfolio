import React, { useEffect, useState } from "react";
import sanityClient from "../client";
// kapehe used from "..client/js"

const Project = () => {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }            
        }`
            )
            .then((data) => setProjectData(data))
            .catch(console.error)
    }, []);
    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    Welcome to my projects page!
                </h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData &&
                    projectData.map((project, index) => (
                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                            <h3 className="text-grey-800 text-3xl font-bold mb-2 hover:text-blue-700">
                                <a
                                    href={project.link}
                                    alt={project.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.title}
                                </a>
                            </h3>
                            <div className="text-grey-500 text-xs space-x-4">
                                <span>
                                    <strong className="font-bold">Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span>
                                    <strong className="font-bold">Company</strong>:{" "}
                                    {project.place}
                                </span>
                                <span>
                                    <strong className="font-bold">Type</strong>:{" "}
                                    {project.projectType}
                                </span>
                                <p className="my-6 text-lg text-grey-700 leading-relaxed">
                                    {project.description}
                                </p>
                                <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-blue-500 font-bold hover:underline hover:text-gray-400 text-xl">
                                    View the Project{" "}
                                    <span role="img" aria-label="right pointer">
                                    ????
                                    </span>
                                </a>
                            </div>
                            <img
                                        src={project.mainImage.asset.url}
                                        alt={project.mainImage.alt}
                                        className="w-full h-65 rounded-r object-cover pt-5"
                                    />
                        </article>
                    ))}
                </section>
            </section>
        </main>
    );
}

export default Project;