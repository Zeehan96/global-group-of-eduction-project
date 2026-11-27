'use client';

export default function HeroVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover object-center brightness-95"
    >
      <source src="/assets/videos/video.mp4" type="video/mp4" />
    </video>
  );
}

