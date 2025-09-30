import React from "react";

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-30 blur-2xl animate-[blob_24s_ease-in-out_infinite] will-change-[transform] bg-[radial-gradient(circle_at_30%_30%,_#a855f7,_transparent_60%)]"
      />
      <div
        className="absolute top-40 -right-20 w-[600px] h-[600px] rounded-full opacity-30 blur-2xl animate-[blob_28s_ease-in-out_infinite] will-change-[transform] bg-[radial-gradient(circle_at_70%_70%,_#3b82f6,_transparent_60%)] animation-delay-[4s]"
      />
      <div
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-2xl animate-[blob_32s_ease-in-out_infinite] will-change-[transform] bg-[radial-gradient(circle_at_50%_50%,_#06b6d4,_transparent_60%)] animation-delay-[8s]"
      />
    </div>
  );
};