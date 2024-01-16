import React from "react";
import TrendsFC from "./components/trends/Trends.tsx";
import { trends } from "./data/trend.ts";
import NewsFC from "./components/top-news/News.tsx";
import { news } from "./data/topNews.ts";
import { corse } from "./data/courses.ts";
import { categories } from "./data/categoties.ts";
import FormFC from "./components/sercher/Search.tsx";
import BlockFC from "./components/blocks/Blocks.tsx";
import { footer } from "./data/footerBlock.ts";


/**
 * importing:  `React`, `TrendsFC`, `{ trends }`, `NewsFC`, `{ news }`
 * importing: `{ corse }`, `{ categories }`, `FormFC`, `BlockFC`, `{footer}`
 *
 *  Поисковик - лидер Российского рынка
 * @returns React.JSX.Element 
 */
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
        <div className="ya-categories">
          <TrendsFC titles={categories} />
        </div>
        <div className="ya-search">
          <div className="HeaderDesktopForm">
            <FormFC />
          </div>
          <span>Найдётся всё. Например,</span><span>Фаза луны сегодня</span>
        </div>
      </div>
      <footer className="pt-4">
        <BlockFC arr={footer} />
      </footer>
    </div>
  );
}
