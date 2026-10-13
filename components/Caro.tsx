"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";

type Props = {
  photos: {
    src: string;
    width: number;
    height: number;
  }[];
};

const SlidingCaro = (props: Props) => {
  const imgs = props.photos.map((item, index) => ({
    original: item.src,
    thumbnail: item.src,
    thumbnailHeight: 800,
    thumbnailClass: "thumbnail-aspect-16-9",
    thumbnailAlt: `Image ${index + 1}`,
    originalAlt: `Image ${index + 1}`,
  }));

  return <ImageGallery showPlayButton={false} autoPlay={true} items={imgs} />;
};

export default SlidingCaro;
