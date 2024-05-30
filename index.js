const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const WEBHOOK_SECRET = 'your-secret-token';

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
    const token = req.headers['x-webhook-token'];

    if (token !== WEBHOOK_SECRET) {
        return res.status(403).send('Forbidden');
    }

    console.log('Received webhook:', req.body);

    // Respond with a 200 status code to acknowledge receipt
    res.status(200).send('Webhook received');
});

app.listen(port, () => {
    console.log(`Webhook listener running on port ${port}`);
});
