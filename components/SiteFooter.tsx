import { ECOSYSTEM_LINKS, POWERED_BY } from "@/lib/links";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand" style={{ gap: 12 }}>
              <span className="seal" aria-hidden="true">
                Y
              </span>
              <span>
                <span className="brand-name">YEM</span>
                <span className="brand-sub">Ecosystem</span>
              </span>
            </span>
            <p>
              The network, the explorer, the roadmap, the payment rail and the OTC
              desk — every part of YEM, reachable from one page.
            </p>
          </div>

          <nav className="footer-links" aria-label="Ecosystem">
            {ECOSYSTEM_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} YEM Ecosystem. All rights reserved.</span>

          <span className="powered-by">
            Powered by
            <a href={POWERED_BY.href} target="_blank" rel="noopener noreferrer">
              {POWERED_BY.label}
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
              <span className="sr-only">(opens deswits.com in a new tab)</span>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
