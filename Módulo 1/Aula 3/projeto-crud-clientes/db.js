const fs = require("fs");
let customers = [];

function addCustomers(name,address, age){
    const id = customers.length > 0 ? customers[customers.length - 1].id + 1 : 1;
    customers.push({ id, name, address, age });
    fs.writeFileSync("db.json",JSON.stringify(customers));
    return id;
}

function updateCustomers (id, newData){
    const customerIndex = customers.findIndex(customer => (customer.id) === (id));
    if(customerIndex === -1) return false;

    const customer = customers[customerIndex];

    if(newData.name)
        customer.name = newData.name;
    if(newData.address)
        customer.address = newData.address;
    if(newData.age)
        customer.age = newData.age;
    
    customers[customerIndex] = customer;
    fs.writeFileSync("db.json",JSON.stringify(customers));

    return true;
}

function getCustomers(){
    const customersString = fs.readFileSync("db.json","utf-8");
    customers = JSON.parse(customersString);
    return customers;
}

function getCustomer(id){
    const customerIndex = customers.findIndex(customer => (customer.id) === (id));
    if(customerIndex === -1) return false;

    return customers[id];
}

function deleteCustomer(id){
    const customerIndex = customers.findIndex(customer => (customer.id) === (id));
    if(customerIndex === -1) return false;

    customers.splice(id,1);
    fs.writeFileSync("db.json",JSON.stringify(customers));
    return true
}

module.exports = {addCustomers, getCustomers, updateCustomers, deleteCustomer, getCustomer};