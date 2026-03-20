const WORDS_PER_MINUTE = 200;
function calculateReadingTime(content) {
  const textWithoutCode = content.replace(/```[\s\S]*?```/g, "");
  const words = textWithoutCode.trim().split(/\s+/).filter((word) => word.length > 0);
  const wordCount = words.length;
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
  return minutes;
}
function formatReadingTime(minutes) {
  return `${minutes} min read`;
}
function getReadingTime(content) {
  const minutes = calculateReadingTime(content);
  return formatReadingTime(minutes);
}

export { calculateReadingTime as c, formatReadingTime as f, getReadingTime as g };
