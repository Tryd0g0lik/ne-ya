import React from "react";
import { type News } from "../../interfaces/news.ts";

export default function NewFC({ icon, title, ref }: News): React.JSX.Element {
  return (
    <>
      <div className="w-4 h-4 ">
        {icon}
      </div><div className="news-title">
        <a href={ref}>
          {title}
        </a></div>
    </>
  );
}
