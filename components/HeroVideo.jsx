'use client';

export default function HeroVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover brightness-75"
    >
      <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
    </video>
  );
}

