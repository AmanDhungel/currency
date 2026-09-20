import type { EcosystemLink } from "@/lib/links";

export default function NoteCard({ link }: { link: EcosystemLink }) {
  return (
    <a
      className="note"
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.title} — ${link.tagline}. Opens ${link.domain} in a new tab.`}
    >
      <span className="note-serial" aria-hidden="true">
        {link.serial}
      </span>

      <div className="note-media">
        {/* Placeholder artwork — swap the file in /public/images/ and update
            `image` in lib/links.ts when your photos are ready. */}
        <img
          src={link.image}
          alt=""
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
        />
        <span className="note-denom" aria-hidden="true">
          {link.denomination}
        </span>
        <span className="note-tag">{link.tagline}</span>
      </div>

      <div className="note-body">
        <h3>{link.title}</h3>
        <p>{link.description}</p>
      </div>

      <div className="note-foot">
        <span className="note-domain">{link.domain}</span>
        <span className="note-cta">
          Visit
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </span>
      </div>
    </a>
  );
}
