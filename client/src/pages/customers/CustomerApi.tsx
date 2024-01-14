import Customer from "./Customer";

export function searchCustomers(){
    if (!localStorage['customers']){
        localStorage['customers'] = '[]';
    }
    let customers = localStorage['customers'];
    customers = JSON.parse(customers);
    return customers

}

export function removeCustomers(id:string){
    let customers = searchCustomers();

    let indice = customers.findIndex((customer:Customer) => customer.id ==id);
   /* [1,2,3].splice(indice,1) */
    customers.splice(indice, 1)
    localStorage['customers']= JSON.stringify(customers);
}

export function saveCustomers(customer:Customer){
    let customers = searchCustomers();
    if (customer.id){
        // editar
        let indice = customers.findIndex((c:Customer) => c.id ==customer.id);
        customers[indice]= customer;
    } else {
        // nuevo
        customer.id = String( Math.round(Math.random() * 100000));
        customers.push(customer);
    }
    localStorage['customers']= JSON.stringify(customers);
}

export function searchCustomerById(id:string){
    let customers = searchCustomers();
    return customers.find((customer:Customer) => customer.id ==id);
}
