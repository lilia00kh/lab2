
class Cargo
{
    constructor(cod,name,mass) {
        this.cod=cod;
        this.name=name;
        this.mass=mass;        
    }
    AddCargo(item,cargo)
    {
        cargo.splice(spaceStation.length,0,item);
    }
    EditingCargo(n,m,item,cargo)
    {
        cargo.splice(n,m,item);
    }
    DeleteCargo(n,m,cargo)
    {
        cargo.splice(n,m);
    }
    SearchCargo(cargo,item)
    {
        let t= cargo.indexOf(item);
        return t;
    }
}

module.exports = Cargo;
