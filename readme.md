![Badge in Development](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

# API_ERP (back-end)

- ERP system that seeks to give the user greater control over their product stock, simplifying data monitoring and facilitating bureaucratic processes through an intuitive interface and easy data reading.

## 🛠️ Technologies used:

- ``Javascript ES6``
- ``Express``
- ``PostgreSQL``
- ``Sequelize``
- ``JWToken``

## Functionalities

- Authentication.
- User registration
- Product Registration
- File upload
- Issuing reports
- Inventory control
- Data listing


## API documentation

#### Returns all products

```bash
  GET /api/produtos/?limit=1000
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `limit` | `number` | limit of items (default = 1000) |



## ✔️ To run the project:

Clone the project

```bash
  git clone https://github.com/Dav1dSo/API_ERP.git
```

Enter the project directory

```bash
  cd API_ERP
```

Install dependencies

```bash
  npm install
```

After configuring the database, start the server

```bash
  npm run dev
```