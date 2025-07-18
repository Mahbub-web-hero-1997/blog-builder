import React, { useEffect, useState } from "react";

// Components for section types
const Banner = ({ section }) => (
  <div
    className="
      w-full
      py-20
      text-center
      bg-cover bg-center
      relative overflow-hidden
      shadow-lg
      group
    "
    style={{
      backgroundImage: `url(${section.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "transform 0.5s ease",
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition duration-500"></div>

    <h1
      className="
        relative
        z-10
        text-4xl md:text-5xl
        font-extrabold
        text-white
        drop-shadow-lg
        animate-fade-in
        select-none
      "
      style={{
        textShadow: "0 0 10px rgba(34,197,94,0.9)", // neon green glow
        transition: "text-shadow 0.3s ease",
      }}
    >
      {section.text}
    </h1>
  </div>
);

const Card = ({ section, primaryColor }) => (
  <div
    className="
      p-6
      bg-white
      rounded-2xl
      shadow-xl
      hover:shadow-2xl
      transition
      duration-300
      transform
      hover:-translate-y-1
      hover:scale-[1.03]
      border border-gray-100
      cursor-pointer
    "
    style={{
      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
      borderRadius: "12px",
    }}
  >
    <h2 className="text-2xl font-bold mb-2" style={{ color: primaryColor }}>
      {section.title}
    </h2>
    <p className="text-gray-700 leading-relaxed">{section.content}</p>
  </div>
);

const componentMap = {
  banner: Banner,
  card: Card,
};

const SectionRenderer = ({ section, styleConfig }) => {
  const Component = componentMap[section.type];
  if (!Component) return null;
  return (
    <Component section={section} primaryColor={styleConfig.primaryColor} />
  );
};

const App = () => {
  const [layoutData, setLayoutData] = useState(null);

  useEffect(() => {
    fetch("/layout.json")
      .then((res) => res.json())
      .then((data) => {
        // data is array, get first layout object
        if (Array.isArray(data) && data.length > 0) {
          setLayoutData(data[0]);
        } else {
          console.error("Layout JSON array is empty or invalid");
        }
      })
      .catch((err) => console.error("Failed to load layout.json:", err));
  }, []);

  if (!layoutData?.layoutConfig || !layoutData?.styleConfig) {
    return (
      <div className="text-center mt-10 text-gray-500">Loading layout...</div>
    );
  }

  const { layoutConfig, styleConfig } = layoutData;

  const containerStyle = {
    display: layoutConfig.layoutType === "grid" ? "grid" : "flex",
    gridTemplateColumns: `repeat(${layoutConfig.columns}, minmax(0, 1fr))`,
    gap: layoutConfig.gap,
    justifyContent: layoutConfig.justify,
    alignItems: layoutConfig.items,
    padding: layoutConfig.padding,
    margin: layoutConfig.margin,
    background: layoutConfig.background,
    fontSize: styleConfig.fontSize,
    fontFamily: styleConfig.fontFamily,
    color: styleConfig.textColor,
    minHeight: "100vh",
  };

  return (
    <div style={{ background: layoutConfig.background, minHeight: "100vh" }}>
      <main style={containerStyle} className="p-6 max-w-7xl mx-auto">
        {layoutConfig.sections.map((section, index) => (
          <SectionRenderer
            key={index}
            section={section}
            styleConfig={styleConfig}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
