# 🌾 AgriDirect - Digital Farm-to-Consumer Marketplace

## 📌 Project Overview

AgriDirect is a full-stack web application that connects farmers directly with customers, reducing the dependency on middlemen and ensuring fair pricing. 

The platform provides a multilingual interface, product marketplace, order management, role-based access control, and an AI-based crop price prediction system using Machine Learning.

---

## 🚀 Key Features

### 🔐 User Authentication & Role Management
- Secure user registration and login
- Role-based access:
  - 👨‍🌾 Farmer
  - 🛒 Customer
  - 👨‍💼 Admin
- Separate dashboards and functionalities for each role

---

### 🌱 Product Management
- Add, update, and delete agricultural products
- Upload product images
- Manage product quantity and stock availability
- Category-based product listing
- Product search and filtering

---

### 🛒 Customer Marketplace
- Browse fresh agricultural products
- Add products to cart
- Manage cart items
- Place orders directly from farmers
- View order details and status

---

### 📦 Order Management
- Order placement system
- Real-time inventory reduction after purchase
- Order status tracking:
  - Pending
  - Packed
  - Shipped
  - Delivered

---

### 🌍 Multilingual Support
The application supports:

- English 
- Hindi 
- Kannada 

This improves accessibility for farmers and customers from different regions.

---

### 🤖 AI Crop Price Prediction

A Machine Learning-based crop price forecasting module predicts the expected future crop price.

#### Inputs:
- Crop type
- Month
- Previous market price
- Current market price

#### Output:
- Predicted next week crop price
- Price trend (Increase 📈 / Decrease 📉)

#### Machine Learning Workflow:

```
Historical Crop Dataset
          |
          |
Random Forest Regression Model
          |
          |
Flask ML API
          |
          |
Spring Boot REST API
          |
          |
React User Interface
```

---

## 🛠️ Technology Stack

### Frontend
- React.js
- Bootstrap
- HTML5
- CSS3
- JavaScript

### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST APIs

### Database
- MySQL

### Machine Learning
- Python
- Pandas
- Scikit-Learn
- Random Forest Regression
- Flask API

### Development Tools
- VS Code
- Postman
- Git & GitHub
- Maven

---

## 🗄️ System Architecture

```
                  User
                    |
                    |
              React Frontend
                    |
                    |
          Spring Boot REST API
                    |
         ---------------------
         |                   |
       MySQL              Flask API
                              |
                              |
                    Random Forest Model
                              |
                              |
                   Historical Crop Dataset
```

---

## 📁 Project Structure

```
AgriDirect
│
├── frontend-1
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   ├── services
│   │   └── translations
│
├── backend-1
│   ├── src/main/java
│   │   ├── controller
│   │   ├── entity
│   │   ├── repository
│   │   └── config
│   │
│   └── resources
│
├── ai-model-1
│   ├── crop_prices.csv
│   ├── generate_dataset.py
│   ├── train_model.py
│   ├── crop_price_model.pkl
│   ├── label_encoder.pkl
│   └── app.py
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/Agri-Direct.git
cd AgriDirect
```

---

## 2. Setup MySQL Database

Create a database:

```sql
CREATE DATABASE agridirect;
```

Update database credentials in:

```
backend/src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/agridirect
spring.datasource.username=root
spring.datasource.password=your_password
```

---

## 3. Start Spring Boot Backend

Navigate to backend:

```bash
cd backend-1
```

Run:

```bash
mvnw spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

---

## 4. Start Machine Learning API

Open another terminal:

```bash
cd ai-model-1
```

Install dependencies:

```bash
pip install pandas scikit-learn flask numpy
```

Start Flask API:

```bash
python app.py
```

Runs on:

```
http://localhost:5000
```

---

## 5. Start React Frontend

Open another terminal:

```bash
cd frontend-1
```

Install dependencies:

```bash
npm install
```

Start application:

```bash
npm start
```

Runs on:

```
http://localhost:3000
```

---

## 📊 Machine Learning Model

Algorithm used:

```
Random Forest Regressor
```

The model is trained using historical agricultural price data with seasonal variations.

### Dataset Features

- Crop Name
- Month
- Previous Price
- Current Price

### Prediction

The model forecasts:

- Expected next week crop price
- Market trend

---

## 🔮 Future Enhancements

- Integration with real agricultural market datasets
- Weather-based crop price forecasting
- GPS-based nearby farmer discovery
- Online payment integration
- Mobile application support
- AI chatbot for farmers

---

## 👩‍💻 Developed By

**Sanjana Shetty**

Bachelor of Engineering  
Information Science & Engineering  
Sahyadri College of Engineering & Management

---


