import { useEffect, useState } from "react";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Resolution Display */}
      {/* <div className="fixed top-0 left-0 z-50 w-full p-2 text-center text-white bg-black">
        현재 해상도: {windowSize.width} x {windowSize.height}
      </div> */}
    
      {/* Main Content Container */}
      <div className="flex min-h-screen pt-0"> {/* pt-12 to account for fixed header */}
        {/* Left Image */}
        <div className="w-1/4 p-0 bg-gray-200">
          <div className="w-full h-full">
            <img 
              src="/logo512.png"
              alt="Left decoration"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Center Content */}
        <div className="w-2/4 p-0 bg-white">
          <iframe
            src="https://daamdaam.co.kr"
            className="w-full h-full min-h-[800px]"
            title="Embedded Website"
          />
        </div>

        {/* Right Image */}
        <div className="w-1/4 p-0 bg-gray-200">
          <div className="w-full h-full">
            <img 
              src="/logo512.png"
              alt="Right decoration"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;