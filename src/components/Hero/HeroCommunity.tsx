import Link from "next/link";
import Image from "next/image";

const HeroCommunity = () => {
  return (
    <div className="relative mx-auto my-16 flex max-w-6xl flex-col md:flex-row">
      <div className="md:-translate-x-64">
        <Image
          src={"/hero_community.jpg"}
          alt={"herocommunity"}
          width={600}
          height={1000}
        />
      </div>
      <div className="flex h-2/3 flex-col gap-8 bg-light p-8 md:absolute md:translate-x-64 md:translate-y-32 md:p-16">
        <h2 className="text-3xl font-semibold text-secondary md:text-4xl">
          Community Awaits
        </h2>
        <p className="font-serif text-lg text-base-content">
          With a Walk Score of 91/100, Golden Oaks Apartments is perfectly
          situated in a prime part of the coveted city of South Pasadena, renown
          for some of Southern California&apos;s top-rated public schools. With
          close proximity to everything Los Angeles has to offer, yet regarded
          for being especially safe & family-oriented, South Pasadena is a
          desirable destination for all stages of life, and Golden Oaks
          Apartments is right in the center of it all. Dining, popular shops, a
          famed library, & a bustling farmer&apos;s market are mere steps from
          the property, along with the Metro Gold Line, which can take you far &
          wide…
        </p>
        <Link
          href="/neighborhood"
          className="h-max w-max rounded-full bg-base-accent px-8 py-4 text-lg font-bold text-light md:px-16 md:py-8"
        >
          Explore the Property
        </Link>
      </div>
    </div>
  );
};

export default HeroCommunity;
