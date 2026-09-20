import Link from "next/link";

/**
 * App-level 404. Renders inside the root layout, so the header, footer and
 * banknote theme come along with it.
 */
export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="shell">
        <div className="rule" style={{ marginBottom: 18 }}>
          <span className="eyebrow">Error 404</span>
        </div>

        <h1
          style={{
            margin: 0,
            fontFamily: "var(--serif)",
            fontWeight: 900,
            fontSize: "clamp(34px, 7vw, 62px)",
            lineHeight: 1.05,
            color: "var(--green-deep)",
          }}
        >
          This note is not in circulation
        </h1>

        <p
          style={{
            margin: "18px auto 0",
            maxWidth: "52ch",
            fontSize: 16,
            color: "var(--ink-soft)",
          }}
        >
          The page you asked for does not exist on this site. Everything the YEM
          ecosystem offers is one click away from the home page.
        </p>

        <div className="hero-actions">
          <Link className="btn btn-primary" href="/">
            Back to the landing page
          </Link>
          <Link className="btn btn-ghost" href="/#ecosystem">
            View all links
          </Link>
        </div>

        <div className="rule" style={{ marginTop: 40 }}>
          <span className="rule-diamond" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
