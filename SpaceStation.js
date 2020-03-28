class SpaceStation {
    constructor(number,necessity,capacity) {
        this.number=number;
        this.capacity=capacity;
        this.necessity=necessity;        
    }    
    AddSpaceStation(item,arr)
    {
        arr.splice(arr.length,0,item);  
    }
    EditingSpaceStation(n,m,item,arr)
    {
        arr.splice(n,m,item);
    }
    DeleteSpaceStation(n,m,arr)
    {        
        arr.splice(n,m);        
    }
    SearchSpaceStation(arr,item)
    {
        let t= arr.indexOf(item);
        return t;
    }

  }
  module.exports = SpaceStation;