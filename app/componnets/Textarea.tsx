import React from "react";

type TextAreaType = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export default function Textarea(props : TextAreaType) {
  return (
    <div className={`border border-gray-300 px-2 py-1 ${props.className}`}>
      <textarea
        placeholder="Message"
        {...props}
        rows={4}
        className={`outline-none bg-transparent text-sm size-full ${props.className}`}
      ></textarea>
    </div>
  );
}
