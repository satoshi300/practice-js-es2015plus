const inputsList = document.getElementsByClassName('cart__quantity');
const totalPriceEl = document.querySelector('.cart__total-price')
const btnEl = document.querySelector('button');

const cartCalculate = () => {
    let totalSum = 0;
    Array.from(inputsList).forEach(input => {
        const { price } = input.dataset;
        const quantity = Number.parseFloat(input.value)
        const unit = Number.parseFloat(price)
        totalSum += unit * quantity;
        console.log(totalSum)
    });
    totalPriceEl.textContent = totalSum;
}

btnEl.addEventListener('click', cartCalculate)
