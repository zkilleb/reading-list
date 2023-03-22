export function getLogo(link: string | null) {
  if (link) {
    if (link.includes('espn')) return 'espn.png';
  }
  return 'simpsons.gif';
}
