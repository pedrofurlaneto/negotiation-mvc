class NegotiationController {
    constructor() {
        const $ = document.querySelector.bind(document);
        
        this._dateInput = $('#data');
        this._quantityInput = $('#quantidade');
        this._valueInput = $('#valor');
         
        this._negotiationList = new Bind(
            new NegotiationList(), 
            new NegotiationView($('#negotiationView')), 
            'add', 'clear' , 'sortAsc', 'sortDesc');
       
        this._message = new Bind(
            new Message(), new MessageView($('#messageView')),
            'text');    
            
        this.currentOrder = ''               
    }
    
    add(event) {
        event.preventDefault();
       
        try {
            this._negotiationList.add(this._createNegotiation());
            this._message.text = 'Negociação adicionada com sucesso'; 
            this._clearForm();   
        } catch(e) {
            this._message.text = e;
        }
    }
    
    importNegotiations() {
        const service = new NegotiationService();
        
        service
            .listNegotiations()
            .then(negotiations => negotiations.forEach(negotiation => {
                this._negotiationList.add(negotiation);

                this._message.text = 'Negociações do período importadas'   
            }))
            .catch(e => this._message.text = e);                              
    }
    
    removeAll() {
        this._negotiationList.clear();
        this._message.text = 'Negociações apagadas com sucesso';
    }
    
    _createNegotiation() {
        return new Negotiation(
            DateHelper.text2Date(this._dateInput.value),
            this._quantityInput.value,
            this._valueInput.value);    
    }
    
    _clearForm() {
        this._dateInput.value = '';
        this._quantityInput.value = 1;
        this._valueInput.value = 0.0;
        
        this._dateInput.focus();   
    }
    
    sort(column) {
        if(this.currentOrder == column) {
            this._negotiationList.sortDesc(); 
            
            return;
        }

        this._negotiationList.sortAsc((p, s) => p[column] - s[column]);    
        this.currentOrder = column;
    }
}