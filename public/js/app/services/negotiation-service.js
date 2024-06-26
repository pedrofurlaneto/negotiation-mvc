class NegotiationService {
    constructor() {
        this._http = new HttpService();
    }
    
    listWeekNegotiations() {
        return this._http
            .get('https://negotiation-mvc-server.vercel.app/negociacoes/semana')
            .then(res => {
                return res.map(object => new Negotiation(new Date(object.data), object.quantidade, object.valor));
            })
            .catch(e => {
                console.log(e);
                
                throw new Error('Não foi possível obter as negociações da semana');
            });  
    }
    
    listLastWeekNegotiations() {
        return this._http
            .get('https://negotiation-mvc-server.vercel.app/negociacoes/anterior')
            .then(res => {
                return res.map(object => new Negotiation(new Date(object.data), object.quantidade, object.valor));
            })
            .catch(e => {
                console.log(e);
                throw new Error('Não foi possível obter as negociações da semana anterior');
            });   
    }
    
    listTwoWeeksAgoNegotiations() {
        return this._http
            .get('https://negotiation-mvc-server.vercel.app/negociacoes/retrasada')
            .then(res => {
                return res.map(object => new Negotiation(new Date(object.data), object.quantidade, object.valor));
            })
            .catch(e => {
                console.log(e);
                throw new Error('Não foi possível obter as negociações da semana retrasada');
            });  
        
    }
    
    listNegotiations() {
        return Promise.all([
            this.listWeekNegotiations(),
            this.listLastWeekNegotiations(),
            this.listTwoWeeksAgoNegotiations()
        ]).then(periods => {
            const negotiations = periods
                .reduce((data, period) => data.concat(period), [])

            return negotiations;
        }).catch(e => {
            throw new Error(e);
        });
	} 
}
