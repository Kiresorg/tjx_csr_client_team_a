//const axios = require("axios");

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

async function createNewOrder(body) {
	/* const response = await axios ({
	
	url: "http://csr-api-a.azurewebsites.net/api/orders",
	method: "POST",
	headers: {'Content-Type': 'application/json'},
	body: JSON.stringify(body) */
	const response = await axios.post('http://csr-api-a.azurewebsites.net/api/orders', body);
	console.log(response.data); 
	

	/*const response = await fetch('http://csr-api-a.azurewebsites.net/api/orders', {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(body) // body data type must match "Content-Type" header
	  });
	console.log(response.data);*/
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

async function createCustomer(custBody) {
	const response = await axios ({
	url: "http://csr-api-a.azurewebsites.net/api/customer",
	method: "POST",
	body: custBody
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
//PRODUCTS

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
