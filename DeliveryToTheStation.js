
class DeliveryToTheStation
{
    constructor(spaceStation,cargo) {
    this.spaceStation=spaceStation;
    this.cargo=cargo;
    }
    deliveryToTheStation(delivered,necessity,spaceStation)
  {
      let newSpaceStation = [];
      let k =0;
    for(let i=0;i<delivered.length;i++)
    {
        let percent = (necessity[i]*30)/100;
        if(percent>delivered[i])
        {
            newSpaceStation[k]=spaceStation[i];
            k++;
        }
    }
    return newSpaceStation;
  }
  DeliveryFromStationToStatin(deliveryFromStationToStatin,item)
  {
    deliveryFromStationToStatin.splice(deliveryFromStationToStatin.length,0,item);
  }
  DeliveryFromPlanetToStatin(deliveryFromPlanetToStatin,item)
  {
    deliveryFromPlanetToStatin.splice(deliveryFromPlanetToStatin.length,0,item);
  }
  
}
module.exports = DeliveryToTheStation;