document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    document.querySelector('.product-info').appendChild(button);

    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});

