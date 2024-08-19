# Menu Management Backend Server

This is a Node.js backend server for managing menus, divided into categories, subcategories, and items. The server is built using Express.js and can be easily tested using Postman.

## Table of Contents
- [Features](#features)
- [Project Setup](#project-setup)
- [API Endpoints](#api-endpoints)
  - [Category](#category)
  - [Subcategory](#subcategory)
  - [Items](#items)
  - [Search](#search)
- [Postman Collection](#postman-collection)
- [Notes](#notes)

## Features
- Create, retrieve, update, and delete categories, subcategories, and items.
- Search items by name.
- Basic CRUD operations using RESTful APIs.

## Project Setup

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/i9shubham/menu_management.git
   cd menu-management
   ```
2. Install dependencies:
  ```bash
  npm install
  ```
3. Create a .env file in the root directory and add your environment variables (e.g., database connection string) or copy and paste follwing env (make sure you have MongoDB installed).

  ```bash
  DB_URL = 'mongodb://localhost:27017/menu_management'
  PORT = 3000
  ```
4. Start the development server:

  ```bash
  npm start
  ```

## API Endpoints
### Category
1. Create Category

  **Endpoint:** POST /api/categories  
  **Attributes:**  
  name (String),  
  image (URL),  
  description (String),  
  taxApplicability (Boolean),  
  tax (Number),  
  taxType (String),  

2. Get All Categories

**Endpoint:** GET /api/categories

3. Get Category by ID 

**Endpoint:** GET /api/categories/:id

4. Edit Category

**Endpoint:** PUT /api/categories/:id

### Subcategory
1. Create Subcategory

**Endpoint:** POST /api/categories
**Attributes:**  
name (String)  
image (URL)  
description (String)  
taxApplicability (Boolean)  
tax (Number)  

2. Get All Subcategories  

**Endpoint:** GET /api/subcategories

3. Get All Subcategories Under a Category

**Endpoint:** GET /api/subcategories/filters?category=:category

4. Get Subcategory by ID

**Endpoint:** GET /api/subcategories/:id or GET /api/subcategories/filters?id=:id

5. Edit Subcategory

**Endpoint:** PUT /api/subcategories/:id  
**Attributes:**  
name (String)  
image (URL)  
description (String)  
taxApplicability (Boolean)  
tax (Number)  

### Items
1. Create Item

**Endpoint:** POST /api/items
**Attributes:**
name (String)  
image (URL)  
description (String)  
taxApplicability (Boolean)  
tax (Number)  
baseAmount (Number)  
discount (Number)  
totalAmount (Number)  

2. Get All Items

**Endpoint:** GET /items

3. Get All Items Under a Category

**Endpoint:** GET /api/items/filters?category=:category

4. Get All Items Under a Subcategory

**Endpoint:** GET /api/items/filtes?subCategory=:subCategory

5. Get Item by ID

**Endpoint:** GET /api/items/:id or GET /api/items/filters?id=:id

6. Edit Item

**Endpoint:** PUT /api/items/:id

### Search
1. Search Item by Name or other Filters
**Endpoint:** GET /api/items/filters?name=:name

## Postman Collection
Please find post collection here https://github.com/i9shubham/Menu_Management/blob/main/menu_management.postman_collection.json or import **menu_management.postman_collection.json** file from the repo into postman for the testing of APIs.

## Notes
- You can use Postman to test the API endpoints. Import the collection provided in the postman_collection.json file to get started.
- Make sure you should install dependencies and the Node.js as prerequisite.
