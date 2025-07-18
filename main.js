window.addEventListener('scroll', function() {  
    const navbar = document.querySelector('.navbar');
    const pageFiner = document.querySelectorAll('.elements');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                let className = entry.target.classList[2];
                if(navbar.classList.length > 1){
                    navbar.classList.remove(navbar.classList[1]);
                }
                navbar.classList.add(className);
            }
        });
    }, {
        threshold: 0.4
    });
    pageFiner.forEach(heading => observer.observe(heading));
});

document.querySelectorAll('.navbar ul li a').forEach(item => {
    const navbar = document.querySelector('.navbar');
    let hoverClass = '';

    item.addEventListener('mouseover', function() {
 
        if(navbar.classList.length > 1){
            hoverClass = navbar.classList[1];
            navbar.classList.remove(navbar.classList[1]);
        }
        navbar.classList.add(document.querySelector(`.${item.innerHTML.toLowerCase()}`).classList[2]);

        item.style.borderBottom = '2px solid #ffffffff';
        item.style.color = '#fff';
    });

    item.addEventListener('mouseout', function() {
        if(navbar.classList.length > 1){
            navbar.classList.remove(navbar.classList[navbar.classList.length-1]);
            navbar.classList.add(hoverClass);
        }
        item.style.borderBottom = '';
        item.style.color = '';
    });
});