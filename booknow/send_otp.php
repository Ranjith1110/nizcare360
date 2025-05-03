<?php
// send_otp.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $phone = $_POST['phone'];

    if (!$phone || strlen($phone) < 10) {
        echo json_encode(['message' => 'Invalid phone number.']);
        exit;
    }

    // Generate a random 6-digit OTP
    $otp = rand(100000, 999999);

    // TODO: Send this OTP via SMS gateway API (Twilio, MSG91, etc.)
    // For now, just simulate it
    // You can save this OTP to session or database to verify later

    // For example: echoing for simulation
    echo json_encode([
        'message' => "OTP $otp has been sent to $phone"
    ]);
} else {
    echo json_encode(['message' => 'Invalid request.']);
}
