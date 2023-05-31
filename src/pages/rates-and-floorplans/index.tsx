import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Rates & Floorplans - Golden Oaks Apartments</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="page" lang="en">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-4 p-4 md:flex-row">
        <div className="flex flex-col gap-4">
          <h3 className="heading2">GOLDEN OAKS APARTMENTS</h3>
          <span className="heading2 italic">(626) 799-4164</span>
          <h1 className="heading">
            South Pasadena <br />
            Luxury Apartments
          </h1>
          <p className="font-serif text-lg">
            The pulse of a thriving community at your fingertips and elevated
            amenities abound in a tranquil setting with renovated, contemporary
            interiors.
          </p>
        </div>
        <div className="flex w-full items-end justify-end">
          <Image
            src="/rates_banner.jpg"
            alt="ratesbanner"
            className="md:w-2/3"
            width={1600}
            height={900}
          />
        </div>
      </div>
      <Link href="/schedule" className="btn-md mx-auto">
        Schedule A Tour
      </Link>
      <div className="mx-auto my-16 flex w-full max-w-6xl flex-col justify-between gap-4 p-4 md:flex-row">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <h3 className="heading">Current Availibility</h3>
          <h3 className="font-serif text-base-content">
            If no listings show, please call us for future availability or check
            back soon.
          </h3>
          <span className="heading">(626) 799-4164</span>
        </div>
      </div>
      <div className="mx-auto my-16 flex w-full max-w-6xl flex-col justify-between gap-4 p-4">
        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="heading2">STUDIOS</h3>
            <span className="font-serif text-lg text-base-content">
              Studios at Golden Oaks offer the ultimate in privacy & updated
              interiors.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="heading2">ONE BEDROOMS: </h3>
            <span className="font-serif text-lg text-base-content">
              Golden Oaks one bedrooms boast spacious interiors ranging from 610
              - 735 sq. ft.
            </span>
          </div>
        </div>
        <div className="mx-auto flex w-1/2 flex-col items-center justify-center gap-4">
          <h3 className="heading2">TWO BEDROOMS </h3>
          <span className="font-serif text-lg text-base-content">
            Spanning from 778 - 906 sq. ft., two bedroom apartment homes at
            Golden Oaks are especially popular with families, or provide a
            fabulous home office space!
          </span>
        </div>
      </div>
    </main>
  </>
);

export default Home;
