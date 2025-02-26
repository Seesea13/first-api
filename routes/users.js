const express = require('express');
const router = express.Router();

let users = [];  // Προσωρινή αποθήκευση χρηστών

// Endpoint για εγγραφή χρήστη
router.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Απλός έλεγχος αν ο χρήστης υπάρχει ήδη
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: "Ο χρήστης υπάρχει ήδη!" });
    }

    const newUser = { username, email, password };
    users.push(newUser);
    res.status(201).json({ message: "Επιτυχής εγγραφή!", user: newUser });
});

// **ΠΡΟΣΘΗΚΗ ΕΞΑΓΩΓΗΣ**
module.exports = router;

