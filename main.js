"use strict";
const SpaceStation = require('./SpaceStation');
const Planet = require('./Planet');
const StationsOnOrbit= require('./StationsOnOrbit');
const Cargo= require('./Cargo');
const DeliveryToTheStation= require('./DeliveryToTheStation');
const DeliveryToThePlanet= require('./DeliveryToThePlanet');
//Космічна станція
let spaceStation = [111,222,333];
let newSpaceStation = 444;
let capacity=100;
let newNecessity=78;
let n=1;
let m=1;
let search = 111;
console.log("Всі станції: "+spaceStation);
let g = new SpaceStation(newSpaceStation,newNecessity,capacity);
console.log("Номер нової космічної станції - "+g.number);
console.log("Додаємо цю станцію");
g.AddSpaceStation(newSpaceStation,spaceStation);
console.log(""+spaceStation);
console.log("Видаляємо станцію 222");
g.DeleteSpaceStation(n,m,spaceStation);
console.log(""+spaceStation);
console.log("Шукаємо станцію " + search);
let t = g.SearchSpaceStation(spaceStation,search)
if(t==-1)
    console.log("Немає такої станції");
else 
    console.log("Така станція є");
//Планети
console.log("\n");
let planets=["Земля","Марс","Сатурн"];
let newPlanet="Уран";
let l =0;
let y =1;
let p = new Planet(newPlanet,1000000,100);
console.log("Планети: "+planets);
console.log("Редагуємо планети (змінюємо Землю на Уран)");
p.EditingPlanet(l,y,newPlanet,planets);
console.log("Планети: " + planets);
//Доставка
console.log("\n");
let cargoes = ["їжа","одяг","книги"];
let cod =123;
let nameOfCargo="Техніка";
let mass = 2;
let r = new Cargo(cod,nameOfCargo,mass);
console.log("Вантажі: "+cargoes);
console.log("Шукаємо вантаж одяг");
let cargoAvailable=r.SearchCargo(cargoes,"одяг");
if(cargoAvailable==-1)
    console.log("Немає такого вантажа");
else 
    console.log("Такий вантаж є");

//Доставка вантажу на станцію
console.log("\n");
let deliveryToTheStation= [1,2,3];
let i=4;
let j = new DeliveryToTheStation(spaceStation[0],cargoes[0]);
console.log("Номер станції на яку відбудеться доставка - "+j.spaceStation+", товар - "+j.cargo);
j.deliveryToTheStation(deliveryToTheStation,i);
let delivered = [10,10,20];
let necessity=[20,50,100];
let deliveredLessThen30=j.deliveryToTheStation(delivered,necessity,spaceStation);
console.log("На ці станції доставлено менше ніж 30 відсотків товару: "+deliveredLessThen30)

//Доставка вантажу на планету
console.log("\n");
let deliveryToThePlanet= [1,2,3];
let b = new DeliveryToThePlanet(planets[1],cargoes[1]);
console.log("Планета на яку відбудеться доставка - "+b.planet+", товар - "+j.cargo);
b.DeliveryToThePlanet(i,deliveryToThePlanet);
