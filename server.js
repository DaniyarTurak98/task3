const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const normalize = (value) => {
    if (typeof value !== "string") return null;
    const cleaned = value.replace(/[{}]/g, "");
    if (cleaned === "") return null;
    return cleaned;
};

app.get("/daniyarturak_gmail_com", (req, res) => {
    const xStr = normalize(req.query.x);
    const yStr = normalize(req.query.y);

    if (!xStr || !yStr) {
        return res.send("NaN");
    }

    let x, y;

    try {
        x = BigInt(xStr);
        y = BigInt(yStr);
    } catch (e) {
        return res.send("NaN");
    }

    if (x <= 0n || y <= 0n) {
        return res.send("NaN");
    }

    const gcd = (a, b) => (b === 0n ? a : gcd(b, a % b));
    const lcm = (x / gcd(x, y)) * y;

    return res.send(lcm.toString());
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
