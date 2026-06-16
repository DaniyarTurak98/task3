const express = require('express');

const app = express();

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

app.get('/daniyarturak_gmail_com', (req, res) => {
    const x = Number(req.query.x);
    const y = Number(req.query.y);

    if (
        !Number.isInteger(x) ||
        !Number.isInteger(y) ||
        x <= 0 ||
        y <= 0
    ) {
        return res.send('NaN');
    }

    res.send(String((x * y) / gcd(x, y)));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
