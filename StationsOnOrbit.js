class StationsOnOrbit
{
    constructor(spaceStation,planet) {
        this.spaceStation=spaceStation;
        this.planet=planet;    
    }    
  AddStationsOnOrbit(item,stationsOnOrbit)
  {
    stationsOnOrbit.splice(stationsOnOrbit.length,0,item);
  }
  EditingStationsOnOrbit(n,m,item,stationsOnOrbit)
  {
    stationsOnOrbit.splice(n,m,item);
  }
  DeleteStationsOnOrbit(n,m,stationsOnOrbit)
  {
    stationsOnOrbit.splice(n,m);
  }
  SearchStationsOnOrbit(stationsOnOrbit,item)
  {
      let t=stationsOnOrbit.indexOf(item);
      return t;
  }
}
module.exports = StationsOnOrbit;
