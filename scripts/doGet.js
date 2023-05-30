let url = "https://script.google.com/macros/s/AKfycbyZ5v5WQHXacu8B7whaPl13eLBAR_wXg9hLy4eX5nxjBP1uyEDsz8bCNU0pCJ98I1366A/exec"

async function getResponse(address) {
	let response = await fetch(address)
	let content = await response.json()
	return content;
}

result = getResponse(url);  // вызвать функцию в теле HTML и получим промис, который нужно обходит в цикле
let key
for (key in result) {
	console.log(result[key])
	alert(key)
}
