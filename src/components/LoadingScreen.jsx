import { useEffect, useState } from "react";

function LoadingScreen() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setProgress((prev) => {

        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 1;
      });

    }, 100);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">

      <div className="border-2 border-[#22e48b] p-8 w-[500px] bg-black shadow-[0_0_40px_rgba(34,228,139,0.4)]">

        <p className="text-[#22e48b] text-4xl mb-8 font-mono">
          Accessing Secure Network...
        </p>

        {/* BAR */}
        <div className="w-full h-10 border-2 border-[#22e48b] p-1 overflow-hidden">

          <div
            className="h-full bg-[#22e48b] transition-all duration-100"
            style={{
              width: `${progress}%`,
            }}
          ></div>

        </div>

        <p className="text-[#22e48b] text-right mt-4 text-2xl font-mono">
          {progress}%
        </p>

      </div>
    </div>
  );
}

export default LoadingScreen;