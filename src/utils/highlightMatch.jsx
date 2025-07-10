import React from "react";

export function highlightMatch(text, query) {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-yellow-300 px-1 rounded-sm">{part}</mark>
    ) : (
      part
    )
  );
}
