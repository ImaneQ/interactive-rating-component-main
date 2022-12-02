

// let circles = document.querySelectorAll('li.grey');

// circles.forEach(function (circle) {
//     circle.addEventListener('click', function () {
//         this.style.backgroundColor = 'grey';


//     });
// })


// const container = document.querySelector('.ulbutton');
const items = document.querySelectorAll('li.grey');

items.forEach(function (e) {
    const elClass = e.target.classList
    if (!elClass.contains('active')) {
        items.addEventListener('click',
            item => item.classList.remove('active')
        )
        console.log(e.target.getAttribute("data-rate"));
        elClass.add('active')
    }
})


