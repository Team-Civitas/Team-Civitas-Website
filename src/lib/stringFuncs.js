export function toDecode(str) {
  str = str.startsWith('/') ? str.slice(1) : str;
  str = str.replace(/\b\w/g, (char) => char.toUpperCase()).replace('-', ' ');
  return str
}

export function extractName(path) {
  const parts = path.split('/');
  const filename = parts[parts.length - 1];
  const name = filename.split('.')[0];
  return decodeURI(name);
}

export function formatIconName(rawName) {
  const nameParts = rawName.split(/[_ -]/);
  const type = nameParts[0];
  const rest = nameParts.slice(1).join(' ');
  return `${type}: ${rest}`;
}