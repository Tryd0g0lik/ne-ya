import React from "react";
import { Arr } from "../../interfaces/arr.ts";
import { News } from "../../interfaces/news.ts";
import HeaderFC from "../headers/Header.tsx";
import Ind from "../../getId.ts";

/**
 * Подвал различных ссылок.
 * @param `arr`: [{title:"....."}] 
 * @returns 
 */
export default function BlockFC({ arr }: Arr): React.JSX.Element {
  const ind = new Ind();
  return (
    <>
      <div className="flex flex-row w-[54.68rem]">{
        arr.map(({ title }: News) => (
          <div key={ind.indAdd()} className="w-[14.875rem]">
            <HeaderFC str={title} />
          </div>
        ))
      }</div>
    </>
  )
}
