import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="flex w-full bg-base text-base-content">
      <div className="mx-auto my-16 flex max-w-6xl flex-col gap-8 p-4 md:flex-row md:items-center">
        <div className="flex flex-col gap-8">
          <h3 className="font-bold text-secondary">GOLDEN OAKS APARTMENTS:</h3>
          <h1 className="text-3xl font-bold text-primary md:text-5xl">
            Luxury living in South
            <br />
            Pasadena.
          </h1>
          <p>
            The pulse of a thriving community at your fingertips & elevated
            amenities abound.
          </p>
          <Link
            href="/rates-and-floorplans"
            className="w-max rounded-full bg-base-accent px-8 py-4 text-lg font-bold text-light"
          >
            View Current Availibility
          </Link>
        </div>
        <Link
          href="/gallery"
          className="h-max w-max rounded-full bg-base-accent px-8 py-4 text-lg font-bold text-light md:px-16 md:py-8"
        >
          Explore the Property
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
