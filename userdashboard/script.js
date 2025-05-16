
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.add("show");
    overlay.classList.add("show");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
});

var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(toggle => {
    const icon = toggle.querySelector('.arrow-icon');
    const target = document.querySelector(toggle.getAttribute('href'));

    target.addEventListener('show.bs.collapse', () => {
        icon.classList.add('rotate');
    });

    target.addEventListener('hide.bs.collapse', () => {
        icon.classList.remove('rotate');
    });
});

const videoModal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('exerciseVideo');
const videoSource = videoPlayer.querySelector('source');

videoModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget;
    const videoUrl = button.getAttribute('data-video');
    videoSource.src = videoUrl;
    videoPlayer.load();
    videoPlayer.play();
});

videoModal.addEventListener('hidden.bs.modal', () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
});


const viewToggleButton = document.getElementById('toggleViewBtn');
const extraCards = document.getElementById('extra-cards');

viewToggleButton.addEventListener('click', () => {
    const isVisible = !extraCards.classList.contains('d-none');

    if (isVisible) {
        extraCards.classList.add('d-none');
        viewToggleButton.textContent = 'View All';
    } else {
        extraCards.classList.remove('d-none');
        viewToggleButton.textContent = 'View Less';
    }
});



