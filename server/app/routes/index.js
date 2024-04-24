var api = require('../api');
const path = require('path');

module.exports  = function(app) {
    app.route('/').get((req, res) => 
        res.sendFile(path.join(__dirname, 'client/index.html')))
    
    app.route('/negociacoes/semana')
        .get(api.listaSemana);
        
    app.route('/negociacoes/anterior')
        .get(api.listaAnterior);
        
    app.route('/negociacoes/retrasada')
        .get(api.listaRetrasada);  
        
    app.route('/negociacoes')
        .post(api.cadastraNegociacao);          
};