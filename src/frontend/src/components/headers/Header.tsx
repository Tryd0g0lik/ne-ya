import React from "react";
interface Header { str: string }
export default function HeaderFC({ str }: Header): React.JSX.Element {
  return <h2>{str}</h2>;
}
