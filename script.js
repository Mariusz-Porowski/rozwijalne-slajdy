const body = document.querySelector('body')
const cards = document.querySelectorAll('.card')

function showCards() {
	cards.forEach(card => {
		card.classList.remove('active')
		this.classList.add('active')
	})

	handleBgColor(this)
}

const handleBgColor = card => {
	const mleko = card.getAttribute('data-season')
	body.setAttribute('data-bg', mleko)
}

cards.forEach(card => card.addEventListener('click', showCards))
