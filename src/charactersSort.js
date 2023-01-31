export default function sortCharacters(chars) {
  return chars.sort((a, b) => b.health - a.health);
}
