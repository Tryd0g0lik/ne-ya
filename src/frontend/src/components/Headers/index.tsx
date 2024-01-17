import React from "react";
import { type Header } from "../../interfaces/headers.ts";

/**
 * This's header. It's a <h2> tag.
 * @param str : string.
 * @returns React.JSX.Element
 */
export default function HeaderFC({ str }: Header): React.JSX.Element {
  return <h2>{str}</h2>;
}
