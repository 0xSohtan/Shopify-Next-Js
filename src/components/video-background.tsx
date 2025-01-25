import React from "react";
import { Bodoni_Moda } from 'next/font/google'


const bodoniModa = Bodoni_Moda ({
  subset: ['latin'],
  weight: ['400', '700'],
  variable: "--font-bodoniModa",
})

type Button = {
  label: string;
  onClick: () => void;
};

type VideoBackground = {
  title: string;
  description?: string;
  background: string; // URL des Hintergrundbilds oder Videos
  isVideo?: boolean; // Falls es sich um ein Video handelt
  buttons?: Button[]; // Bis zu 3 Buttons
};

const VideoBlock: React.FC<VideoBackground> = ({
  title,
  description,
  background,
  isVideo = false,
  buttons = [],
}) => {
  return (
    <div className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {isVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={background}
          autoPlay
          loop
          muted
        />
      ) : (
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={background}
          alt="Background"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Inhalt */}
      <div className="relative flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className={`${bodoniModa.className} text-3xl md:text-6xl font-bold`}>{title}</h1>
        {description && <p className="mt-4 text-lg md:text-xl">{description}</p>}

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {buttons.slice(0, 3).map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition"
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoBlock;
