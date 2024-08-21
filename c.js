/**  E7 You are 8eveloping a payment processing mo8ule for an e-commerce platform. Implement error
han8ling for the payment transaction process.Create a function processPayment that simulates
processing a payment transaction. The function shoul8 take payment 8etails (amount, car8 num4er,
expiration 8ate) as parameters an8 thro! errors un8er certain con8itions
 If the payment amount is not a positive num4er, thro! an error in8icating Invali8 payment amount.
 If the car8 num4er is not provi8e8 or is not a vali8 cre8it car8 num4er, thro! an error in8icating Invali8
car8 num4er.
 If the expiration 8ate is not provi8e8 or is in the past, thro! an error in8icating Invali8 expiration 8ate.  */

 function processPayment(amount, cardNumber, expirationDate) {
    if (amount <= 0) {
        throw new Error('Invalid payment amount');
    }
    if (!cardNumber || !isValidCardNumber(cardNumber)) {
        throw new Error('Invalid card number');
    }
    if (!expirationDate || isCardExpired(expirationDate)) {
        throw new Error('Invalid expiration date');
    }

    console.log('Payment processed successfully');
}

function isValidCardNumber(cardNumber) {
    return /^[0-9]{13,19}$/.test(cardNumber);
}

function isCardExpired(expirationDate) {
    const now = new Date();
    const [month, year] = expirationDate.split('/');
    const expDate = new Date(`${year}-${month}-01`);
    expDate.setMonth(expDate.getMonth() + 1);

    return now > expDate;
}

// Example usage
try {
    processPayment(-100, '1234567812345678', '08/2024');
} catch (error) {
    console.error('Payment error:', error.message);
}

try {
    processPayment(100, '12345678', '08/2024');
} catch (error) {
    console.error('Payment error:', error.message);
}

try {
    processPayment(100, '1234567812345678', '08/2022');
} catch (error) {
    console.error('Payment error:', error.message);
}

try {
    processPayment(100, '1234567812345678', '08/2024');
} catch (error) {
    console.error('Payment error:', error.message);
}

