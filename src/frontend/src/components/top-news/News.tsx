import React from "react";
import NewFC from "../news/New.tsx";
import Ind from "../../getId.ts";
import { News } from "../../interfaces/news.ts";
import { Arr } from "../../interfaces/arr.ts";


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

  )
}
