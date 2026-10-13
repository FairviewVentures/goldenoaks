"use client";

import { useState } from "react";
import Image from "next/image";
import { floorplans } from "@/config";

const Floorplans = () => {
  const [selected, setSelected] = useState("A");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-evenly">
        {floorplans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => setSelected(plan.id)}
            className={`flex items-center justify-center ${selected === plan.id ? "text-black" : "text-gray-700"}`}
          >
            Plan {plan.id}
          </button>
        ))}
      </div>
      <span className="h-[1px] w-full bg-gray-500" />
      <div className="mx-auto">
        {floorplans
          .filter((plan) => plan.id === selected)
          .map((plan) => (
            <div key={plan.id} className="flex flex-col items-center gap-4">
              <Image src={plan.slug} alt={plan.alt} width={256} height={256} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Floorplans;
