import React from "react";
interface News {
  icon: string
  title: string
  ref: string
}

export default function NewFC({ icon, title, ref }: News): React.JSX.Element {
  return (
    <>
      <div>
        {icon}
      </div><div className="news-title">
        <a href={ref}>
          {title}
        </a></div>
    </>
  );
}
