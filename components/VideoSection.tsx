import YouTubeVideo from "@/components/YouTubeVideo";
import { YOUTUBE } from "@/lib/seo";

/**
 * Server component wrapper. Only the facade below needs client JavaScript.
 */
export default function VideoSection() {
  return (
    <section className="section video-section" id="video" aria-labelledby="video-heading">
      <div className="shell">
        <div className="section-head">
          <div className="rule">
            <span className="eyebrow">Watch</span>
          </div>
          {/* TODO: confirm with owner — the heading asserts the video explains
              YEM Chain, but the thumbnail for M4GKcR6I4-A does not appear to
              show YEM or blockchain content. Confirm the video ID. */}
          <h2 id="video-heading">
            What is YEM Chain? The Yemchain digital currency explained
          </h2>
          <p>
            An introduction to the YEM Chain blockchain and the YEM coin that
            moves across it. Verify any transfer on YEM Scan, spend at checkout
            with YEM Pay, and see how secure blockchain transactions are
            confirmed on chain.
          </p>
        </div>

        <YouTubeVideo />

        <p className="video-caption">
          <a href={YOUTUBE.url} target="_blank" rel="noopener noreferrer">
            Watch on YouTube
          </a>
        </p>
      </div>
    </section>
  );
}
