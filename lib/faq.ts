/**
 * Single source for the FAQ. The visible accordion and the FAQPage JSON-LD
 * both render from this array, so the schema can never drift from the text
 * on the page — Google treats a mismatch as a structured data violation.
 *
 * Answers describe only what this site and the linked destinations already
 * state. Nothing here asserts prices, supply, consensus or partnerships.
 */
export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is YEM Chain (Yemchain)?",
    answer:
      "YEM Chain is the blockchain network at the centre of the YEM ecosystem. It carries YEM coin between wallets, and every transfer is written on chain where anyone can look it up and verify it.",
  },
  {
    question: "How is YEM different from bitcoin?",
    answer:
      "Both are blockchain-based digital currencies, but YEM runs on its own network rather than on Bitcoin's. That network comes with its own explorer for on-chain verification, its own payment gateway for spending, and its own OTC desk for larger trades.",
  },
  {
    question: "How do I check a YEM transaction?",
    answer:
      "Use YEM Scan, the YEM transaction explorer. You can search by transaction hash, block or wallet address and see the status of any transfer in real time.",
  },
  {
    question: "How can I pay with YEM?",
    answer:
      "YEM Pay is the payment side of the ecosystem. It handles sending, receiving and settling payments in YEM for both customers and merchants.",
  },
  {
    question: "How do I buy YEM coin in larger amounts?",
    answer:
      "Larger, over-the-counter trades go through the Digital Chain Center OTC desk, which handles high-volume transactions with settlement you can confirm on chain.",
  },
  {
    question: "Where can I see the roadmap?",
    answer:
      "The YEM Foundation publishes the roadmap, along with governance and milestone updates for the ecosystem.",
  },
];
