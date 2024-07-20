const express = require('express');
const twilio = require('twilio');
const cors = require('cors')

const app = express();
const accountSid = 'AC34523b4fc118be987ae0704642099a3f'; // Your Account SID from www.twilio.com/console
const authToken = 'c16013ecbf909afe3a1c2c41f843f4b9';   // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);

app.use(express.json());
app.use(cors())

app.post('/send-message', async (req, res) => {
    const { to, messageBody } = req.body;

    try {
        const message = await client.messages.create({
            body: messageBody,
            from: '+1 909 906 9941', // Your Twilio number
            to: `+91${to}` // Ensure the number is in E.164 format
        });
        console.log(message)

        res.status(200).send({ success: true, messageSid: message.sid });
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, error: error.message });
    }
});


app.post('/send-whatsapp', async (req, res) => {
    const { to, messageBody } = req.body;
    const from = '+14155238886'

    try {
        const message = await client.messages.create({
            body: messageBody,
            from: `whatsapp:${from}`,
            to: `whatsapp:+91${to}`   
        });

        console.log(message)
        res.status(200).send({ success: true, messageSid: message.sid });
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, error: error.message });
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
