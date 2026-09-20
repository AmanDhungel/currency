import NoteCard from "@/components/NoteCard";
import PromoBanner from "@/components/PromoBanner";
import Rosette from "@/components/Rosette";
import { ECOSYSTEM_LINKS } from "@/lib/links";

const MICROTEXT = "YEM ECOSYSTEM · SECURE · VERIFIABLE · ON CHAIN · ";

const FACTS = [
  { label: "Network", value: "YEM Chain" },
  { label: "Explorer", value: "Real time" },
  { label: "Settlement", value: "On chain" },
  { label: "Large volume", value: "OTC desk" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Rosette className="hero-rosette" />

        <div className="shell">
          <span className="hero-badge">
            <i aria-hidden="true" />
            <span>One ecosystem · Five destinations</span>
          </span>

          <h1>
            The YEM Ecosystem
            <em>In One Place</em>
          </h1>

          <p>
            The chain that settles it, the explorer that proves it, the foundation
            that plans it, the rail that pays with it and the desk that trades it.
            Pick a note below and go straight there.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://yemchain.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore YEM Chain
              <svg
                width="14"
                height="14"
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
            </a>
            <a className="btn btn-ghost" href="#ecosystem">
              View all links
            </a>
          </div>

          <div className="hero-strip">
            <span className="microtext" aria-hidden="true">
              {MICROTEXT.repeat(8)}
            </span>
          </div>
        </div>
      </section>

      <section className="section" id="ecosystem">
        <div className="shell">
          <div className="section-head">
            <div className="rule">
              <span className="eyebrow">The Ecosystem</span>
            </div>
            <h2>Every destination, one landing</h2>
            <p>
              Each card opens an official YEM destination in a new tab. Nothing
              else, nothing in between.
            </p>
          </div>

          <div className="note-grid">
            {ECOSYSTEM_LINKS.map((link) => (
              <NoteCard key={link.id} link={link} />
            ))}
          </div>
        </div>
      </section>

      <PromoBanner />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <dl className="facts">
            {FACTS.map((fact) => (
              <div className="fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="rule" style={{ marginTop: 34 }}>
            <span className="rule-diamond" aria-hidden="true" />
          </div>
        </div>
      </section>
    </>
  );
}
