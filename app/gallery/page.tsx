import type { Metadata } from "next";
import PhotoGrid from "@/components/PhotoGrid";
import { photos } from "@/config";

export const metadata: Metadata = {
  title: "Gallery",
};

const page = () => {
  return (
    <div className="mx-auto my-8 max-w-screen-xl px-4 md:px-16">
      <h1 className="heading mb-8">Gallery</h1>
      <PhotoGrid photos={photos} />
    </div>
  );
};

export default page;
