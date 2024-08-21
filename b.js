/** A Yo are working on a ser athentication modle for a we+ application Implement error handling for the
login processCreate a fnction login that simlates the ser login process The fnction shold take the
sername and password as parameters and throw errors nder certain conditions#
' If the sername is not provided, throw an error indicating Username is reqired
' If the password is not provided, throw an error indicating Password is reqired
' If the sername and password do not match any valid credentials, throw an error indicating Invalid
sername or password */

function login(username, password) {
    if (!username) {
        throw new Error('Username is required');
    }
    if (!password) {
        throw new Error('Password is required');
    }

    // Simulated valid credentials
    const validUsername = 'user';
    const validPassword = 'pass';

    if (username !== validUsername || password !== validPassword) {
        throw new Error('Invalid username or password');
    }

    console.log('Login successful');
}

// Example usage
try {
    login('', 'pass'); // This will throw 'Username is required'
} catch (error) {
    console.error('Login error:', error.message);
}

try {
    login('user', ''); // This will throw 'Password is required'
} catch (error) {
    console.error('Login error:', error.message);
}

try {
    login('user', 'wrongpass'); // This will throw 'Invalid username or password'
} catch (error) {
    console.error('Login error:', error.message);
}

try {
    login('user', 'pass'); // This will succeed
} catch (error) {
    console.error('Login error:', error.message);
}

/** output
Login error: Username is required
Login error: Password is required
r password
Login successful
 */
