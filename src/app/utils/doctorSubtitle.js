const LONG_SUBTITLE_LENGTH = 32;

export function isLongDoctorSubtitle(subtitle) {
  return String(subtitle || '').trim().length > LONG_SUBTITLE_LENGTH;
}

/** Split long subtitles into centered lines for doctor cards and profile headers. */
export function getDoctorSubtitleLines(subtitle) {
  const text = String(subtitle || '').trim();
  if (!text) return [];
  if (text.length <= LONG_SUBTITLE_LENGTH) return [text];

  const ampersandParts = text.split(/\s+&\s+/);
  if (ampersandParts.length === 2) {
    return [`${ampersandParts[0]} &`, ampersandParts[1]];
  }

  const dashParts = text.split(/\s+-\s+/);
  if (dashParts.length === 2 && dashParts[0].length >= 6) {
    return [dashParts[0], dashParts[1]];
  }

  const words = text.split(/\s+/);
  if (words.length >= 4) {
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
  }

  return [text];
}
