import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="flex w-full bg-base text-base-content">
      <div className="mx-auto my-16 flex max-w-6xl flex-col gap-8 p-4 md:flex-row md:items-center">
        <div className="flex flex-col gap-8">
          <span className="font-bold text-secondary">
            GOLDEN OAKS APARTMENTS:
          </span>
          <h1 className="text-3xl font-bold text-primary md:text-5xl">
            Luxury living in South
            <br />
            Pasadena.
          </h1>
          <p aria-label="The pulse of a thriving community at your fingertips & elevated amenities abound.">
            The pulse of a thriving community at your fingertips & elevated
            amenities abound.
          </p>
          <Link href="/rates-and-floorplans" className="btn-md">
            View Current Availibility
          </Link>
        </div>
        <Link href="/gallery" className="btn-lg">
          Explore the Property
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
