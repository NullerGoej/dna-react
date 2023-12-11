export async function createUser(user) {
    const response = await fetch('https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();
    return data;
}

export async function getUserById(userId) {
    const response = await fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/users/${userId}`);
    const data = await response.json();
    return data;
}

export async function updateUser(userId, updatedUser) {
    const response = await fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    });

    const data = await response.json();
    return data;
}

export async function deleteUser(userId) {
    const response = await fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/users/${userId}`, {
        method: 'DELETE'
    });

    const data = await response.json();
    return data;
}

export async function getAllUsers() {
    const response = await fetch('https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/users');
    const data = await response.json();
    return data;
}

export async function createItem(item) {
    const response = await fetch('https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });

    const data = await response.json();
    return data;
}

export async function getItemById(itemId) {
    const response = await fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/items/${itemId}`);
    const data = await response.json();
    return data;
}

export async function updateItem(itemId, updatedItem) {
    const response = await fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/items/${itemId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedItem)
    });

    const data = await response.json();
    return data;
}

export async function deleteItem(itemId) {
    const response = await fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/items/${itemId}`, {
        method: 'DELETE'
    });

    const data = await response.json();
    return data;
}

export async function getUserItems(userId) {
    const response = await fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/items?user_id=${userId}`);
    const data = await response.json();
    return data;
}

export async function getAllItems() {
    const response = await fetch('https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/items');
    const data = await response.json();
    return data;
}

export async function createOrder(order) {
    const response = await fetch('https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });

    const data = await response.json();
    return data;
}

export async function getOrderById(orderId) {
    const response = await fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/orders/${orderId}`);
    const data = await response.json();
    return data;
}

export async function updateOrder(orderId, updatedOrder) {
    const response = await fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/orders/${orderId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedOrder)
    });

    const data = await response.json();
    return data;
}

export async function deleteOrder(orderId) {
    const response = await fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/orders/${orderId}`, {
        method: 'DELETE'
    });

    const data = await response.json();
    return data;
}

export async function getAllOrders() {
    const response = await fetch('https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/orders');
    const data = await response.json();
    return data;
}

export async function createOrderItem(orderItem) {
    const response = await fetch('https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/order_items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderItem)
    });

    const data = await response.json();
    return data;
}

export async function getOrderItemById(orderItemId) {
    const response = await fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/order_items/${orderItemId}`);
    const data = await response.json();
    return data;
}

export async function updateOrderItem(orderItemId, updatedOrderItem) {
    const response = await fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/order_items/${orderItemId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedOrderItem)
    });

    const data = await response.json();
    return data;
}

export async function deleteOrderItem(orderItemId) {
    const response = await fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/order_items/${orderItemId}`, {
        method: 'DELETE'
    });

    const data = await response.json();
    return data;
}

export async function getAllOrderItems() {
    const response = await fetch('https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/order_items');
    const data = await response.json();
    return data;
}

export async function createItemCategory(itemCategory){
    const response = await fetch('https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/item_categories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemCategory)
    });

    const data = await response.json();
    return data;
}

export async function getItemCategoryById(itemCategoryId){
    const response = await fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/item_categories/${itemCategoryId}`);
    const data = await response.json();
    return data;
}

export async function updateItemCategory(itemCategoryId, updatedItemCategory){
    const response = await fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/item_categories/${itemCategoryId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedItemCategory)
    });

    const data = await response.json();
    return data;
}

export async function deleteItemCategory(itemCategoryId){
    const response = await fetch(`https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/item_categories/${itemCategoryId}`, {
        method: 'DELETE'
    });

    const data = await response.json();
    return data;
}

export async function getAllItemCategories(){
    const response = await fetch('https://zealand.moedekjaer.dk/final/dna-laravel-api/public/api/item_categories');
    const data = await response.json();
    return data;
}
