import Link from "next/link";
import Image from "next/image";

const HeroFloorPlan = () => {
  return (
    <div className="flex flex-col text-lg md:flex-row">
      <div className="flex aspect-square flex-col justify-center gap-4 bg-secondary p-8 text-light md:p-16">
        <h3 className="text-3xl font-bold md:text-5xl">Floorplans</h3>
        <p className="font-serif">
          Luxury studio, one bedroom, & two bedroom apartment homes in South
          Pasadena that instantly feel like home.
        </p>
        <Link href="/rates-and-floorplans" className="font-serif italic">
          View Rates & Floorplans
        </Link>
      </div>
      <div className="flex aspect-square">
        <Image
          src={"/hero_floorplan.jpg"}
          alt="herofloorplan"
          className="object-cover"
          width={900}
          height={900}
        />
      </div>
    </div>
  );
};

export default HeroFloorPlan;
