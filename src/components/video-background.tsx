import React from 'react';

const VideoBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <video
        src="https://res.cloudinary.com/dj88p3xio/video/upload/v1755988879/background_gy5z5d.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div className="relative z-0">{children}</div>
    </div>
  );
};

export default VideoBackground;
