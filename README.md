# E-Commerce App - React & Express with MongoDB

This project allows users to:
- Register and log in.
- Buy and view products.

## 🔹 Tech Stack
- **Frontend:** React  
- **Backend:** Express  
- **Database:** MongoDB  

---

## 🚀 Requirements
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

---

## 🔧 Setup

1. **Clone the repository**  
   ```bash
   git clone <repository-url>
   cd <project-folder>

2. **Install dependencies**
    Navigate to both client and server folders and run:
   ```bash
    npm install
3. **Set up environment variables in server**

    ```bash
    DB_URL=<YOUR_DB_URL>
    SECRET_KEY=<SECRET_KEY>
    PORT=<PORT_NUMBER>

4. **Set up environment variables in Client**
    ```bash
    BASE_URL=<SERVER_URL>

5. **insert the product data**
    ```bash
    cd server
    npm run seed:products

6. **Run the server**

    ```bash
    npm start 

7. **Run the Client**
    ```bash
    cd client
    npm start