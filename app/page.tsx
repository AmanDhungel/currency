import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import NoteCard from "@/components/NoteCard";
import PromoBanner from "@/components/PromoBanner";
import Rosette from "@/components/Rosette";
import VideoSection from "@/components/VideoSection";
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
      <JsonLd />

      <section className="hero" aria-labelledby="hero-heading">
        <Rosette className="hero-rosette" />

        <div className="shell">
          <span className="hero-badge">
            <i aria-hidden="true" />
            <span>One ecosystem · Five destinations</span>
          </span>

          <h1 id="hero-heading">
            YEM Chain
            <em>The Yemchain Digital Currency Ecosystem</em>
          </h1>

          <p>
            YEM Chain is a blockchain digital currency ecosystem built around YEM
            coin. Move value across the network, confirm every transfer through
            on-chain verification on YEM Scan, spend at checkout with YEM Pay,
            and trade larger amounts through the OTC desk. Five destinations,
            one secure starting point.
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

      <VideoSection />

      <section
        className="section"
        id="ecosystem"
        aria-labelledby="ecosystem-heading"
      >
        <div className="shell">
          <div className="section-head">
            <div className="rule">
              <span className="eyebrow">The Ecosystem</span>
            </div>
            <h2 id="ecosystem-heading">Every destination, one landing</h2>
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

      <Faq />

      <PromoBanner />

      <section className="section" style={{ paddingTop: 0 }} aria-label="YEM ecosystem at a glance">
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
