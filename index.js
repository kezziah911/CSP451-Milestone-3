const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

app.post('/order', (req, res) => {
  const { productId, name, stock, correlationId } = req.body;

  console.log('\n[📦 NEW ORDER]');
  console.log(`Product ID: ${productId}`);
  console.log(`Name: ${name}`);
  console.log(`Stock: ${stock}`);
  console.log(`Correlation ID: ${correlationId}`);

  res.json({
    status: 'confirmed',
    orderId: `ORD-${Math.floor(Math.random() * 1000000)}`,
    received: true
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Supplier API running at http://localhost:${PORT}`);
});
