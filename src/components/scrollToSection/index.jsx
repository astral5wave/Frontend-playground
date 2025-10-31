import React from "react";

const Index = () => {
  const handleSectionClick = (value) => {
    const section = document.getElementById(value);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800 font-sans">
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex flex-col items-center justify-center py-6 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Scroll to a Section
          </h1>
          <ul className="flex flex-wrap justify-center gap-4 text-lg font-medium text-gray-600">
           { [1,2,3,4,5].map((item,i)=>{
            return <li><button onClick={()=>handleSectionClick(`section${i+1}`)} className="cursor-pointer hover:text-indigo-600 transition-colors">{`Section ${i+1}`}</button></li>
           })}
          </ul>
        </div>
      </div>
      <div
        id="section1"
        className="h-screen flex items-center justify-center text-5xl font-semibold bg-red-400 text-white"
      >
        Section 1
      </div>
      <div
        id="section2"
        className="h-screen flex items-center justify-center text-5xl font-semibold bg-blue-400 text-white"
      >
        Section 2
      </div>
      <div
        id="section3"
        className="h-screen flex items-center justify-center text-5xl font-semibold bg-purple-400 text-white"
      >
        Section 3
      </div>
      <div
        id="section4"
        className="h-screen flex items-center justify-center text-5xl font-semibold bg-green-400 text-white"
      >
        Section 4
      </div>
      <div
        id="section5"
        className="h-screen flex items-center justify-center text-5xl font-semibold bg-yellow-400 text-white"
      >
        Section 5
      </div>
      <div className="h-24 flex items-center justify-center bg-pink-400 text-2xl font-bold text-white">
        Footer
      </div>
      <button
        onClick={() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight - window.innerHeight,
            behavior: "smooth",
          });
        }}
        className="px-5 py-3 bg-gray-800 text-white rounded-full text-lg font-semibold fixed top-6 right-6 shadow-lg hover:bg-gray-700 active:scale-95 transition-all z-20"
      >
        Bottom
      </button>
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="px-5 py-3 bg-gray-800 text-white rounded-full text-lg font-semibold fixed bottom-6 right-6 shadow-lg hover:bg-gray-700 active:scale-95 transition-all z-20"
      >
        Top
      </button>
    </div>
  );
};

export default Index;
