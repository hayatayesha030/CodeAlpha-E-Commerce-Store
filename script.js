let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    alert("Product added to cart!");
}

function showCart() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Your Cart:\n\n";
    let total = 0;

    cart.forEach(function(item, index) {
        message +=
            (index + 1) +
            ". " +
            item.name +
            " - Rs. " +
            item.price +
            "\n";

        total += item.price;
    });

    message += "\nTotal Amount: Rs. " + total;
    message += "\n\nDo you want to place this order?";

    const confirmOrder = confirm(message);

    if (confirmOrder) {
        alert("Order placed successfully!\n\nTotal: Rs. " + total);

        cart = [];

        const cartCount = document.getElementById("cart-count");

        if (cartCount) {
            cartCount.textContent = "0";
        }
    }
}

function scrollToProducts() {
    const products = document.getElementById("products");

    if (products) {
        products.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password!");
    }
}