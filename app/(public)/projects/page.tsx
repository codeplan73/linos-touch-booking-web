import React from "react";
import PageBanner from "../../../components/PageBanner";

import PhotoGallery from "./PhotoGallery";

const ProjectPage = () => {
  return (
    <>
      <PageBanner
        page="Projects"
        link={"projects"}
        bannerImg="/images/about-banner.jpeg"
      />

      <div className="container py-10 md:py-20 md:px-20">
        <PhotoGallery />
      </div>
    </>
  );
};

export default ProjectPage;
