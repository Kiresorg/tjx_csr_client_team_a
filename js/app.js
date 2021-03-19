//const axios = require("axios");

//--------------------------------------------------------------------------------
//ORDERS

async function getAllOrders() {
	const response = await axios ({
	url: "https://csr-api-a.azurewebsites.net/api/orders",
	method: "GET"
})

return response.data;
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
	const response = await axios.post('https://csr-api-a.azurewebsites.net/api/orders', body);
	console.log(response.data); 
}
 


//--------------------------------------------------------------------------------

async function deleteOrder() {
	const response = await axios ({
	url: "https://csr-api-a.azurewebsites.net/api/orders/:id",
	method: "DELETE"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------

async function modifyOrder() {
	const response = await axios ({
	url: "https://csr-api-a.azurewebsites.net/api/orders/:id",
	method: "GET"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------
//CUSTOMERS


async function createCustomer(body) {
	// const response = await axios ({
	// url: "https://csr-api-a.azurewebsites.net/api/customer",
	// method: "POST"
	const response = await axios.post('https://csr-api-a.azurewebsites.net/api/customers', body);
	console.log("HELLO");
	console.log(response.data);

}


//--------------------------------------------------------------------------------

async function getAllCustomers() {
	const response = await axios ({
	url: "https://csr-api-a.azurewebsites.net/api/customers",
	method: "GET"
})
return response.data;
}


//--------------------------------------------------------------------------------

async function getCustomer(id) {
	const response = await axios ({
	url: `https://csr-api-a.azurewebsites.net/api/customer/${id}`,
	method: "GET"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------

async function modifyCustomer(id, body) {

	const response = await axios.put(`https://csr-api-a.azurewebsites.net/api/customers/${id}`, body);

	return response.data;

}

async function deleteSpecificCustomer() {
	const response = await axios ({
	url: "https://csr-api-a.azurewebsites.net/api/customers/:id",
	method: "DELETE"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------
//PRODUCTS

async function getAllProducts() {
	const response = await axios ({
	url: "https://csr-api-a.azurewebsites.net/api/products/",
	method: "GET"
})
return response.data;
}

//--------------------------------------------------------------------------------

async function getProduct(id) {
	const response = await axios ({
	url: `http://csr-api-a.azurewebsites.net/api/products/${id}`,
	method: "GET"
})
//console.log(response.data)
return response.data
}

//--------------------------------------------------------------------------------

async function updateProduct() {
	const response = await axios ({
	url: "http://csr-api-a.azurewebsites.net/api/products/:id",
	method: "PUT"
})
console.log(response.data)
}
