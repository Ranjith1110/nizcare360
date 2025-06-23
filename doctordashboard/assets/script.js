// js/load-sidebar.js

fetch('sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar-container').innerHTML = data;
    })
    .catch(error => {
        console.error('Error loading sidebar:', error);
    });


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



// const doughnutChartCtx = document.getElementById('doughnutChart').getContext('2d');
// const doughnutChartInstance = new Chart(doughnutChartCtx, {
//     type: 'doughnut',
//     data: {
//         labels: ['Walkin', 'Treatment', 'Others'],
//         datasets: [{
//             label: 'Distribution',
//             data: [50, 35, 15],
//             backgroundColor: ['#1da69a', '#f87171', '#ffc107'],
//             hoverOffset: 20
//         }]
//     },
//     options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//             legend: { position: 'bottom' }
//         }
//     }
// });