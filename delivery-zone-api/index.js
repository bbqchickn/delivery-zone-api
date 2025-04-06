const express = require('express');
const app = express();
const zonasPermitidas = require('./zonas.json');
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/check-delivery-zone', (req, res) => {
  const { zoneName } = req.body;

  if (!zoneName) {
    return res.status(400).json({ error: 'zoneName es requerido' });
  }

  const isDeliverable = zonasPermitidas.includes(zoneName.trim());
  return res.status(200).json({ isDeliverable });
});

app.get('/', (req, res) => {
  res.send('🚀 Delivery Zone Checker API funcionando');
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
