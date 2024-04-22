import { forwardRef } from "react";
import { PropTypes } from "prop-types";

const InputBox = forwardRef(function InputBox(
  { label, textarea, ...props },
  ref
) {
  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          className="w-full p-3 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 resize-none"
          {...props}
          ref={ref}
        ></textarea>
      ) : (
        <input
          className="w-full p-3 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          {...props}
          ref={ref}
        />
      )}
    </div>
  );
});

export default InputBox;

InputBox.propTypes = { label: PropTypes.string, textarea: PropTypes.bool };
