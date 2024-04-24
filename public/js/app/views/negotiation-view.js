class NegotiationView extends View {
    constructor(element) {
        super(element);
    }
    
    template(model) {
        return `
            <table class="table table-hover table-bordered">            
                <thead>
                    <tr>
                        <th onclick="negotiationController.sort('date')">DATA</th>
                        <th onclick="negotiationController.sort('quantity')">QUANTIDADE</th>
                        <th onclick="negotiationController.sort('value')">VALOR</th>
                        <th onclick="negotiationController.sort('volume')">VOLUME</th>
                    </tr>
                </thead>
            
                <tbody>
                    ${model.negotiations.map(n => `
                        <tr>
                            <td>${DateHelper.date2Text(n.date)}</td>
                            <td>${n.quantity}</td>
                            <td>${n.value}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `).join('')}                
                </tbody>
                    
                <tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${model.totalVolume}
                    </td>
                </tfoot>            
            </table>
        `;
    }
}
