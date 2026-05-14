---
name: youtube-transcript
description: Extract the full transcript from any YouTube URL. Use whenever the user pastes a YouTube link and asks for its transcript, captions, subtitles, summary, or to "read" / "watch for me" / "what does this video say". Triggers on URLs matching youtube.com/watch, youtu.be/, youtube.com/shorts/, m.youtube.com.
---

# YouTube transcript extractor

When the user shares a YouTube URL, pull the transcript in clean readable form. No timestamps unless asked.

## Dependency

`yt-dlp` must be installed locally. Check first:

```bash
which yt-dlp
```

If not installed, tell the user once:

> "Install it with `brew install yt-dlp` (Mac) or `pipx install yt-dlp` (Linux/Windows). Two-second install. After that I'll fetch transcripts automatically."

Then stop. Do not attempt other extraction methods — they are fragile.

## Workflow

Given a URL (call it `$URL`):

1. **Extract subtitles to a temp file.** Prefer manual English captions; fall back to auto-generated:

```bash
TMPDIR=$(mktemp -d)
yt-dlp --skip-download \
       --write-subs --write-auto-subs \
       --sub-langs "en.*,en" \
       --sub-format vtt \
       --convert-subs vtt \
       --no-warnings \
       -o "$TMPDIR/%(id)s.%(ext)s" \
       "$URL"
```

2. **Find the VTT file** (yt-dlp names it `<id>.<lang>.vtt`):

```bash
VTT=$(ls "$TMPDIR"/*.vtt 2>/dev/null | head -n 1)
```

3. **Strip VTT chrome.** WebVTT files contain timing lines like `00:00:01.000 --> 00:00:04.000` and tags like `<00:00:01.500>`. Clean them:

```bash
awk '
  /^WEBVTT/ { next }
  /^[Kk]ind:/ { next }
  /^[Ll]anguage:/ { next }
  /^[0-9][0-9]:[0-9][0-9]:[0-9][0-9]\.[0-9][0-9][0-9] -->/ { next }
  /^$/ { next }
  {
    gsub(/<[^>]*>/, "")
    gsub(/&nbsp;/, " ")
    gsub(/&amp;/, "\\&")
    print
  }
' "$VTT" | awk '!seen[$0]++' > "$TMPDIR/transcript.txt"
```

The second `awk` deduplicates — auto-captions repeat lines as new words appear.

4. **Return the cleaned transcript** to the user. Read with `cat "$TMPDIR/transcript.txt"`. If it is over 2000 lines, summarize the structure first ("transcript is ~12,000 words covering X / Y / Z — paste full or summarize?") and let the user choose.

5. **Clean up:**

```bash
rm -rf "$TMPDIR"
```

## Variants the user may ask for

| Request | Adjust |
|---|---|
| "with timestamps" | Skip the timestamp-strip line in awk; keep the `00:00:01.000 -->` lines |
| "summarize" | Pipe the cleaned transcript into your own summarization, return 3-5 bullets |
| "key quotes" | Pull lines over 10 words containing a verb, return the strongest 5 |
| "translate to X" | Add `--sub-langs "X.*,X,en.*,en"` so it pulls the target language if available, otherwise EN |
| "speaker by speaker" | Not possible from YouTube's caption track — say so |

## Failure modes

| Failure | Response |
|---|---|
| `yt-dlp` not installed | Give the install one-liner, stop |
| No subtitles available | "This video has no captions and no auto-generated transcript. Try a different video." |
| Region-blocked or age-gated | "yt-dlp returned a 403 — the video is region-blocked, age-gated, or members-only." |
| Live stream still ongoing | "Live streams don't have transcripts until they end." |

## Voice

When returning the transcript, no preamble. No "Here's the transcript:" — just the text in a code block. If the user asked for a summary, deliver the summary in the MOBIUS-style brutalist voice: short sentences, no filler.
