"use client";

import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

import { Gallery, Item } from "react-photoswipe-gallery";

const images = [
  { link: "/images/project-1.jpeg", image: "/images/project-1.jpeg" },
  { link: "/images/project-2.jpeg", image: "/images/project-2.png" },
  { link: "/images/project-3.jpeg", image: "/images/project-3.png" },
  { link: "/images/project-4.jpeg", image: "/images/project-4.jpeg" },
  { link: "/images/project-5.jpeg", image: "/images/project-5.png" },
  { link: "/images/project-6.jpeg", image: "/images/project-6.jpeg" },
];

const PhotoGallery = () => (
  <Gallery>
    <section className="bg-blur-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Item
            key={image.link}
            original={image.image}
            thumbnail={image.link}
            width="1024"
            height="768"
            caption="Foo"
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src={image.image}
                alt=""
                className="object-cover h-[400px] mx-auto rounded-xl"
                width={1800}
                height={400}
                priority={true}
              />
            )}
          </Item>
        ))}
      </div>
    </section>
  </Gallery>
);

export default PhotoGallery;
