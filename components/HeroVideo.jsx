'use client';

import { useRef } from 'react';

const videos = [
  '/assets/videos/hero-video.mp4',
  '/assets/videos/7252806-hd_1920_1080_25fps.mp4',
];

export default function HeroVideo() {
  const indexRef = useRef(0);
  const videoRef = useRef(null);

  const handleEnded = () => {
    indexRef.current = (indexRef.current + 1) % videos.length;
    const v = videoRef.current;
    if (v) {
      v.src = videos[indexRef.current];
      v.load();
      v.play();
    }
  };

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      onEnded={handleEnded}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover brightness-75"
    >
      <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
    </video>
  );
}
