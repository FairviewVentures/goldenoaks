import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

const galleryItems = [
  {
    original: "/gallery/10.jpg",
    thumbnail: "/gallery/10.jpg",
  },
  {
    original: "/gallery/11.jpg",
    thumbnail: "/gallery/11.jpg",
  },
  {
    original: "/gallery/12.jpg",
    thumbnail: "/gallery/12.jpg",
  },
  {
    original: "/gallery/13.jpg",
    thumbnail: "/gallery/13.jpg",
  },
  {
    original: "/gallery/14.jpg",
    thumbnail: "/gallery/14.jpg",
  },
  {
    original: "/gallery/15.jpg",
    thumbnail: "/gallery/15.jpg",
  },
];

const Gallery: NextPage = () => (
  <>
    <Head>
      <title>Gallery - Golden Oaks Apartments</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="page">
      <div className="mx-auto my-16 flex w-full max-w-6xl flex-col justify-between gap-4 p-4">
        <p className="heading2 mx-auto">
          golden oaks apartments in south pasadena, ca
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="flex w-full flex-col justify-between gap-2">
            <Image src={"/gallery/1.jpg"} alt="1" width={500} height={500} />
            <Image src={"/gallery/2.jpg"} alt="2" width={500} height={500} />
          </div>
          <div className="w-full">
            <Image src={"/gallery/3.jpg"} alt="3" width={500} height={500} />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <Image src={"/gallery/4.jpg"} alt="4" width={500} height={500} />
          <Image src={"/gallery/5.jpg"} alt="5" width={500} height={500} />
          <Image src={"/gallery/6.jpg"} alt="6" width={500} height={500} />
        </div>
        <div className="flex h-max w-full flex-col justify-evenly gap-4 md:flex-row">
          <Image src={"/gallery/7.jpg"} alt="7" width={500} height={500} />
          <Image src={"/gallery/8.jpg"} alt="8" width={500} height={500} />
        </div>
        <Image
          src={"/gallery/9.jpg"}
          alt="9"
          width={1000}
          height={1000}
          className="w-full"
        />
        <ImageGallery
          items={galleryItems}
          showFullscreenButton={false}
          showPlayButton={false}
        />
        <div className="flex h-max w-full flex-col gap-4 md:flex-row">
          <Image src={"/gallery/16.jpg"} alt="16" width={500} height={500} />
          <Image src={"/gallery/17.jpg"} alt="17" width={500} height={500} />
          <Image src={"/gallery/18.jpg"} alt="18" width={500} height={500} />
        </div>
        <Link href="/rates-and-floorplans" className="btn-md mx-auto">
          View Rates and Floorplans
        </Link>
        <h2 className="mx-auto font-serif text-2xl text-primary md:text-4xl">
          (626) 799-4164
        </h2>
      </div>
    </main>
  </>
);

export default Gallery;
