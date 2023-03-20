export function formatLongDescription(description: string) {
  return description.length > 75
    ? `${description.slice(0, 72)}...`
    : description;
}
