


document.addEventListener("DOMContentLoaded", function () {
    let timelineItems = document.querySelectorAll(".timeline-item");

    timelineItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
    });

    setTimeout(() => {
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
                item.style.transition = "all 0.5s ease-in-out";
            }, index * 300);
        });
    }, 500);
});


document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        let targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 100, 
                behavior: "smooth"
            });
        }
    });
});

