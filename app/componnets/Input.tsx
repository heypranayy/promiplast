import React from "react";

type InputType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface IProps extends InputType {}

export default function Input(props: IProps) {
  return (
    <div className={`border border-gray-300 px-2 py-1 ${props.className}`}>
      <input
        type="text"
        placeholder="Email"
        {...props}
        className={`outline-none text-sm w-full bg-transparent ${props.className} border-none`}
      />
    </div>
  );
}
