import React from "react";
import HeaderFC from "../Headers/index.tsx";
import Ind from "../../getId.ts";
import { type Titles } from "../../interfaces/titles.ts";

/**
 *
 * @param titles This's the referensies
 * @returns React.JSX.Element
 */
export default function TrendsFC({ titles }: Titles): React.JSX.Element {
  const ind = new Ind();
  return (
    <div className="flex shrink-0 gap-x-4">
      {
        titles.map((item: string) => (
          <div key={ind.indAdd()}> <HeaderFC str={item} /></div>
        ))
      }
    </div>
  );
}
