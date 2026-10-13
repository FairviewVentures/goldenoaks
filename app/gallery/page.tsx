import type { Metadata } from "next";
import { photos } from "@/config";
import React from "react";
import PhotoAlbum from "react-photo-album";

export const metadata: Metadata = {
  title: "Gallery",
};

const page = () => {
  return (
    <div className="mx-4 mt-32 md:mx-16">
      <PhotoAlbum photos={photos} layout="rows" />
    </div>
  );
};

export default page;
