// ============================================================================
// IconEdge mark — geometry. Edit the numbers below; render updates live.
//
// Canvas is 200×200. Centre = (100, 100). Increase X → moves right.
// Increase Y → moves DOWN (SVG y-axis is flipped vs. math).
//
// Layout, top-down:
//   1. CHEVRONS — 4 dark V-shapes, one at each side of the mark.
//      Each path is "M <arm-tip-A> L <apex> L <arm-tip-B>".
//      The apex is the OUTER point. Arms extend INWARD.
//
//   2. BARS — 8 coral segments pointing toward the centre.
//      Each entry is [centre-X, centre-Y, rotation-degrees].
//      A rotation of 0 makes the bar horizontal; +45 tilts it
//      clockwise so its right end points down-and-right, etc.
//      The bar's long axis (its "tip") points toward the centre
//      AFTER the rotation is applied.
//
//   3. SIZES — bar length, bar thickness, chevron stroke width.
// ============================================================================

const CHEVRONS = {
  top: "M 80 40 L 100 20 L 120 40",
  right: "M 160 80 L 180 100 L 160 120",
  bottom: "M 120 160 L 100 180 L 80 160",
  left: "M 40 80 L 20 100 L 40 120",
};

const CHEVRON_THICKNESS = 20;

// [centre-X, centre-Y, rotation°] for each of the 8 coral bars.
// Order: top-left, top-right, right-top, right-bottom,
//        bottom-right, bottom-left, left-bottom, left-top.
const BARS: [number, number, number][] = [
  // top pair
  [76, 60, 45],
  [125, 60, 135],

  // right pair
  [140, 76, 135],
  [140, 125, -135],
  // bottom pair
  [124, 140, -135],
  [76, 140, -45],

  // left pair
  [60, 124, -45],
  [60, 76, 45],
];

const BAR_LENGTH = 35; // how far each bar extends along its long axis
const BAR_THICKNESS = 14; // perpendicular thickness of each bar
const BAR_RADIUS = 3; // corner radius of the bar's rounded rect

// ============================================================================
// Component — usually no need to edit below this line.
// ============================================================================

type Props = {
  size?: number;
  className?: string;
  light?: boolean;
  markClass?: string;
  fluid?: boolean; // when true, omit fixed width/height so CSS controls the size
};

export default function Logo({
  size = 26,
  className = "",
  light = false,
  markClass = "",
  fluid = false,
}: Props) {
  const dark = light ? "#FAFAF7" : "#1A1A24";
  const accent = "#FF5C39";
  const dims = fluid ? {} : { width: size, height: size };

  const halfLen = BAR_LENGTH / 2;
  const halfThick = BAR_THICKNESS / 2;

  return (
    <svg
      viewBox="0 0 200 200"
      {...dims}
      className={`iconedge-mark ${markClass} ${className}`.trim()}
      aria-label="IconEdge"
    >
      <g
        fill="none"
        stroke={dark}
        strokeWidth={CHEVRON_THICKNESS}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path className="piece p1" d={CHEVRONS.top} />
        <path className="piece p2" d={CHEVRONS.right} />
        <path className="piece p3" d={CHEVRONS.bottom} />
        <path className="piece p4" d={CHEVRONS.left} />
      </g>
      <g fill={accent}>
        {BARS.map(([cx, cy, rot], i) => (
          <g key={i} transform={`translate(${cx} ${cy}) rotate(${rot})`}>
            <rect
              className={`piece p${i + 5}`}
              x={-halfLen}
              y={-halfThick}
              width={BAR_LENGTH}
              height={BAR_THICKNESS}
              rx={BAR_RADIUS}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
