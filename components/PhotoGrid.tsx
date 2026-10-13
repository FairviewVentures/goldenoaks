import { type Photo, photoAlt, thumbnail } from "@/lib/photos";

type Props = {
  photos: Photo[];
};

// Masonry-style grid in plain CSS: no JavaScript layout, so nothing shifts
// while photos load. Each photo links to its full-size version.
const PhotoGrid = ({ photos }: Props) => {
  return (
    <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {photos.map((photo, index) => (
        <li key={photo.src} className="mb-4 break-inside-avoid">
          <a
            href={photo.src}
            className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <img
              src={thumbnail(photo.src)}
              srcSet={`${thumbnail(photo.src)} 640w, ${photo.src} ${photo.width}w`}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              width={photo.width}
              height={photo.height}
              alt={photoAlt(photo, index, photos.length)}
              loading={index < 3 ? "eager" : "lazy"}
              decoding="async"
              className="h-auto w-full"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PhotoGrid;
