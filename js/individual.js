var individualMap = L.map('drinkMap').setView([43.2609, -79.9192], 15); //setting map view to include restaurant location

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiYXBlbnRlbmsiLCJhIjoiY2syZGw2MHZpM3d6NDNobWx0YmhibDBrbiJ9.2Uf-BZH6EReARms-EdlBpA'
}).addTo(individualMap);    //adding the map

var individual = L.marker([43.2609, -79.9192]).addTo(individualMap);    //adding a marker for the restaurant location