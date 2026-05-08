// One-shot script: compresses public/hero-bg.mp4 down to a web-friendly size
// using the ffmpeg binary bundled by the `ffmpeg-static` npm package — no
// system-level ffmpeg install required.
//
// Run with:   node scripts/compress-hero.mjs
//
// Default target: ~3-5 MB at 1280px wide, CRF 30 (visually identical at the
// 0.45 opacity we use behind the tint overlay). Tweak CRF in the args below.

import { spawnSync } from "node:child_process";
import { statSync, renameSync, existsSync, unlinkSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

import ffmpegPath from "ffmpeg-static";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const input = resolve(root, "public/hero-bg.mp4");
const output = resolve(root, "public/hero-bg-new.mp4");
const backup = resolve(root, "public/hero-bg-original.mp4");

if (!existsSync(input)) {
  console.error(`✗ Not found: ${input}`);
  process.exit(1);
}

const beforeMB = (statSync(input).size / 1024 / 1024).toFixed(2);
console.log(`Source : ${input}`);
console.log(`Size   : ${beforeMB} MB`);
console.log(`ffmpeg : ${ffmpegPath}`);
console.log("Compressing… (slow preset, ~30-90s for a 30MB source)\n");

const args = [
  "-y",
  "-i", input,
  "-c:v", "libx264",
  "-preset", "slow",
  "-crf", "30",
  "-vf", "scale='min(1280,iw)':-2",
  "-an",
  "-movflags", "+faststart",
  "-pix_fmt", "yuv420p",
  output,
];

const r = spawnSync(ffmpegPath, args, { stdio: "inherit" });
if (r.status !== 0) {
  console.error("\n✗ ffmpeg exited with code", r.status);
  process.exit(r.status ?? 1);
}

const afterMB = (statSync(output).size / 1024 / 1024).toFixed(2);
console.log(`\n✓ Compressed: ${beforeMB} MB → ${afterMB} MB`);

// Replace original with compressed; keep a one-time backup of the source
if (existsSync(backup)) unlinkSync(backup);
renameSync(input, backup);
renameSync(output, input);

console.log(`✓ Wrote     : public/hero-bg.mp4`);
console.log(`  Backup    : public/hero-bg-original.mp4 (delete once you've eyeballed the result)`);
