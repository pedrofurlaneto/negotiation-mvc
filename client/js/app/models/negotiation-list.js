class NegotiationList {
    constructor() {
        this._negotiations = [];
    }

    add(negotiation) {
        this._negotiations.push(negotiation);
    }

    get negotiations() {
        return [].concat(this._negotiations);
    }

    clear() {
        this._negotiations = [];
    }
    
    get totalVolume() {
       return this._negotiations.reduce((total, n) => total + n.volume, 0.0);
    }
    
    sortAsc(criterio) {
        this._negotiations.sort(criterio);        
    }
    
    sortDesc() {
        this._negotiations.reverse();
    }    
}