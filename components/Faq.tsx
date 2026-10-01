import { FAQ_ITEMS } from "@/lib/faq";

/**
 * Native <details>/<summary> accordion: keyboard-operable and screen-reader
 * friendly with no JavaScript, and the answers stay in the DOM so crawlers
 * index them.
 */
export default function Faq() {
  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="shell">
        <div className="section-head">
          <div className="rule">
            <span className="eyebrow">Questions</span>
          </div>
          <h2 id="faq-heading">Common questions about YEM Chain</h2>
          <p>
            The short answers to what the network is, how to verify a transfer
            and where to spend or trade YEM coin.
          </p>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-marker" aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
