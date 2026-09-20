"use client";

/**
 * Root-level error boundary. Next.js renders this in place of the whole
 * document, so it must provide its own <html> and <body>, and it cannot rely
 * on the styles imported by the normal layout.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: 24,
          background: "#f5f1e3",
          color: "#0f1d16",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          textAlign: "center",
        }}
      >
        <main style={{ maxWidth: "46ch" }}>
          <div
            aria-hidden="true"
            style={{
              display: "grid",
              placeItems: "center",
              width: 52,
              height: 52,
              margin: "0 auto 20px",
              borderRadius: "50%",
              border: "2px solid #14543f",
              background: "#faf7ec",
              boxShadow: "inset 0 0 0 3px #f5f1e3, inset 0 0 0 4px rgba(20,84,63,0.4)",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 700,
              fontSize: 21,
              color: "#14543f",
            }}
          >
            Y
          </div>

          <h1
            style={{
              margin: 0,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 30,
              lineHeight: 1.2,
              color: "#0a2f23",
            }}
          >
            Something went wrong
          </h1>

          <p style={{ margin: "14px 0 0", fontSize: 15.5, color: "#3f4f45" }}>
            The page could not be loaded. Please try again.
          </p>

          {error.digest ? (
            <p
              style={{
                margin: "10px 0 0",
                fontFamily: "Consolas, Menlo, monospace",
                fontSize: 11.5,
                letterSpacing: "0.08em",
                color: "#7c8a80",
              }}
            >
              Reference: {error.digest}
            </p>
          ) : null}

          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 26,
              padding: "13px 24px",
              borderRadius: 4,
              border: "1px solid transparent",
              background: "linear-gradient(175deg, #1d6b4f, #0a2f23)",
              color: "#f7f4e8",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.03em",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
