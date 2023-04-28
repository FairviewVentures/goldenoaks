import { type NextPage } from "next";
import Head from "next/head";
import HeroBanner from "~/components/Hero/HeroBanner";
import Image from "next/image";
import HeroCommunity from "~/components/Hero/HeroCommunity";
import HeroFloorPlan from "~/components/Hero/HeroFloorPlan";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Golden Oaks Apartments</title>
      <meta name="description" content="Generated by create-t3-app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="page" aria-label="Main content">
      <HeroBanner />
      <Image
        src={"/hero_banner.jpg"}
        className="h-[600px] w-full object-cover"
        alt={"hero_banner"}
        width={1900}
        height={1080}
      />
      <HeroCommunity />
      <HeroFloorPlan />
      <div className="mx-auto my-32 flex w-full max-w-6xl flex-col items-center justify-center gap-4 bg-base p-4 md:flex-row">
        <div className="flex w-full flex-col gap-4  md:-translate-y-16">
          <h3 className="heading">Studios</h3>
          <p className="heading2">UP TO 500 SQ. FT.</p>
          <p className="font-serif text-lg text-base-content">
            South Pasadena living in the heart of it all…
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h3 className="heading">One Bedrooms</h3>
          <p className="heading2">UP TO 735 SQ. FT.</p>
          <p className="font-serif text-lg text-base-content">
            Renovated, serene interiors & a community brimming with amenities…
          </p>
        </div>
        <div className="flex w-full flex-col gap-4 md:translate-y-16">
          <h3 className="heading">Two Bedrooms</h3>
          <p className="heading2">UP TO 906 SQ. FT.</p>
          <p className="font-serif text-lg text-base-content">
            Among the most popular South Pasadena apartments for families…
          </p>
        </div>
      </div>
    </main>
  </>
);

export default Home;
