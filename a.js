/** Yo are developing the error handling mechanism for an online shopping cart application The
application allows sers to add prodcts to their cart and proceed to checkot Implement error
handling to address different types of errors that might occr dring the shopping process  */

//1. user uthentication
function login(username, password) {
    if (!username) {
        throw new Error('Username is required');
    }
    if (!password) {
        throw new Error('Password is required');
    }

    const validUsername = 'user';
    const validPassword = 'pass';

    if (username !== validUsername || password !== validPassword) {
        throw new Error('Invalid username or password');
    }

    console.log('Login successful');
}


try {
    login('user', 'wrongpass');
} catch (error) {
    console.error('Login error:', error.message);
}




//add product to a cart
let cart = [];

function addToCart(name, price, quantity) {
    if (!name) {
        throw new Error('Product name is required');
    }
    if (price <= 0) {
        throw new Error('Invalid product price');
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error('Invalid quantity');
    }

    cart.push({ name, price, quantity });
    console.log('Product added to cart:', { name, price, quantity });
}


try {
    addToCart('Laptop', 1000, 1);
    addToCart('', 1000, 1); 
} catch (error) {
    console.error('Add to cart error:', error.message);
}



//checkout fucntion
function checkout() {
    if (cart.length === 0) {
        throw new Error('Cart is empty. Add items before checkout.');
    }

    // Simulate the checkout process
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    console.log('Checkout successful. Total amount:', totalAmount);
    cart = []; // Clear the cart after checkout
}

// Example usage
try {
    checkout();
} catch (error) {
    console.error('Checkout error:', error.message);
}

try {
    addToCart('Phone', 500, 2);
    checkout();
} catch (error) {
    console.error('Checkout error:', error.message);
}

/* output  
Login error: Invalid username or password
Product added to cart: { name: 'Laptop', price: 1000, quantity: 1 }
Add to cart error: Product name is required
Checkout successful. Total amount: 1000
Product added to cart: { name: 'Phone', price: 500, quantity: 2 }
Checkout successful. Total amount: 1000  */
