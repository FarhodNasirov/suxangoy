let url = "https://script.google.com/macros/s/AKfycbwtTwvPulXGBKhTfiE6VLffDnl4BDnfHh0ZzS4iQ_H-FybI5IQD5yCYcHEk-SfEyDBHjg/exec?lesson=1"

fetch(url, {
	method: 'GET',
	credentials: 'include',
})
.then((response) => {
	if (!response.ok) {
		throw new Error('Error occurred!')
	} response.json()})
	.catch((err) => {
		console.log(err)})
.then((data) => {console.log(data)})
