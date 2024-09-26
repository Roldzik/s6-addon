//Odliczanie
function czasDoWydarzenia(rok, miesiac, dzien, godzina, minuta, sekunda) {
	var aktualnyCzas = new Date();
	var dataWydarzenia = new Date(rok, miesiac, dzien, godzina, minuta, sekunda);
	var pozostalyCzas = dataWydarzenia.getTime() - aktualnyCzas.getTime();
	
	if (pozostalyCzas > 0) {						
		var s = pozostalyCzas / 1000;	// sekundy
		var min = s / 60;		// minuty
		var h = min / 60;		// godziny
		var dni = h / 24;		// dni

		var sLeft = Math.floor(s  % 60);	// pozostało sekund		
		var minLeft = Math.floor(min % 60);	// pozostało minut
		var hLeft = Math.floor(h % 24);		// pozostało godzin	
		var dniLeft = Math.floor(dni % 30);	// pozostało dni
		
		if (minLeft < 10)
		  minLeft = "0" + minLeft;
		if (sLeft < 10)
		  sLeft = "0" + sLeft;
		
		return dniLeft + "d : " + hLeft + "g : " + minLeft + "m : " + sLeft + "s";
	}
	else return "0d : 0g : 0m : 0s";
};
window.onload = function() {
	idElement = "minutnik";
	setInterval("document.getElementById(idElement).innerHTML = czasDoWydarzenia(2024, 8, 27, 14, 0, 0, 0)", 1000);
}

//Galeria
var images = document.querySelectorAll('.gallery img');
var currentIndex = 0;

function openModal(element) {
    document.getElementById('myModal').style.display = "block";
    document.getElementById('modalImage').src = element.src;
    currentIndex = Array.from(images).indexOf(element);
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

function changeImage(n) {
    currentIndex += n;
    if (currentIndex < 0) {
		currentIndex = images.length - 1;
	}
	else if (currentIndex >= images.length) {
		currentIndex = 0;
    }
    document.getElementById('modalImage').src = images[currentIndex].src;
}
