 
class DeliveryToThePlanet
{
    constructor(planet,cargo) {
        this.planet=planet;
        this.cargo=cargo;
        }
      DeliveryToThePlanet(item,deliveryToThePlanet)
      {
        deliveryToThePlanet.splice(deliveryToThePlanet.length,0,item);
      }
           
}

module.exports = DeliveryToThePlanet;