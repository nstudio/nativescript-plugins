export function generateId() {
	const datePart = new Date().getTime() * Math.pow(10, 3);
	const extraPart = Math.floor(Math.random() * Math.pow(10, 3));
	return datePart + extraPart;
}