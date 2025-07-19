import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const layoutData = {
  layoutConfig: {
    padding: "2rem",
    gap: "1.5rem",
    background: "#f8fafc",
  },
  sections: [
    {
      type: "navbar",
      layoutType: "flex",
      justify: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      background: "#0f172a",
      logo: {
        text: "MySite",
        color: "#ffffff",
        fontSize: "1.5rem",
      },
      links: [
        { label: "Home", url: "/", color: "#ffffff" },
        { label: "Products", url: "/products", color: "#ffffff" },
        { label: "Contact", url: "/contact", color: "#ffffff" },
      ],
    },
    {
      type: "productCardSection",
      layoutType: "grid",
      columns: 3,
      gap: "2rem",
      padding: "2rem",
      background: "#ffffff",
      products: [
        {
          title: "Wireless Headphone",
          price: "$99",
          image:
            "https://www.startech.com.bd/image/cache/catalog/headphone/joyroom/jr-oh1/jr-oh1-01-500x500.webp",
          cta: {
            text: "Buy Now",
            url: "/products/1",
          },
        },
        {
          title: "Smart Watch",
          price: "$129",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_sBZYXWuJORnrZY-YR3cFd_toX_dZ2UUaJA&s",
          cta: {
            text: "Buy Now",
            url: "/products/2",
          },
        },
        {
          title: "Bluetooth Speaker",
          price: "$79",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtddyEz5ADKcFvpxoTXbGOJt85OybC1k9hqQ&s",
          cta: {
            text: "Buy Now",
            url: "/products/3",
          },
        },
      ],
    },
  ],
};

const Navbar = ({ config }) => (
  <nav
    style={{
      display: config.layoutType,
      justifyContent: config.justify,
      alignItems: config.alignItems,
      padding: config.padding,
      background: config.background,
    }}
    className="w-full sticky top-0 z-50"
  >
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
      <h1
        style={{
          color: config.logo.color,
          fontSize: config.logo.fontSize,
        }}
        className="font-extrabold tracking-wide select-none cursor-pointer hover:text-cyan-400 transition-colors duration-300"
      >
        {config.logo.text}
      </h1>

      <div className="flex gap-6 items-center flex-wrap">
        {config.links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            style={{ color: link.color }}
            className="hover:text-cyan-400 transition-colors duration-300 font-semibold"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

const Banner = ({ products, layoutConfig }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <section
      className="max-w-7xl mx-auto my-16 px-4 md:px-0"
      style={{
        padding: layoutConfig.padding,
        gap: layoutConfig.gap,
        background: layoutConfig.background,
      }}
    >
      <Slider {...settings}>
        {products.map((product, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center rounded-xl overflow-hidden"
            style={{
              background: layoutData.sections.find(
                (s) => s.type === "productCardSection"
              ).background,
              gap: layoutData.sections.find(
                (s) => s.type === "productCardSection"
              ).gap,
              padding: layoutData.sections.find(
                (s) => s.type === "productCardSection"
              ).padding,
              boxShadow: "0 4px 10px rgb(0 0 0 / 0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full md:w-1/2 object-contain p-6 rounded-l-xl"
              loading="lazy"
              style={{ borderRadius: "1rem 0 0 1rem" }}
            />
            <div className="p-8 md:w-1/2 space-y-6">
              <h2
                style={{ color: "#1e293b" }}
                className="text-4xl font-extrabold"
              >
                {product.title}
              </h2>
              <p
                style={{
                  color: "#475569",
                  fontWeight: "600",
                  fontSize: "1.5rem",
                }}
              >
                {product.price}
              </p>
              <a
                href={product.cta.url}
                style={{
                  backgroundColor: "#0ea5e9",
                  color: "#fff",
                  padding: "1rem 2rem",
                  borderRadius: "0.5rem",
                  fontWeight: "700",
                  display: "inline-block",
                  textDecoration: "none",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0284c7")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0ea5e9")
                }
              >
                {product.cta.text}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const ProductCardSection = ({ config }) => (
  <section
    style={{
      background: config.background,
      padding: config.padding,
      gap: config.gap,
    }}
    className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-20"
  >
    {config.products.map((product, i) => (
      <div
        key={i}
        className="border border-gray-300 rounded-xl shadow-sm p-6 flex flex-col items-center bg-white hover:shadow-md transition-shadow duration-300"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-6 rounded-lg"
          loading="lazy"
        />
        <h3
          style={{ color: "#1e293b" }}
          className="text-2xl font-semibold mb-3"
        >
          {product.title}
        </h3>
        <p
          style={{ color: "#475569", fontWeight: "600", fontSize: "1.25rem" }}
          className="mb-6"
        >
          {product.price}
        </p>
        <a
          href={product.cta.url}
          style={{
            backgroundColor: "#0ea5e9",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            fontWeight: "700",
            textDecoration: "none",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#0284c7")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#0ea5e9")
          }
        >
          {product.cta.text}
        </a>
      </div>
    ))}
  </section>
);

const App = () => {
  const navbarConfig = layoutData.sections.find(
    (section) => section.type === "navbar"
  );
  const productSection = layoutData.sections.find(
    (section) => section.type === "productCardSection"
  );

  return (
    <div
      className="min-h-screen"
      style={{
        padding: layoutData.layoutConfig.padding,
        background: layoutData.layoutConfig.background,
      }}
    >
      <Navbar config={navbarConfig} />
      <Banner
        products={productSection.products}
        layoutConfig={layoutData.layoutConfig}
      />
      {/* <ProductCardSection config={productSection} /> */}
    </div>
  );
};

export default App;
