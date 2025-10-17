import React from "react";
import Card from "./Card";

const LoadMore = () => {
  const [limit, setLimit] = React.useState(30);
  const [products, setProducts] = React.useState([]);
  const canLoad = limit <= 100;

  React.useEffect(() => {
    const fetchRes = async () => {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&select=id,title,price,thumbnail`
      );
      const data = await res.json();
      setProducts(data.products);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    fetchRes();
  }, [limit]);

  return (
    <div className="px-6 py-4">
      <div
        className="
          grid
          gap-6
          justify-center
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
        "
      >
        {products.map((item, i) => (
          <Card product={item} key={i} />
        ))}
      </div>

      <div className="w-full py-8 flex items-center justify-center">
        <button
          className={`px-6 py-2 font-semibold text-white rounded-md transition-colors
            ${
              canLoad
                ? "bg-gray-700 hover:bg-gray-800"
                : "bg-gray-400 cursor-not-allowed"
            }
          `}
          disabled={!canLoad}
          onClick={() => setLimit((old) => old + 20)}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default LoadMore;
