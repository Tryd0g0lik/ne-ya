import React from "react";
import { Header } from "../../interfaces/headers";

export default function HeaderFC({ str }: Header): React.JSX.Element {
  return <h2>{str}</h2>;
}
