import React from "react";
import NewFC from "../New/index.tsx";
import Ind from "../../getId.ts";
import { type News } from "../../interfaces/news.ts";
import { type Arr } from "../../interfaces/arr.ts";

/**
 *
 * @param arr: Array. It's Headers
 * @returns React.JSX.Element "<li>.....</li>"
 */
export default function NewsFC({ arr }: Arr): React.JSX.Element {
  const ind = new Ind();
  return (

    <ul>
      {
        arr.map((item: News) => (
          <li key={ind.indAdd()} className="flex flex-row gap-2">

            <NewFC icon={item.icon} ref={item.ref} title={item.title} />
          </li>
        ))
      }
    </ul>
  );
}
