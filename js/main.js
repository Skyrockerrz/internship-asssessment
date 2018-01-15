var DOM = {
    ids: {
        cart: document.getElementById('cart')
    },
    classes: {
        add: document.querySelectorAll('.add'),
        remove: document.querySelectorAll('.remove'),
        addToCart: document.querySelectorAll('.add-to-cart'),
        numberOfItems: document.querySelectorAll('.number-of-items'),
        productResults: document.querySelector('.products-results'),
        cartAmount: document.querySelector('.cart-amount')
    }
};

var targets = {
    addToCartButton: 'add-to-cart__button',
    removeFromCart: 'remove-from-cart',
    add: 'add',
    remove: 'remove'
};

// Carousel initialization

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

// Accordion
var accordion = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active-item');
    });
}

//GRID/LIST VIEW
var gridButton = document.querySelector('.th-icon');
var grid = document.querySelectorAll('.grid-container');
var listButton = document.querySelector('.list-icon');


listButton.addEventListener('click', function () {

    for (var i = 0; i < grid.length; i++) {
        grid[i].classList.toggle('list-view');
    }
});
gridButton.addEventListener('click', function () {

    for (var i = 0; i < grid.length; i++) {
        grid[i].classList.remove('list-view');
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth < 767) {
        for (var i = 0; i < grid.length; i++) {
            grid[i].classList.remove('list-view');
        }
    }
});

var handleAddToCart = function (target) {
    // if (target.classList.contains(targets.removeFromCart)) {
    //     target.firstChild.innerHTML = 'Add to Cart';
    // }
    // if (target.parentNode.classList.contains(targets.removeFromCart)) {
    //     target.firstChild.parentNode.innerHTML = 'Add to Cart';
    // }
    //
    // if (target.classList.contains(targets.addToCartButton)) {
    //     target.classList.toggle('remove-from-cart');
    //     target.firstChild.innerHTML = 'Remove from Cart';
    // }
    // if (target.parentNode.classList.contains(targets.addToCartButton)) {
    //     target.parentNode.classList.toggle('remove-from-cart');
    //     target.firstChild.parentNode.innerHTML = 'Remove from Cart';
    // }
    var cartAmount = parseInt(DOM.classes.cartAmount.innerHTML);
    DOM.classes.cartAmount.innerHTML = String(++cartAmount);
};

var handleAdd = function (target) {
    var previousSibling = target.previousElementSibling || target.parentNode.previousElementSibling;
    var addAmount = parseInt(previousSibling.textContent);
    previousSibling.innerHTML = String(++addAmount);
};

var handleRemove = function (target) {
    var nextSibling = target.nextElementSibling || target.parentNode.nextElementSibling;
    var removeAmount = parseInt(nextSibling.textContent);
    nextSibling.innerHTML = removeAmount === 0 ? 0 : String(--removeAmount);
};

DOM.classes.productResults.addEventListener('click', function (event) {
    var target = event.target;
    if (target.tagName === 'BUTTON' && target.classList.contains(targets.addToCartButton) ||
        target.parentNode.tagName === 'BUTTON' && target.parentNode.classList.contains(targets.addToCartButton)
    ) {
        handleAddToCart(target);
    }
    if (target.tagName === 'A' && target.className === targets.add ||
        target.parentNode.tagName === 'A' && target.parentNode.className === targets.add
    ) {
        handleAdd(target);
    }
    if (target.tagName === 'A' && target.className === targets.remove ||
        target.parentNode.tagName === 'A' && target.parentNode.className === targets.remove
    ) {
        handleRemove(target);
    }
});

