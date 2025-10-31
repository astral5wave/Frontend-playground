import React from "react";

const ScrollIndicator = () => {
  const [itemData, setItemData] = React.useState([]);
  const [scrollPercentage, setScrollPercentage] = React.useState(0);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=200&select=title"
        );
        const data = await response.json();
        setItemData(data.products);
      } catch (e) {
        setItemData([]);
      }
    };
    fetchData();
  }, []);
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.body.scrollHeight - window.innerHeight;
      const percentage = (window.scrollY / scrollableHeight) * 100;
      setScrollPercentage(percentage);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full h-2 bg-red-300 fixed top-0">
        <div
          className="h-2 bg-red-800 fixed top-0"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>

      <div className="w-full flex flex-col items-center gap-4">
        {itemData.flatMap((item, i) => (
          <span className="text-lg" key={i}>
            {item.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
