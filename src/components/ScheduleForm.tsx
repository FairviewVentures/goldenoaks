import React from "react";

type Props = {
  label: string;
  name: string;
  type: string;
};

const InputField = (props: Props) => {
  return (
    <div className="flex w-full flex-col gap-2 font-serif text-base-content">
      <label>{props.label}</label>
      <input type={props.type || "text"} name={props.name} className="p-2" />
    </div>
  );
};

const ScheduleForm = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // send form
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <div className="flex w-full gap-2">
        <InputField label="First Name*" name="fname" type="text" />
        <InputField label="Last Name*" name="lname" type="text" />
      </div>
      <InputField label="Phone Number*" name="phone" type="number" />
      <InputField label="Email Address*" name="email" type="email" />
      <p className="font-serif text-base-content">
        Type of Unit You Are Interested In
      </p>
      <select className="flex flex-col gap-2 bg-light p-2 font-serif">
        <option
          value={"1bedroom"}
          className="font-serif text-sm text-base-content"
        >
          One Bedroom
        </option>
        <option
          value={"2bedroom"}
          className="font-serif text-sm text-base-content"
        >
          Two Bedroom
        </option>
        <option value={"any"} className="font-serif text-sm text-base-content">
          Any
        </option>
      </select>
      <InputField label="Date You'd Like to Visit" name="date" type="date" />
      <fieldset className="flex w-full flex-col gap-2 font-serif text-base-content">
        <label>Message</label>
        <textarea rows={5} name="message" />
      </fieldset>
      <button
        type="submit"
        className="w-max bg-base-content px-8 py-2 text-sm text-light"
      >
        Submit
      </button>
    </form>
  );
};

export default ScheduleForm;
