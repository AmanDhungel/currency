"use client";

import { useEffect, useRef, useState } from "react";
import { PROMO } from "@/lib/links";

/**
 * Highlighted promotional band. Client component purely so the promo code
 * can be copied to the clipboard; everything still renders server-side and
 * reads correctly if JavaScript never runs.
 */
export default function PromoBanner() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copyCode() {
    try {
      // Unavailable on insecure origins and older browsers.
      if (!navigator.clipboard?.writeText) return;
      await navigator.clipboard.writeText(PROMO.code);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Copying is a convenience — the code stays visible either way.
      setCopied(false);
    }
  }

  return (
    <section className="section promo-section" id="offer">
      <div className="shell">
        <div className="promo">
          <span className="promo-corner promo-corner-tl" aria-hidden="true" />
          <span className="promo-corner promo-corner-br" aria-hidden="true" />

          <div className="promo-inner">
            <div className="promo-copy-col">
              <div className="rule promo-rule">
                <span className="eyebrow">{PROMO.eyebrow}</span>
              </div>
              <h2>{PROMO.headline}</h2>
              <p>{PROMO.description}</p>
            </div>

            <div className="promo-action-col">
              <span className="promo-label">Pro code</span>

              <div className="promo-code">
                <code>{PROMO.code}</code>
                <button
                  type="button"
                  onClick={copyCode}
                  className="promo-copy-btn"
                  aria-label={`Copy pro code ${PROMO.code}`}
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <a
                className="btn btn-primary promo-cta"
                href={PROMO.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {PROMO.cta}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
