const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/daniyarturak_gmail_com", (req, res) => {
    const x = Number(req.query.x);
    const y = Number(req.query.y);

    if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) {
        return res.send("NaN");
    }

    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const lcm = (x * y) / gcd(x, y);

    return res.send(String(lcm));
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
