function czasDoWydarzenia(rok, miesiac, dzien, godzina, minuta, sekunda, milisekunda)
{
	var aktualnyCzas = new Date();
	var dataWydarzenia = new Date(rok, miesiac, dzien, godzina, minuta, sekunda, milisekunda);
	var pozostalyCzas = dataWydarzenia.getTime() - aktualnyCzas.getTime();
	
	if (pozostalyCzas > 0)
	{						
		var s = pozostalyCzas / 1000;	// sekundy
		var min = s / 60;				// minuty
		var h = min / 60;				// godziny
		var dni = h / 24;

		var sLeft = Math.floor(s  % 60);	// pozostało sekund		
		var minLeft = Math.floor(min % 60);	// pozostało minut
		var hLeft = Math.floor(h % 24);			// pozostało godzin	
		var dniLeft = Math.floor(dni % 30);
		
		if (minLeft < 10)
		  minLeft = "0" + minLeft;
		if (sLeft < 10)
		  sLeft = "0" + sLeft;
		
		return dniLeft + "d : " + hLeft + "g : " + minLeft + "m : " + sLeft + "s";
	}
	else
		return "0d : 0g : 0m : 0s";
}
					
window.onload = function()
{
	idElement = "minutnik";
	document.getElementById(idElement).innerHTML = czasDoWydarzenia(2023, 05, 01, 20, 0, 0, 0);
	setInterval("document.getElementById(idElement).innerHTML = czasDoWydarzenia(2023, 05, 01, 20, 0, 0, 0)", 1000);
};