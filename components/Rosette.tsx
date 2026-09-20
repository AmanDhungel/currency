/**
 * Decorative guilloche rosette used as the hero watermark.
 * Purely ornamental — hidden from assistive technology.
 */
export default function Rosette({ className }: { className?: string }) {
  const rings = [40, 62, 84, 106, 128, 150, 172, 194];

  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="var(--green)" strokeWidth="0.7" opacity="0.5">
        {rings.map((r) => (
          <circle key={r} cx="200" cy="200" r={r} />
        ))}
      </g>

      <g stroke="var(--gold)" strokeWidth="0.6" opacity="0.45">
        {Array.from({ length: 36 }, (_, i) => {
          const angle = (i * 360) / 36;
          return (
            <ellipse
              key={angle}
              cx="200"
              cy="200"
              rx="196"
              ry="74"
              transform={`rotate(${angle} 200 200)`}
            />
          );
        })}
      </g>

      <circle cx="200" cy="200" r="34" fill="var(--paper)" opacity="0.75" />
      <circle cx="200" cy="200" r="34" stroke="var(--green)" strokeWidth="1.2" opacity="0.6" />
      <text
        x="200"
        y="200"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--serif)"
        fontSize="30"
        fontWeight="700"
        fill="var(--green)"
        opacity="0.7"
      >
        YEM
      </text>
    </svg>
  );
}
