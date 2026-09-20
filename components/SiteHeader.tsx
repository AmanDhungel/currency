import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="YEM Ecosystem — home">
          <span className="seal" aria-hidden="true">
            Y
          </span>
          <span>
            <span className="brand-name">YEM</span>
            <span className="brand-sub">Ecosystem</span>
          </span>
        </Link>

        <nav className="header-nav" aria-label="Primary">
          <a href="#ecosystem">Ecosystem</a>
          <a href="https://yemscan.com" target="_blank" rel="noopener noreferrer">
            Explorer
          </a>
          <a href="https://yem.foundation" target="_blank" rel="noopener noreferrer">
            Roadmap
          </a>
          <a
            className="btn btn-primary"
            href="https://yempay.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: "9px 18px" }}
          >
            YEM Pay
          </a>
        </nav>
      </div>
    </header>
  );
}
