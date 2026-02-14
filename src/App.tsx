import { useState } from "react";
import "./App.css";

function App() {
  const [idx, setIdx] = useState(0);
  const [size, setSize] = useState(50);
  const [isYesPressed, setIsYesPressed] = useState(false);
  const [isOkPressed, setIsOkPressed] = useState(false);
  const buttonTexts = [
    "no",
    "i miss you,mem",
    "i hope your doing well",
    "take care of yourself 🩺",
    "let's chika soon pls",
    "sorry for being MIA",
    "pinky promise dili nako mang-ghost👻",
    "coffee date, when? ",
    "can't wait to see you again",
    "i love you berry much🍓",
    "thank you for being my friend💞",
    "💐💞",
    "heartheartheart",
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 max-w-0">
        {!isYesPressed && (
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">
              happy hearts day, dearest mayzie 💐
            </h1>
            <h3>ily💞</h3>
          </div>
        )}
        {!isYesPressed && (
          <div className="flex gap-4 items-end">
            <a
              target="_blank"
              href="https://www.instagram.com/p/DUovrrtiUX0/?igsh=amR5amFoYXB2MXN2"
            >
              <button
                onClick={() => setIsYesPressed(true)}
                style={{ height: size, width: idx > 0 ? size : undefined }}
                className="bg-green-500! text-white px-4 py-2 rounded-md"
              >
                yes
              </button>
            </a>
            {idx < buttonTexts.length && (
              <button
                style={{ height: idx === 0 ? 50 : undefined }}
                onClick={() => {
                  setSize(size + 50);
                  setIdx(idx + 1);
                }}
                className="bg-red-500! text-white px-4 py-2 rounded-md"
              >
                {buttonTexts[idx]}
              </button>
            )}
          </div>
        )}
        {idx > buttonTexts.length && !isYesPressed && (
          <div className="w-screen">
            i hope your day is filled with happiness and so much love💞💫
          </div>
        )}
      </div>
      {isYesPressed && !isOkPressed && (
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col gap-4 text-xs">
            this is for you💐
          </div>
          <button
            onClick={() => setIsOkPressed(true)}
            className="bg-green-500! text-white px-4 py-2 rounded-md"
          >
            💗
          </button>
        </div>
      )}
      {isOkPressed && (
        <div className="flex flex-col items-center justify-center gap-16">
          <h1 className="flex flex-col gap-4 text-xs">
            happy hearts day, dearest mayzie💐
          </h1>
          <div className="flex flex-col gap-4 text-xs">
            always here, <br />
            cj ♥️
          </div>
        </div>
      )}
    </>
  );
}

export default App;
