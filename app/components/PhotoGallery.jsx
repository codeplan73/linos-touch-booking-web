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
    <section className="bg-blur-50 p-4">
      <div className="container mx-auto">
        {images.length === 1 ? (
          <Item
            original={images[0]}
            thumbnail={images[0]}
            width="1000"
            height="600"
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src={images[0]}
                alt=""
                className="object-cover h-[400px] mx-auto rounded-xl"
                width={1800}
                height={400}
                priority={true}
              />
            )}
          </Item>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <Item
                key={image.link}
                original={image.image}
                thumbnail={image.link}
                width="1000"
                height="600"
                className="max-w-sm"
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
        )}
      </div>
    </section>
  </Gallery>
);

export default PhotoGallery;
