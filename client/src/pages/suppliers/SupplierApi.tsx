import Employee from "./Suppliers";

export function searchSuppliers(){
    if (!localStorage['suppliers']){
        localStorage['suppliers'] = '[]';
    }
    let suppliers = localStorage['suppliers'];
    suppliers = JSON.parse(suppliers);
    return suppliers

}

export function removeSuppliers(id:string){
    let suppliers = searchSuppliers();

    let indice = suppliers.findIndex((employee:Employee) => employee.id ==id);
   /* [1,2,3].splice(indice,1) */
    suppliers.splice(indice, 1)
    localStorage['suppliers']= JSON.stringify(suppliers);
}

export function saveSuppliers(employee:Employee){
    let suppliers = searchSuppliers();
    if (employee.id){
        // editar
        let indice = suppliers.findIndex((c:Employee) => c.id ==employee.id);
        suppliers[indice]= employee;
    } else {
        // nuevo
        employee.id = String( Math.round(Math.random() * 100000));
        suppliers.push(employee);
    }
    localStorage['suppliers']= JSON.stringify(suppliers);
}

export function searchEmployeeById(id:string){
    let suppliers = searchSuppliers();
    return suppliers.find((employee:Employee) => employee.id ==id);
}
