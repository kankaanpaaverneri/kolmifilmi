const productions = document.querySelectorAll(".production");
const languageButton = document.getElementById("language-button");
const introduction = document.getElementById("introduction-text");
/*
const translations = {
	fi: {
		languageButton: "Suomi",
		introductionTitle: "Meistä",
		introduction: `Toteutamme lyhyttä fiktiota, dokumentteja, musiikkivideoita sekä keikkataltiointeja. Yhdistämme luovan kerronnan ja vahvan tuotannollisen osaamisen tarinoiksi, jotka jäävät elämään. Oma kalustomme tukenamme viemme projektit luotettavasti maaliin tiiviissä yhteistyössä tilaajan kanssa.`,
	},
	en: {
		languageButton: "English",
		introductionTitle: "About us",
		introduction: `We produce short-form fiction, documentaries, music videos, and live recording. We strive to combine creative narratives with strong production know-how into stories that live on. With our quipment, we excecute any project reliaby `
	}
};

let currentLanguage = "fi";
languageButton.textContent = translations[currentLanguage].languageButton; 
introduction.textContent = translations[currentLanguage].introduction;

languageButton.addEventListener("click", (e) => {
	e.stopPropagation();
	currentLanguage = currentLanguage == "fi" ? "en" : "fi"; 
	languageButton.textContent = translations[currentLanguage].languageButton;
	introduction.textContent = translations[currentLanguage].introduction;
});
*/

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






