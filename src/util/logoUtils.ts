export function getLogo(link: string | null) {
  if (link) {
    if (link.includes('https://www.espn.com')) return 'espn.png';
    else if (link.includes('https://www.theringer.com')) return 'ringer.png';
  }
  return 'simpsons.gif';
}
