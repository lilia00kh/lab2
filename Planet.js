class Planet
{
    constructor(name,mass,capacity) {
        this.name=name;
        this.mass=mass;
        this.capacity=capacity;        
    }    
  AddPlanet(item,planets)
  {
      planets.splice(planets.length,0,item);
  }
  EditingPlanet(n,m,item,planets)
  {
    planets.splice(n,m,item);
  }
  DeletePlanet(n,m,planets)
  {
    planets.splice(n,m);
  }
  SearchPlanet(planets,item)
  {
      let t=planets.indexOf(item);
      return t;
  }
}
module.exports = Planet;
