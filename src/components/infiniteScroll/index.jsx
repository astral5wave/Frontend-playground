import React from "react";
import Card from "./Card";

const InfiniteScroll = () => {
  const [limit, setLimit] = React.useState(30);
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    const fetchRes = async () => {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&select=id,title,price,thumbnail`
      );
      const data = await res.json();
      setProducts(data.products);
    };
    fetchRes();
  }, [limit]);
  React.useEffect(() => {
    const debounce=(cb,delay=100)=>{
      let timeOut;
      return ()=>{
        clearTimeout(timeOut);
        timeOut=setTimeout(()=>{
          cb();
        },delay);
      }
    }
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.scrollHeight - 5
      )
        setLimit((limit) => limit + 10);
      return;
    };
    const debounceHandleScroll=debounce(handleScroll);
    window.addEventListener("scroll",debounceHandleScroll);
    return () => window.removeEventListener("scroll",debounceHandleScroll);
  }, []);

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

      {/* <div className="w-full py-8 flex items-center justify-center">
        <button
          className={`px-6 py-2 font-semibold text-white rounded-md transition-colors bg-gray-700 hover:bg-gray-800`}
          onClick={() => setLimit((old) => old + 20)}
        >
          Load More
        </button>
      </div> */}
    </div>
  );
};

export default InfiniteScroll;
