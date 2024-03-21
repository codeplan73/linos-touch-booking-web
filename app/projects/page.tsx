import React from "react";
import PageBanner from "../components/PageBanner";
import "photoswipe/dist/photoswipe.css";
import PhotoGallery from "@/app/components/PhotoGallery";

const ProjectPage = () => {
  return (
    <>
      <PageBanner link="projects" page="Projects" />

      <div className="container py-10 md:py-20  md:px-20">
        <PhotoGallery />
      </div>
    </>
  );
};

export default ProjectPage;
