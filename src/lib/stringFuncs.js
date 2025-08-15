
export function toDecode(str) {
    str = str.startsWith('/') ? str.slice(1) : str;
	str = str.replace(/\b\w/g, (char) => char.toUpperCase()).replace('-', ' ');
    return str
}