# gta6-clipper-01 — Clip README

## v4 (CURRENT — "OUT NOW" date fix, supersedes v3)

**File:** `gta6-clipper-01-clip-v4-outnow.mp4` (in this folder)
**Specs:** 720x1280 (9:16 vertical), H.264 High, yuv420p, AAC LC 48 kHz stereo, `+faststart` (moov at byte 36, before mdat — verified), **33.63 s**, 5.95 MB. Ready to upload as a YouTube Short. (v3 `gta6-clipper-01-clip-v3-blurpad.mp4`, 33.63 s, v2 `gta6-clipper-01-clip-v2.mp4`, 33.63 s, and v1 `gta6-clipper-01-clip.mp4`, 16.93 s, are kept in this folder for reference — do not upload v1, v2 or v3.)

**What changed in v4 (user caught the error):**
- **The date was WRONG.** v1/v2/v3 said "GTA 6 - MAY 26, 2026" / "GTA 6 drops May 26th" / "is COMING". That was the old date: GTA 6 was first delayed to May 26, 2026 (announced May 2, 2025), then delayed AGAIN on Nov 6, 2025 to November 19, 2026 — and **it LAUNCHED on Thursday, November 19, 2026** (PS5 + Xbox Series X|S), i.e. yesterday. It is OUT NOW, not "coming". Every "May 26, 2026" / "drops May 26th" / "is COMING" is now corrected to **"GTA 6 IS OUT NOW"**.
- **On-screen text (opening, 0–2.5 s, top blurred bar):** `GTA 6 IS OUT NOW` (fontsize 52, white, black border/box) + a smaller second line `NOV 19, 2026` (fontsize 32) — both verified legible at t=1.0 s, no overflow, fits cleanly. No "May 26" remains on screen anywhere.
- **Voiceover re-recorded (ElevenLabs Brian, eleven_v4, NEW file `voiceover_v4.mp3`, 9.84 s, starts at 2.0 s, trailer audio ducked to 35% underneath):** "GTA 6 is out now. My AI agent isn't waiting — it made this clip, and it's earning real money on make.fun. Put your agent to work." No "May 26th" remains in the audio. The old `voiceover.mp3` (v1/v2/v3) is kept as reference — v4 does NOT use it.
- **Everything else unchanged:** same blur-pad treatment (full 16:9 frame visible, no zoom, blurred dark bars top/bottom), same police-chase opening, same 14 shots in the same order, same ~33.6 s duration. The v4 render reuses `montage_v3_raw.mp4` (33.62 s) as its base — only the text and voiceover changed. Build script: `render_v4.sh` in this folder.

### v4 make.fun pitch (on screen AND spoken — both verified)

**On screen (burned-in, DejaVu Sans Bold, white with black border/box):**
- 0–2.5 s (top blurred bar): `GTA 6 IS OUT NOW` + `NOV 19, 2026` — verified legible at t=1.0 s
- 13–16 s (centre, two lines, on the central video): `MY AI AGENT` / `MADE THIS CLIP` — verified legible at t=14.0 s
- 30.6–33.6 s (end card): `make.fun` (huge, magenta #ff2e88, fontsize 100) + `YOUR AI AGENT CAN EARN TOO` (fontsize 36, fits — verified, no overflow) — verified at t=32.0 s

**Spoken (voiceover, ElevenLabs Brian, eleven_v4, 9.84 s, starts at 2.0 s, trailer audio ducked to 35% underneath):**
> "GTA 6 is out now. My AI agent isn't waiting — it made this clip, and it's earning real money on make.fun. Put your agent to work."

Audio verified: overall mean −23.5 dB / max −8.0 dB; voiceover window (2–12 s) mean −26.4 dB / max −9.3 dB (voiceover clearly audible over the ducked trailer music); audio runs the full 33.63 s. Voiceover file: `voiceover_v4.mp3` in this folder.

**v4 frame-check:** t=1.0 s (opening "GTA 6 IS OUT NOW" + "NOV 19, 2026", full frame visible, no zoom), t=14.0 s (middle text + full frame), t=20.0 s (full frame, helicopter/airboat, no text in this window), t=32.0 s (end card) — all verified. Blur-pad intact in every shot.

**v4 corrected YouTube title (copy-paste):**
```
GTA 6 is OUT NOW 🔥 My AI agent made this clip #Shorts
```

**v4 corrected YouTube description (copy-paste exactly):**
```
GTA 6 is out now — Vice City is back! My AI agent cut this clip from Rockstar's official GTA VI Trailer 2.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

makefun-pumice-aquarium-burrow

#GTA6 #GrandTheftAutoVI #ViceCity #Shorts #makefun
```
The required make.fun line and the play code are unchanged; only the "drops May 26, 2026" line is corrected to "is out now". No "May 26" remains in the title, description, on-screen text, or voiceover.

---

## v3 (superseded by v4 — kept for reference only)

**File:** `gta6-clipper-01-clip-v3-blurpad.mp4` (in this folder)
**Specs:** 720x1280 (9:16 vertical), H.264 High, yuv420p, AAC LC 48 kHz stereo, `+faststart` (moov before mdat, verified), **33.63 s**, 5.97 MB. Ready to upload as a YouTube Short. (v2 `gta6-clipper-01-clip-v2.mp4`, 33.63 s, and v1 `gta6-clipper-01-clip.mp4`, 16.93 s, are kept in this folder for reference — do not upload v1 or v2.)

**What changed in v3 (user feedback):**
- **Blur-pad, no zoom** — the user chose option 1: he did not like the zoomed-in centre-crop look of v1/v2. Every shot now shows the **full 16:9 trailer frame** (720x405, no crop, no zoom) centred in the 720x1280 frame, with the top and bottom bars filled by a blurred, darkened copy of the same footage (ffmpeg `boxblur=20:5`, brightness −0.18, saturation 0.75). The bars are clearly blurred (not a sharp mirror) and dark enough that the central video is the focus.
- **Same edit as v2** — the same 14 shots in the same order, same police-chase opening, same 33.63 s duration, same voiceover timing. Only the framing treatment changed.

### v3 shot table (same shots as v2, now blur-padded instead of centre-cropped)

| # | Time in clip | Trailer time | Shot |
|---|-------------|--------------|------|
| 1 | 0.0–1.7 s | 117.9–119.6 | Car exploding/flipping in flames, police vehicle with blue lights at left — THE HOOK |
| 2 | 1.7–6.2 s | 45.3–49.8 | Jason driving past a white police car, "POLICE" on the side |
| 3 | 6.2–8.7 s | 107.5–110.0 | Police detective, "POLICE" readable on his vest |
| 4 | 8.7–10.2 s | 121.0–122.5 | Pickup truck speeding away at night, red taillights, dust |
| 5 | 10.2–12.1 s | 141.8–143.7 | Jason on his motorcycle, small plane flying past |
| 6 | 12.1–15.9 s | 34.6–38.4 | Red/white pickup on the Vice City highway, road signs |
| 7 | 15.9–18.6 s | 63.5–66.2 | Lucia walking out of prison at golden hour |
| 8 | 18.6–20.5 s | 138.1–140.0 | Helicopter flying low over the swamp |
| 9 | 20.5–22.3 s | 140.0–141.8 | Jet ski racing across the water, skyline behind |
| 10 | 22.3–24.3 s | 147.3–149.3 | Speedboat racing across the water, sun glare |
| 11 | 24.3–25.4 s | 148.2–149.3 | Motorcycle at night on a city street |
| 12 | 25.4–27.1 s | 8.1–9.8 | Aerial of the stilt house on the beach |
| 13 | 27.1–30.6 s | 153.5–157.0 | Vice City skyline at sunset, palm tree |
| 14 | 30.6–33.6 s | — | End card (solid dark navy #0a0a14) |

### v3 make.fun pitch (on screen AND spoken — both verified)

**On screen (burned-in, DejaVu Sans Bold, white with black border/box):**
- 0–2.5 s (in the top blurred bar, y=190): `GTA 6 - MAY 26, 2026` — verified legible against the dark blur
- 13–16 s (centre, two lines, on the central video): `MY AI AGENT` / `MADE THIS CLIP` — verified legible with black boxes
- 30.6–33.6 s (end card): `make.fun` (huge, magenta #ff2e88, fontsize 100) + `YOUR AI AGENT CAN EARN TOO` (fontsize 36, fits — verified, no overflow)

**Spoken (voiceover, ElevenLabs Brian, eleven_v4, 10.56 s, starts at 2.0 s, trailer audio ducked to 35% underneath — reused from v1/v2):**
> "GTA 6 drops May 26th. My AI agent isn't waiting — it made this clip, and it's earning real money on make.fun. Put your agent to work."

Audio verified: overall mean −23.6 dB / max −8.0 dB; voiceover window (2–13 s) mean −26.4 dB / max −9.9 dB (voiceover clearly audible over the ducked trailer music); audio runs the full 33.63 s. Voiceover file: `voiceover.mp3` in this folder.

**v3 build notes:** Each of the 13 footage shots re-cut from the source trailer with a blur-pad filter (`split` → background `scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,boxblur=20:5,eq=brightness=-0.18:saturation=0.75` + foreground `scale=720:405`, overlaid centred). Segments `v3s00_explosion.mp4` … `v3s12_skyline.mp4` (script `build_v3_segments.sh`), concatenated with the reused `seg6_endcard.mp4` into `montage_v3_raw.mp4` (33.62 s), then text + voiceover mixed in one filter pass. Frame-checked at 1.0 s (top text + full frame), 5.0 s, 14.0 s (middle text + full frame), 20.0 s (full frame, helicopter/airboat), 32.0 s (end card) — full 16:9 frame visible in every shot, no zoom/crop, blurred bars top and bottom.

---

## v2 (superseded by v3 — kept for reference only)

**File:** `gta6-clipper-01-clip-v2.mp4` (in this folder)
**Specs:** 720x1280 (9:16 vertical), H.264 High, yuv420p, AAC LC 48 kHz stereo, `+faststart`, **33.63 s**, 10.37 MB. Ready to upload as a YouTube Short. (v1 `gta6-clipper-01-clip.mp4`, 16.93 s, is kept in this folder for reference — do not upload v1.)

**What changed in v2 (user feedback):**
- **Length is now 30+ seconds** (33.63 s) — the user said 16 s is not a rule and asked for "30 detik+".
- **Opens with a police chase** — the user asked for a police-chase opening ("Cari yg di kejar-kejar Polisi untuk scene awal udah bagus"). The clip now opens on a car exploding/flipping in flames with police lights (trailer 117.9–119.6 s), then a police car with flashing lights and "POLICE" on the side (45.3–49.8 s), a police detective with "POLICE" readable on his vest (107.5–110.0 s), and a night getaway truck (121.0–122.5 s).
- **More shots to reach 30+ s** (no filler — every shot earns its place): helicopter low over the swamp (138.1–140.0 s), jet ski with the skyline (140.0–141.8 s), night motorcycle (148.2–149.3 s), and an aerial of the stilt house (8.1–9.8 s), plus all five v1 shots.

### v2 shot table (all footage centre-cropped 16:9 → 9:16, framing verified frame-by-frame)

| # | Time in clip | Trailer time | Shot | Why |
|---|-------------|--------------|------|-----|
| 1 | 0.0–1.7 s | 117.9–119.6 | Car exploding/flipping in flames, police vehicle with blue lights at left | THE HOOK — a police-chase crash. Instantly reads "GTA". |
| 2 | 1.7–6.2 s | 45.3–49.8 | Jason driving past a white police car with flashing red/blue lights, "POLICE" on the side | The chase in progress — police car prominent by 47.8 s. |
| 3 | 6.2–8.7 s | 107.5–110.0 | Police detective, "POLICE" clearly readable on his vest (108.5 s) | The police, unmistakable. |
| 4 | 8.7–10.2 s | 121.0–122.5 | Pickup truck speeding away at night, red taillights, dust | The getaway. |
| 5 | 10.2–12.1 s | 141.8–143.7 | Jason on his motorcycle, small plane flying past, blue sky | v1 shot 1. |
| 6 | 12.1–15.9 s | 34.6–38.4 | Red/white pickup on the Vice City highway, green road signs ("North Port VC", "Downtown") | The most iconic Vice City image. |
| 7 | 15.9–18.6 s | 63.5–66.2 | Lucia walking out of prison at golden hour, close on her face | The emotional centre. |
| 8 | 18.6–20.5 s | 138.1–140.0 | Helicopter flying low over the swamp | NEW — action, scale. |
| 9 | 20.5–22.3 s | 140.0–141.8 | Jet ski racing across the water, skyline behind, helicopter in the sky | NEW — speed + the city. |
| 10 | 22.3–24.3 s | 147.3–149.3 | Speedboat racing across the water, sun glare | v1 shot 5. |
| 11 | 24.3–25.4 s | 148.2–149.3 | Motorcycle at night on a city street | NEW — night ride. |
| 12 | 25.4–27.1 s | 8.1–9.8 | Aerial of the stilt house on the beach, blue truck | NEW — Vice City establishing shot. |
| 13 | 27.1–30.6 s | 153.5–157.0 | Vice City skyline at sunset, palm tree, traffic below | The "wow" beauty shot. |
| 14 | 30.6–33.6 s | — | End card (solid dark navy #0a0a14) | Clean call-to-action card. |

### v2 make.fun pitch (on screen AND spoken — both verified)

**On screen (burned-in, DejaVu Sans Bold, white with black border/box):**
- 0–2.5 s (top): `GTA 6 - MAY 26, 2026`
- 13–16 s (centre, two lines): `MY AI AGENT` / `MADE THIS CLIP`
- 30.6–33.6 s (end card): `make.fun` (huge, magenta #ff2e88) + `YOUR AI AGENT CAN EARN TOO` (fontsize fixed to 36 so it fits — the first v2 render overflowed at 44)

**Spoken (voiceover, ElevenLabs Brian, eleven_v4, 10.56 s, starts at 2.0 s, trailer audio ducked to 35% underneath — reused from v1):**
> "GTA 6 drops May 26th. My AI agent isn't waiting — it made this clip, and it's earning real money on make.fun. Put your agent to work."

Audio verified: overall mean −15.1 dB / max 0.0 dB (the 0 dB peak is the source trailer's own loudest moment, present in the raw montage too — not introduced by the mix); voiceover window (2–13 s) mean −24.3 dB / max −2.0 dB (voiceover clearly audible over the ducked trailer music); audio runs the full 33.63 s. Voiceover file: `voiceover.mp3` in this folder.

**v2 build notes:** New segments cut with `crop=608:1080:656:0,scale=720:1280,fps=30` (same as v1); framing verified per segment. Montage assembled with the ffmpeg concat demuxer (33.62 s raw), then text + voiceover mixed in one filter pass. The end-card segment file (`seg6_endcard.mp4`) is a blank dark card — the make.fun text is burned in during the final render (same as v1). v2 file: `gta6-clipper-01-clip-v2.mp4`. Upload v2, not v1.

---

## v1 (superseded — kept for reference only)

**File:** `gta6-clipper-01-clip.mp4` (in this folder)
**Specs:** 720x1280 (9:16 vertical), H.264 High, yuv420p, AAC LC 48 kHz stereo, `+faststart`, 16.93 s, 5.48 MB, ~2.57 Mbps. Ready to upload as a YouTube Short.

## Source footage

**Official Rockstar Games "Grand Theft Auto VI Trailer 2"** (Trailer 2, released May 2026), downloaded from Rockstar's own YouTube channel:
`https://www.youtube.com/watch?v=VQRLujxTm3c` (video ID `VQRLujxTm3c`, 1920x1080, 2:47).
This is the footage the bounty explicitly allows ("Rockstar's Grand Theft Auto VI gameplay"). No re-uploaded or third-party footage was used. Source file kept locally as `gta6-trailer2-source.mp4` (NOT part of the submitted repo).

## The moment chosen and why

A fast montage of the trailer's five strongest, most iconic beats — chosen by watching the trailer frame by frame and checking each shot's vertical (9:16) centre-crop framing. The trailer cuts very fast, so each beat is a clean 2–4 s slice (scene boundaries verified with ffmpeg scene detection + frame maps). Deliberately avoided: a suggestive bedroom/dance shot (~146 s) and the wide "VI" logo cards (~158–164 s), which crop badly to vertical.

| # | Time in clip | Trailer time | Shot | Why |
|---|-------------|--------------|------|-----|
| 1 | 0.0–1.9 s | 141.8–143.7 | Jason on his motorcycle, small plane flying past, blue sky | The hook — a face, motion, sky. Instantly reads "GTA". |
| 2 | 1.9–5.7 s | 34.6–38.4 | Red/white pickup on the Vice City highway, green road signs ("North Port VC", "Downtown", "SW 9th Ave") | The most iconic Vice City image in the trailer. |
| 3 | 5.7–8.4 s | 63.5–66.2 | Lucia walking out of prison at golden hour, close on her face | The emotional centre — the game's heroine, warm light. |
| 4 | 8.4–11.9 s | 153.5–157.0 | Vice City skyline at sunset, palm tree, traffic below | The "wow" beauty shot; the city itself is the star. |
| 5 | 11.9–13.9 s | 147.3–149.3 | Speedboat racing across the water, sun glare | Pure action to close the montage. |
| 6 | 13.9–16.9 s | — | End card (solid dark navy #0a0a14) | Clean call-to-action card, no footage. |

All footage is centre-cropped 16:9 → 9:16 (no stretching, no blur-pad); framing was verified frame-by-frame for every segment.

## The make.fun pitch (on screen AND spoken)

**On screen (burned-in, DejaVu Sans Bold, white with black border/box):**
- 0–1.9 s (top): `GTA 6 - MAY 26, 2026`
- 8.4–11.9 s (centre, two lines): `MY AI AGENT` / `MADE THIS CLIP`
- 13.9–16.9 s (end card): `make.fun` (huge, magenta #ff2e88) + `YOUR AI AGENT CAN EARN TOO`

**Spoken (voiceover, ElevenLabs Brian, eleven_v4, 10.56 s, starts at 2.0 s, trailer audio ducked to 35% underneath):**
> "GTA 6 drops May 26th. My AI agent isn't waiting — it made this clip, and it's earning real money on make.fun. Put your agent to work."

Audio verified: overall mean −26.1 dB / max −8.6 dB; voiceover window (2–13 s) mean −26.2 dB / max −9.0 dB (voiceover clearly audible over the ducked trailer music); end card (14–17 s) near-silent (−91 dB) by design. Voiceover file: `voiceover.mp3` in this folder.

## Play code

**`makefun-pumice-aquarium-burrow`** (code n=0 of 4 for the @mrzki12 account, fetched via `GET /api/competitions/gta6-clipper-01/play-code?n=0` with the `x-api-key` header). Any one of the four codes passes; this is the one used.

## YouTube title (copy-paste) — CORRECTED v4 (supersedes the old "May 26, 2026" title)

```
GTA 6 is OUT NOW 🔥 My AI agent made this clip #Shorts
```

## YouTube description (copy-paste exactly) — CORRECTED v4

```
GTA 6 is out now — Vice City is back! My AI agent cut this clip from Rockstar's official GTA VI Trailer 2.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

makefun-pumice-aquarium-burrow

#GTA6 #GrandTheftAutoVI #ViceCity #Shorts #makefun
```

The description contains the REQUIRED line verbatim (`Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01`) and the play code on its own line. No "May 26" remains in the title or description.

## How to upload (for the user)

1. Upload **`gta6-clipper-01-clip-v4-outnow.mp4`** (v4, 33.63 s, blur-pad, "OUT NOW" — NOT the v1, v2 or v3 file) to your YouTube channel as a **public** Short (or video). Keep it public until results are out.
2. Use the CORRECTED v4 title and description above exactly (do not edit the required line or the play code). Do NOT use the old "May 26, 2026" title/description.
3. Copy the video's URL (e.g. `https://www.youtube.com/shorts/<id>`) and send it back to Muse.
4. Muse will put the URL into `VIDEO.json`, create the GitHub repo, run the kit check, and submit.

## Competition facts

- Slug: `gta6-clipper-01`, "Clip GTA 6 for the most YouTube views", $500 total, top 20 share (1st $100, 2nd $70, 3rd $50, 4th–10th $20, 11th–20th $14). Places go by YouTube views (most first), read through the YouTube Data API; final reading at the deadline.
- Deadline: **2026-11-23T01:00:00Z (Mon 23 Nov 2026 08:00 WIB)**. 230 submissions so far.
- Account: @mrzki12 (GitHub mrzki12 linked, wallet HdvvRCWtXLA8B9YneQCismtTiQVH9KJ5qMAU6Z8Yp1nN).
- Kit: `~/workspace/makefun/gta6-clipper-01-kit/gta6-clipper-01-kit/` (downloaded via `curl -sSL "https://make.fun/c/gta6-clipper-01/kit" | tar xz`).
- Entry dir: `~/workspace/makefun/gta6-clipper-01-entry/` — contains the clip, voiceover, main.ts, VIDEO.json (placeholder), README.md, LICENSE, this file, and working files (source trailer, segments, frames, montage). Only main.ts, VIDEO.json, README.md, LICENSE, the clip and this README belong in the submitted repo; the 34 MB source trailer and intermediate segment/montage files must NOT be committed.
- Views must be organic. The video stays public until results are out. The house reads views at most every 15 minutes while entries are open, and once more at the deadline.

## Status

**NOT submitted.** Waiting on the user to upload the **v4** clip (`gta6-clipper-01-clip-v4-outnow.mp4`, blur-pad, "OUT NOW") to YouTube and send back the video URL. Then: fill VIDEO.json, create the GitHub repo, kit check, submit.
