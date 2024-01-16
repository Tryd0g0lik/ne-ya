import React from "react";
import HeaderFC from "../headers/Header.tsx";
import Ind from "../../getId.ts";
interface Titles {
  titles: string[]
}

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
