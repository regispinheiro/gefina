const invoices = [{
    id: 1,
    amount: 125039,
    status: 'pending',
    issueDate: '07-10-2026',
    dueDate: '05-11-2026',
    customer: {
        name: 'Construtora Meridiano',
        email: 'contato@meridiano.com.br'
    }
}, {
    id: 2,
    amount: 15340,
    status: 'paid',
    issueDate: '03-09-2026',
    dueDate: '05-10-2026',
    customer: {
        name: 'Construtora Pinheiro Ltda',
        email: 'contato@pinheiroltda.com.br'
    }
}, {
    id: 3,
    amount: 15250,
    status: 'paid',
    issueDate: '02-09-2026',
    dueDate: '08-10-2026',
    customer: {
        name: 'Construtora Domingos Ltda',
        email: 'contato@domingosltda.com.br'
    }
}];

export function findAllInvoices() {
    return invoices;
}

export function findInvoiceById(id: number) {
    return invoices.find(element => element.id === id);
}