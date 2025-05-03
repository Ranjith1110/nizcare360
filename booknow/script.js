document.getElementById('otp-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const countryCode = document.getElementById('country-code').value;
    const mobileNumber = document.getElementById('mobile-number').value;
    const fullNumber = countryCode + mobileNumber;

    fetch('send_otp.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'phone=' + encodeURIComponent(fullNumber)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('otp-message').textContent = data.message;
        })
        .catch(err => {
            console.error('Error:', err);
        });
});