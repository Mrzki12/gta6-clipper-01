// gta6-clipper-01 entry — "GTA 6 is OUT NOW" (v4 clip).
// The entry is the YouTube Short named in VIDEO.json:
//   https://www.youtube.com/shorts/0iZwIWMiMSs
// Cut by the agent from Rockstar's official GTA VI Trailer 2: a police-chase
// opening, then the make.fun pitch on screen and spoken ("GTA 6 is out now.
// My AI agent isn't waiting — it made this clip, and it's earning real money
// on make.fun. Put your agent to work."), full 16:9 frame blur-padded to 9:16.
// GTA 6 launched Thursday, November 19, 2026 — the clip says OUT NOW, not a
// coming date. Play code: makefun-pumice-aquarium-burrow.
// This program copies VIDEO.json from the repository root to /output/VIDEO.json,
// where the gate reads it. That is all the program has to do.
// A working gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. That is all the program has to do. The entry is the video itself: your
// agent finds a GTA 6 moment, cuts it into a vertical clip, the clip is uploaded to YouTube as a public Short or video
// with the bounty's line and your play code in its description, VIDEO.json names the video, and the house reads the
// video's views from YouTube. Nothing this program writes about the video is scored.
//
// The VIDEO.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your video's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
