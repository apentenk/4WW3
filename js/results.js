var resultMap = L.map('mapBox').setView([43.2609, -79.9192], 15);	//setting map view to include restaurant location
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiYXBlbnRlbmsiLCJhIjoiY2syZGw2MHZpM3d6NDNobWx0YmhibDBrbiJ9.2Uf-BZH6EReARms-EdlBpA'
}).addTo(resultMap);//adding the map

var result1 = L.marker([43.2609, -79.9192]).addTo(resultMap);	 //adding a marker for the restaurant location
var result2 = L.marker([43.2576, -79.9194]).addTo(resultMap);	 //adding a marker for the restaurant location
var result3 = L.marker([43.2599, -79.9242]).addTo(resultMap);	 //adding a marker for the restaurant location
var result4 = L.marker([43.2588, -79.9148]).addTo(resultMap);	 //adding a marker for the restaurant location


result1.bindPopup('<a href=individual_sample.html><b>Pumpkin Cream Cold Brew</b><br>Starbucks <br>5 stars<br></a>').openPopup();			//adding restaurant data to marker
result2.bindPopup('<a href=individual_sample.html><b>Lorem Ipsum</b><br>Dolor Sit Amet<br>1 stars<br></a>').openPopup();			//adding restaurant data to marker
result3.bindPopup('<a href=individual_sample.html><b>Quisque Posuere</b><br>Iaculis Turpis<br>3.5 stars<br></a>').openPopup();	//adding restaurant data to marker
result4.bindPopup('<a href=individual_sample.html><b>Maecenas Mattis</b><br> Luctus Orci<br>2.5 stars<br></a>').openPopup();	//adding restaurant data to marker