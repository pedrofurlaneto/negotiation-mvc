class DateHelper {
    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }
    
    static date2Text(date) {
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }
    
    static text2Date(text) {
        if(!/\d{2}\/\d{2}\/\d{4}/.test(text)) 
            throw new Error('Deve estar no formato dd/mm/aaaa');
             
        return new Date(...text.split('/').reverse().map((item, index) => item - index % 2));
    }
}