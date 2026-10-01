"use client";

import Image from "next/image";
import { useState } from "react";
import { OG_IMAGE, YOUTUBE } from "@/lib/seo";

/**
 * Click-to-load YouTube facade.
 *
 * A raw iframe pulls ~500KB of YouTube JavaScript on page load and tanks
 * Core Web Vitals, so nothing from youtube.com is requested until the
 * viewer presses play. Until then this is just a local image and a button.
 */
export default function YouTubeVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="video-frame">
      {playing ? (
        <iframe
          className="video-embed"
          src={`${YOUTUBE.embedUrl}?autoplay=1&rel=0&modestbranding=1`}
          title={YOUTUBE.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="lazy"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="video-facade"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${YOUTUBE.title}`}
        >
          <Image
            src={OG_IMAGE.path}
            alt=""
            fill
            sizes="(max-width: 860px) 100vw, 860px"
            className="video-thumb"
          />
          <span className="video-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.14-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z" />
            </svg>
          </span>
        </button>
      )}

      <noscript>
        <a
          className="video-noscript"
          href={YOUTUBE.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch &ldquo;{YOUTUBE.title}&rdquo; on YouTube
        </a>
      </noscript>
    </div>
  );
}
