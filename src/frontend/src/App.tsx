import React from "react";
import TrendsFC from "./components/trends/Trends.tsx";
import { trends } from "./data/trend.ts";
import NewsFC from "./components/top-news/News.tsx";
import { news } from "./data/topNews.ts";

export default function AppFC(): React.JSX.Element {
  return (
    <div className="pt-6 ">
      <TrendsFC titles={trends} />
      <NewsFC arr={news} />
    </div>
  );
}
