import React from "react";
import NewFC from "../news/New.tsx";
import Ind from "../../getId.ts";

// import { news } from "../../data/topNews.ts";

interface TNews {

  icon: string,
  title: string,
  ref: string

}

type N = {
  arr: any[];
};

export default function NewsFC({ arr }: N): React.JSX.Element {
  const ind = new Ind();
  return (

      <ul>
        {
          arr.map((item: TNews) => (
            <li key={ind.indAdd()} className="flex flex-row gap-2">

              <NewFC icon={item.icon} ref={item.ref} title={item.title} />
            </li>
          ))
        }
      </ul>

  )
}
