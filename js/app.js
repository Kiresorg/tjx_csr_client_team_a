const axios = require("axios");

//--------------------------------------------------------------------------------
//ORDERS

async function getAllOrders() {
	const response = await axios ({
	url: "http://csr-api-a.azurewebsites.net/api/orders",
	method: "GET"
})

console.log(response.data)
}

//--------------------------------------------------------------------------------

async function getOrder() {
	const response = await axios ({
	url: "http://csr-api-a.azurewebsites.net/api/orders/:id",
	method: "GET"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------

async function createNewOrder() {
	const response = await axios ({
	url: "http://csr-api-a.azurewebsites.net/api/orders",
	method: "POST"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------

async function deleteOrder() {
	const response = await axios ({
	url: "http://csr-api-a.azurewebsites.net/api/orders/:id",
	method: "DELETE"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------

async function modifyOrder() {
	const response = await axios ({
	url: "http://csr-api-a.azurewebsites.net/api/orders/:id",
	method: "GET"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------
//CUSTOMERS

async function createCustomer() {
	const response = await axios ({
	url: "http://csr-api-a.azurewebsites.net/api/customer",
	method: "POST"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------

async function getAllCustomers() {
	const response = await axios ({
	url: "http://csr-api-a.azurewebsites.net/api/customer",
	method: "GET"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------

async function getCustomer() {
	const response = await axios ({
	url: "http://csr-api-a.azurewebsites.net/api/customer/:id",
	method: "GET"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------

async function modifyCustomer() {
	const response = await axios ({
	url: "http://csr-api-a.azurewebsites.net/api/customer/:id",
	method: "PUT"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------

async function deleteSpecificCustomer() {
	const response = await axios ({
	url: "http://csr-api-a.azurewebsites.net/api/customer/:id",
	method: "DELETE"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------

async function getAllProducts() {
	const response = await axios ({
	url: "http://csr-api-a.azurewebsites.net/api/product",
	method: "GET"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------

async function getProduct() {
	const response = await axios ({
	url: "http://csr-api-a.azurewebsites.net/api/product/:id",
	method: "GET"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------

async function updateProduct() {
	const response = await axios ({
	url: "http://csr-api-a.azurewebsites.net/api/product/:id",
	method: "PUT"
})
console.log(response.data)
}
