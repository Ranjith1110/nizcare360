


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

const chartDataSets = {
    // In "date"
    date: {
        labels: Array.from({ length: 10 }, (_, i) => `2025-07-${String(i + 1).padStart(2, '0')}`),
        datasets: [
            {
                label: 'Walkin',
                data: [10, 12, 14, 11, 15, 18, 16, 17, 15, 14],
                borderColor: '#1da69a',
                backgroundColor: 'rgba(29,166,154,0.2)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Treatment',
                data: [4, 5, 6, 5, 7, 8, 6, 5, 7, 6],
                borderColor: '#f87171',
                backgroundColor: 'rgba(248,113,113,0.2)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Others',
                data: [2, 3, 2, 4, 3, 5, 4, 3, 2, 3],
                borderColor: '#ffc107',
                backgroundColor: 'rgba(255,193,7,0.2)',
                fill: true,
                tension: 0.4
            }
        ]
    },// Updated JavaScript Data Set for month
    month: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Walkin',
                data: [100, 120, 130, 110, 140, 160, 180, 175, 185, 190, 195, 200],
                borderColor: '#1da69a',
                backgroundColor: 'rgba(29,166,154,0.2)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Treatment',
                data: [50, 60, 70, 65, 80, 90, 95, 85, 88, 92, 97, 100],
                borderColor: '#f87171',
                backgroundColor: 'rgba(248,113,113,0.2)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Others',
                data: [20, 25, 30, 28, 35, 40, 45, 42, 43, 45, 47, 50],
                borderColor: '#ffc107',
                backgroundColor: 'rgba(255,193,7,0.2)',
                fill: true,
                tension: 0.4
            }
        ]
    },// In "year"
    year: {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [
            {
                label: 'Walkin',
                data: [800, 1000, 900, 1100, 1300, 1400, 1500],
                borderColor: '#1da69a',
                backgroundColor: 'rgba(29,166,154,0.2)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Treatment',
                data: [400, 450, 500, 550, 600, 700, 750],
                borderColor: '#f87171',
                backgroundColor: 'rgba(248,113,113,0.2)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Others',
                data: [200, 250, 240, 270, 300, 330, 350],
                borderColor: '#ffc107',
                backgroundColor: 'rgba(255,193,7,0.2)',
                fill: true,
                tension: 0.4
            }
        ]
    }
};

const lineChartCtx = document.getElementById('lineChart').getContext('2d');
let lineChartInstance = new Chart(lineChartCtx, {
    type: 'line',
    data: chartDataSets.date,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom' },
            tooltip: { mode: 'index', intersect: false },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Count'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Date'
                }
            }
        }
    }
});

document.querySelectorAll('input[name="options"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const selected = radio.id.replace('option', '').toLowerCase();
        lineChartInstance.data = chartDataSets[selected];
        lineChartInstance.options.scales.x.title.text =
            selected === 'date' ? 'Date' : selected === 'month' ? 'Month' : 'Year';
        lineChartInstance.update();
    });
});

const doughnutChartCtx = document.getElementById('doughnutChart').getContext('2d');
const doughnutChartInstance = new Chart(doughnutChartCtx, {
    type: 'doughnut',
    data: {
        labels: ['Walkin', 'Treatment', 'Others'],
        datasets: [{
            label: 'Distribution',
            data: [50, 35, 15],
            backgroundColor: ['#1da69a', '#f87171', '#ffc107'],
            hoverOffset: 20
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom' }
        }
    }
});