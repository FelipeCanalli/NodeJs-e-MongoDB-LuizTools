const customers = [];

customers[0] = { id: 0, name: "Felipe Galvão", address: "São Paulo", age: 22 };

function addCustomers(name,address, age){
    const id = customers.length > 0 ? customers[customers.length - 1].id + 1 : 1;
    customers.push({ id, name, address, age });
    return id;
}

function getCustomers(){
    return customers; 
}

module.exports = {addCustomers, getCustomers};