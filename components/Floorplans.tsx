"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { floorplans } from "@/config";

// Accessible tabs: arrow keys move between plans, only the selected tab is
// in the tab order (WAI-ARIA tabs pattern).
const Floorplans = () => {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number) => {
    const next = (index + floorplans.length) % floorplans.length;
    setSelected(next);
    tabs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const moves: Record<string, number> = {
      ArrowRight: selected + 1,
      ArrowLeft: selected - 1,
      Home: 0,
      End: floorplans.length - 1,
    };
    if (e.key in moves) {
      e.preventDefault();
      select(moves[e.key]);
    }
  };

  const plan = floorplans[selected];

  return (
    <div className="flex flex-col gap-4">
      <div
        role="tablist"
        aria-label="Floorplans"
        onKeyDown={onKeyDown}
        className="grid grid-cols-3 gap-2 px-4 sm:flex sm:items-center sm:justify-evenly"
      >
        {floorplans.map((item, index) => (
          <button
            key={item.id}
            ref={(el) => {
              tabs.current[index] = el;
            }}
            type="button"
            role="tab"
            id={`floorplan-tab-${item.id}`}
            aria-selected={index === selected}
            aria-controls="floorplan-panel"
            tabIndex={index === selected ? 0 : -1}
            onClick={() => select(index)}
            className={`border-b-2 px-2 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${index === selected ? "border-black font-semibold text-black" : "border-transparent text-gray-700 hover:text-black"}`}
          >
            Plan {item.id}
          </button>
        ))}
      </div>
      <span className="h-[1px] w-full bg-gray-500" />
      <div
        id="floorplan-panel"
        role="tabpanel"
        aria-labelledby={`floorplan-tab-${plan.id}`}
        className="mx-auto flex flex-col items-center gap-4"
      >
        {/* Source images are 198x236; shown slightly larger, at their real ratio. */}
        <Image
          src={plan.slug}
          alt={plan.alt}
          width={198}
          height={236}
          className="h-auto w-64"
        />
      </div>
    </div>
  );
};

export default Floorplans;
