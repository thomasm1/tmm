const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Thomas', lastName: 'Milton'},
    {id: 2, firstName: 'Thomas', lastName: 'Maestas'},
    {id: 3, firstName: 'Milton', lastName: 'Maestas'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);