import React from "react";

const SearchAutocomplete = () => {
  const [inputText, SetInputText] = React.useState("");
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (inputText.trim() === "") {
        setProducts([]);
        return;
      }
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${inputText}`
      );
      const data = await res.json();
      setProducts(data.products || []);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [inputText]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 p-6 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-slate-800 text-center">
          🔍 Product Search
        </h1>
        <div className="relative">
          <input
            type="text"
            value={inputText}
            onChange={(e) => SetInputText(e.target.value)}
            placeholder="Type to search products..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
          />
          <span className="absolute right-4 top-3.5 text-slate-400 text-lg">
            ⌕
          </span>
        </div>
        <div className="flex-1 overflow-y-auto mt-3 max-h-96 border-t border-slate-100 pt-3 scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent">
          {products.length > 0 ? (
            <ul className="space-y-2">
              {products.map((item, i) => (
                <li
                  key={i}
                  className="p-3 rounded-lg bg-slate-50 hover:bg-indigo-50 border border-slate-200 text-slate-700 font-medium transition-all cursor-pointer"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-slate-400 italic">
              {inputText
                ? "No products found."
                : "Start typing to search products..."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchAutocomplete;
