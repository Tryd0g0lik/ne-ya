import React from "react";
interface News {
  icon: string
  title: string
  ref: string
}

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

