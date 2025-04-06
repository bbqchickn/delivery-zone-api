# Delivery Zone Checker API 🚚

API para validar si un barrio/zona está dentro del área de cobertura de domicilios del restaurante.

## 🚀 Endpoint

POST `/check-delivery-zone`

### Body JSON

```json
{
  "zoneName": "Villa Estadio"
}
```

### Respuesta

```json
{
  "isDeliverable": true
}
```

---

## 🧑‍💻 Cómo ejecutar

```bash
npm install
npm start
```
