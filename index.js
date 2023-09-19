const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());



function findHighestAlphabet(alphabets) {
    return alphabets.reduce((highest, current) => current > highest ? current : highest);
}


app.post('/bfhl', (req, res) => {
    const user_id = "shikhar_rai_31012002";
    const email_id="shikhar.rai2020@vitbhopal.ac.in";
    const roll_number  = "20BCE10540";
    const { inputArray } = req.body; 
    const is_success = true; 
    const alphabets = inputArray.filter(item => isNaN(item));
    const numbers = inputArray.filter(item => !isNaN(item));

    const highest_alphabet = findHighestAlphabet(alphabets);

    const response = {
        status: is_success,
        user_id,
        college_email_id: email_id,
        college_roll_number: roll_number,
        array_for_numbers: numbers,
        array_for_alphabets: alphabets,
        highest_alphabet,
    };

    res.json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    const operation_code = 1; 
    res.status(200).json({ operation_code });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
