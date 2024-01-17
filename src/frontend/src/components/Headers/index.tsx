import React from "react";
import { type Header } from "../../interfaces/headers.ts";

export default function HeaderFC({ str }: Header): React.JSX.Element {
  return <h2>{str}</h2>;
}
