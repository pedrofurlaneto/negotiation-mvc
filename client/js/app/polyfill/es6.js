if(!Array.prototype.includes) {
    Array.prototype.includes = function(elemento) {
        return this.indexOf(elemento) != -1;
    };
}