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

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `limit` | `number` | limit of items (default = 1000) |

#### Returns product by code

```bash
  GET /api/produtos/getProduct?codProduct=12345
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `codProduct` | `number` | **Mandatory**. product code |

#### Returns products by category

```bash
  GET /api/produtos//getProduct/filter_categorie/:category
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `category` | `string` | **Mandatory**. product category |

#### Created product

```bash
  POST /api/produtos/createProduct
```

| Parameter    | Type      | Description                           |
| :----------- | :-------- | :---------------------------------- |
| `cod`        | `integer` | **Mandatory**. Produto code ( primarykey - unique )   |
| `name`       | `string`  | **Mandatory**. Product name      |
| `price`      | `floar`   | **Mandatory**. Product price     |
| `description`| `string`  | **Mandatory**. Product description | 
| `image`      | `string`  | **Mandatory**. URL image        |
| `stock`      | `integer` | **Mandatory**. Product stock   |
| `sold`       | `integer` | Products solds ( default = 0 )             |
| `category`   | `string`  | **Mandatory**. Product category|


#### Returns products filtreds by price

```bash
  GET /api/produtos/filterValue?initialValue=100&finalValue=301
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `initialValue` | `integer` | **Mandatory**. Value initial |
| `finalValue` | `integer` | **Mandatory**. Value final |


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

After configuring the database in .env and config/ config.json run the migrations creating the tables

```bash
  npx sequelize-cli db:migrate
```
Start the server

```bash
  npm run dev
```