const productions = document.querySelectorAll(".production");

productions.forEach((production) => {
	const productionTitle = production.querySelector(".production-title");
	const modal = production.querySelector(".modal-container");
	const modalClose = modal.querySelector(".close-modal");
	production.addEventListener("mouseover", () => {
		productionTitle.classList.remove("hidden");
	});
	production.addEventListener("mouseout", () => {
		productionTitle.classList.add("hidden");
	});

	production.addEventListener("click", () => {
		if(modal.contains(event.target)) return;
		modal.classList.remove("hidden");
		modal.classList.add("center")
	});

	modalClose.addEventListener("click", (event) => {
		modal.classList.add("hidden");
		modal.classList.remove("center")
	});
});






