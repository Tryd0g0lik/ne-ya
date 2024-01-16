import React from "react";
import TrendsFC from "./components/trends/Trends.tsx";
import { trends } from "./data/trend.ts";
import NewsFC from "./components/top-news/News.tsx";
import { news } from "./data/topNews.ts";
import { corse } from "./data/courses.ts";

export default function AppFC(): React.JSX.Element {
  return (
    <div className="pt-6 ">
      <TrendsFC titles={trends} />
      <div className="top-news flex flex-col pt-5 w-full">
        <NewsFC arr={news} />
      </div>
      <div className="top-course flex-wrap pt-2 w-full">
        <NewsFC arr={corse} />
      </div>
      <div className="yandex">
        <div className="ya-categories"></div>
        <div className="ya-search"></div>
      </div>
    </div>
  );
}
