VanillaTilt.init(document.querySelectorAll(".soci li a"), {
    max: 30,
    speed: 400,
    glare: true,
    "max-glare": 1,
});

let list = document.querySelectorAll('.soci li');
let bg = document.querySelector('.socialMedia');
list.forEach(elements => {
    elements.addEventListener('mouseenter', function(event) {
        let color = event.target.getAttribute('data-color');
        bg.style.backgroundColor = color;
    })
    elements.addEventListener('mouseleave', function(event) {
        bg.style.backgroundColor = '#fff';
    })
})