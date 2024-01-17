import React from "react";

/**
 *
 * @returns React.JSX.Element It's form contains a input field.
 */
export default function FormFC(): React.JSX.Element {
  return (
    <>
      <form>
        <label id="form">
          <input name="form" className="" maxLength={400} role="combobox" />

        </label>
      </form>
    </>
  );
}
