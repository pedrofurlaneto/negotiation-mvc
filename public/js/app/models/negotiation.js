class Negotiation {
    constructor(date, quantidade, value) {
        this._date = new Date(date.getTime());
        this._quantity = quantidade;
        this._value = value;
        Object.freeze(this);
    }
    
    get volume() {
        return this._quantity * this._value;
    }
    
    get date() {
        return new Date(this._date.getTime());
    }
    
    get quantity() {
        return this._quantity;
    }
    
    get value() {
        return this._value;
    }
}