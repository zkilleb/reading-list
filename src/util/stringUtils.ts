export function formatLongDescription(description: string) {
  return description.length > 75
    ? `${description.slice(0, 72)}...`
    : description;
}

export function findSiteName(link: string) {
  if (link.includes('https://pitchfork.com')) return 'Pitchfork';
  else if (link.includes('https://www.theringer.com')) return 'The Ringer';
  else if (link.includes('https://www.espn.com')) return 'ESPN';
  else if (link.includes('https://www.hackernoon.com')) return 'HackerNoon';
  else if (link.includes('https://www.avclub.com')) return 'A.V. Club';
  return null;
}
