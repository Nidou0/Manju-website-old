const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises'); // Using fs.promises for asynchronous file operations
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.post('/api/submitForm', async (req, res) => {
  const formData = req.body;

  // Log the form data
  console.log('Received form data:', formData);

  // Store the form data in a JSON file
  const filePath = 'form_data.json';

  try {
    // Read existing data from the file
    const existingData = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(existingData);

    // Add the new form data to the array
    jsonData.push(formData);

    // Write the updated data back to the file
    await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));

    console.log('Form data saved to the file:', formData);
    res.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving form data to the file:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});