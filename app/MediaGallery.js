'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function MediaGallery({ project, coverImage }) {
  // Check what kind of media exists in the database for this specific project
  const hasVideo = project?.videoUrls && project.videoUrls.length > 0;
  const hasGallery = project?.galleryUrls && project.galleryUrls.length > 0;

  // State to handle the automated crossfading slideshow
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Only run the slideshow timer if we have a gallery and NO video
    if (hasGallery && !hasVideo && project.galleryUrls.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % project.galleryUrls.length);
      }, 3000); // Changes the image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [hasGallery, hasVideo, project]);

  // SCENARIO 1: We have a video. Auto-play it.
  if (hasVideo) {
    return (
      <video
        src={project.videoUrls[0]}
        autoPlay
        loop
        muted
        playsInline // Required for mobile auto-play
        className="absolute inset-0 w-full h-full object-cover"
      />
    );
  }

  // SCENARIO 2: We have a gallery of images. Crossfade them.
  if (hasGallery) {
    return (
      <>
        {project.galleryUrls.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt={`${project.title || 'Gallery Image'} - ${index + 1}`}
            width={1200}
            height={1200}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            priority={index === 0}
          />
        ))}
      </>
    );
  }

  // SCENARIO 3: Fallback to the standard cover image.
  if (coverImage) {
    return (
      <Image
        src={coverImage}
        alt={project?.title || "Portfolio Image"}
        width={1200}
        height={1200}
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />
    );
  }

  // Fallback if absolutely nothing was uploaded
  return (
    <div className="absolute inset-0 w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-400 text-sm font-mono">
      NO MEDIA FOUND
    </div>
  );
}