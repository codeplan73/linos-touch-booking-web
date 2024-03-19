import React from "react";
import Image from "next/image";
import ProjectCard from "./Projects/ProjectCard";
import { Link } from "lucide-react";

const Projects = () => {
  return (
    <div className="w-full md:max-w-7xl flex flex-col items-start justify-center gap-12">
      <div className="flex flex-col items-center justify-center gap-4 mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold">Our Recent projects</h2>
        <p className="text-md font-sans capitalize">
          have a look, we will make any place absolutely clean, neat
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard image="/images/project-1.jpeg" title="Deep Cleaning" />
        <ProjectCard image="/images/project-2.png" title="Bathroom Cleaning" />
        <ProjectCard image="/images/project-3.png" title="Deep Cleaning" />
        <ProjectCard image="/images/project-4.jpeg" title="Kitchen Cleaning" />
        <ProjectCard
          image="/images/project-5.png"
          title="Polishing and Buffering"
        />
        <ProjectCard image="/images/project-6.jpeg" title="Deep Cleaning" />
      </div>

      <Link href="/projects" className="text-right">
        {`See More >> `}
      </Link>
    </div>
  );
};

export default Projects;
