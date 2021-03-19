//--------------------------------------------------------------------------------
//ORDERS

// Makes API URL switchable for dev purposes. DO NOT COMMIT TO DEVELOP WITH THIS SET TO LOCALHOST

const api_url = "https://csr-api-a.azurewebsites.net";
//const api_url = "http://localhost:3000";


async function getAllOrders() {
	const response = await axios ({
	url: api_url + "/api/orders",
	method: "GET"
})

return response.data;
}

//--------------------------------------------------------------------------------

async function getOrder() {
	const response = await axios ({
	url: api_url + "/api/orders/:id",
	method: "GET"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------

async function createNewOrder(body) {
	const response = await axios.post(api_url + '/api/orders', body);
	console.log(response.data); 
}
 


//--------------------------------------------------------------------------------

async function deleteOrder() {
	const response = await axios ({
	url: api_url + "/api/orders/:id",
	method: "DELETE"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------

async function modifyOrder() {
	const response = await axios ({
	url: api_url + "/api/orders/:id",
	method: "GET"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------
//CUSTOMERS


async function createCustomer(body) {
	// const response = await axios ({
	// url: api_url + "/api/customer",
	// method: "POST"
	const response = await axios.post(api_url + '/api/customers', body);
	console.log("HELLO");
	console.log(response.data);

}


//--------------------------------------------------------------------------------

async function getAllCustomers() {
	const response = await axios ({
	url: api_url + "/api/customers",
	method: "GET"
})
return response.data;
}


//--------------------------------------------------------------------------------

async function getCustomer(id) {
	const response = await axios ({
	url: api_url + `/api/customer/${id}`,
	method: "GET"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------

async function modifyCustomer(id, body) {

	const response = await axios.put(api_url + `/api/customers/${id}`, body);

	return response.data;

}

async function deleteSpecificCustomer() {
	const response = await axios ({
	url: api_url + "/api/customers/:id",
	method: "DELETE"
})
console.log(response.data)
}

//--------------------------------------------------------------------------------
//PRODUCTS

async function getAllProducts() {
	const response = await axios ({
	url: api_url + "/api/products/",
	method: "GET"
})
return response.data;
}

//--------------------------------------------------------------------------------

async function getProduct(id) {
	const response = await axios ({
	url: api_url + "/api/product/:id",
	method: "GET"
})
//console.log(response.data)
return response.data
}

//--------------------------------------------------------------------------------

async function updateProduct() {
	const response = await axios ({
	url: api_url + "/api/product/:id",

	method: "PUT"
})
console.log(response.data)
}
