---

iChat App - Real-Time Chat Application 
🚀 A MERN Stack Chat App with Socket.io for Real-Time Messaging  

---

## 📌 Features
✅ Real-time messaging using Socket.io 
✅ User authentication with JWT  
✅ MongoDB as a database (AWS RDS optional)  
✅ Responsive React.js frontend  
✅ Hosted backend on AWS EC2  
✅ Frontend deployment using AWS S3 & CloudFront  
✅ Secure with HTTPS, CORS, and authentication middleware  

---

## 🛠️ Technologies Used  
- Frontend: React.js, HTML, CSS  
- Backend: Node.js, Express.js  
- Database: MongoDB (Local/Atlas/AWS RDS)  
- WebSockets: Socket.io for real-time messaging  
- Authentication: JWT (JSON Web Tokens)  
- Hosting: AWS EC2 (Backend), AWS S3 + CloudFront (Frontend)  
- Monitoring & Security: AWS CloudWatch, IAM Roles, Security Groups  

---

## 🚀 Installation & Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/sakshamx25/Chat-App.git
cd Chat-App
```

### 2️⃣ Install Dependencies 
Backend Setup
```bash
cd backend
npm install
```

### Frontend Setup 
```bash
cd frontend
npm install
```

---

## 🖥️ Running the App Locally  

### 1️⃣ Start the Backend Server  
```bash
cd backend
node server.js
```

### 2️⃣ Start the Frontend  
```bash
cd frontend
npm start
```

---

## 🌐 Deployment on AWS  

### 1️⃣ Backend Deployment on AWS EC2  
1. Launch an EC2 Instance with Ubuntu or Amazon Linux 2  
2. Connect via SSH  
   ```bash
   ssh -i your-key.pem ec2-user@your-ec2-ip
   ```
3. Install Node.js & Git  
   ```bash
   sudo yum update -y
   sudo yum install -y nodejs git
   ```
4. Clone the repository and install dependencies  
   ```bash
   git clone https://github.com/sakshamx25/Chat-App.git
   cd Chat-App/backend
   npm install
   ```
5. Start the backend using PM2  
   ```bash
   npm install -g pm2
   pm2 start server.js --name chat-app
   pm2 save
   pm2 startup
   ```

---

### 2️⃣ Frontend Deployment on AWS S3  
1. Build the frontend  
   ```bash
   cd frontend
   npm run build
   ```
2. Create an AWS S3 Bucket and upload the build/ folder  
3. Enable Static Website Hosting in the S3 bucket  
4. (Optional) Set up CloudFront CDN for better performance  

---

## 🛠️ Environment Variables (.env file)  
Create a .env file in the **backend** folder with the following:  
```plaintext
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
CLIENT_URL=http://your-frontend-url
```

---

## 📸 Screenshots  
![image](https://github.com/user-attachments/assets/a19a75bf-b977-4e3f-add1-b8632772a9b1)

![iChatApp](https://github.com/user-attachments/assets/76abce24-de86-41b8-a1d2-b8699e6e71c6)



---

## 👨‍💻 Contributors  
- Saksham Singh: ([@sakshamx25](https://github.com/sakshamx25))  

---

## 📜 License  
This project is licensed under the **MIT License.  

---

## 🌟 Show Your Support  
Give this project a ⭐️ if you like it! 🚀  

---

### 🔗 GitHub Repository:  
[https://github.com/sakshamx25/Chat-App](https://github.com/sakshamx25/Chat-App)  
