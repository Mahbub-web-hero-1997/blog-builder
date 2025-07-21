import React from "react";
import useUIConfig from "../hook/useUIConfig";

const Blogs = () => {
  const [layoutData] = useUIConfig();
  const blogCardData = layoutData[0]?.blogCards;
  const layoutConfig = layoutData[0]?.layoutConfig;
  console.log(layoutConfig);

  if (!blogCardData) return null;
  const { layoutType, columnsClass, gapClass, paddingClass, background } =
    layoutConfig;
  console.log(layoutType, columnsClass, gapClass, paddingClass, background);

  const { cardStyle, titleStyle, descriptionStyle, cards = [] } = blogCardData;

  return (
    <div
      className={`${layoutType} ${columnsClass} ${gapClass} ${paddingClass}`}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          style={cardStyle}
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-[400px] object-cover rounded-t-lg"
          />
          <div className="p-4 space-y-2">
            <h3 style={titleStyle}>{card.title}</h3>
            <p style={descriptionStyle}>{card.description}</p>
            <a
              href={card.link}
              className="inline-block mt-2 text-blue-600 hover:underline font-medium"
            >
              Read More →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
