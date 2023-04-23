import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  description: string;
  website: string;
};

const LocalBusiness = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <Link
        href={props.website && props.website.length > 0 ? props.website : ""}
        className="heading2 uppercase"
        style={{
          textDecoration: props.website.length > 0 ? "underline" : "",
        }}
      >
        {props.name}
      </Link>
      <p className="font-serif text-lg text-base-content">
        {props.description.replace("'", "&apos;")}
      </p>
    </div>
  );
};

export default LocalBusiness;
