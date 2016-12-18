function sprawdz() {
var liczba1 = parseInt(document.getElementById("wartosc1").value);
var liczba2 = parseInt(document.getElementById("wartosc2").value);
var x = " ";
	
	if(liczba1<liczba2) {
		for(i=liczba1; i<=liczba2; i++) {
		x = x + i + " ";
	}
	}
	

document.getElementById("wynik").innerHTML=x
	
}