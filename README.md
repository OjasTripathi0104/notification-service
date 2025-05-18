A full-stack service notification service that allows sending and viewing notifications via Email, SMS, and In-App methods. Built with React, Node.js, MongoDB.

**Features:**
1) Send notifications by type: Email, SMS, In-App
2) View notifications by user ID
3) Email/SMS sending with real service support
4) MongoDB-based storage
5) Responsive UI with gradient styling

**Tech Stack:**
1) Frontend: React (Vite)
2) Backend: Node.js (Express)
3) Database: MongoDB
4) Email: Nodemailer
5) SMS: Twilio

**Setup Instructions:**
1) Backend <br />
(i) Clone the repository <br />
git clone https://github.com/OjasTripathi0104/notification-service.git <br />
cd backend <br />
(ii) Install dependencies <br />
npm install <br />
(iii) Create .env file: <br />
PORT=5000 <br />
MONGO_URI=mongodb://localhost:27017/notificationDB <br />
EMAIL_USER=your_email@gmail.com <br />
EMAIL_PASS=your_app_password <br />
TWILIO_SID=your_twilio_sid <br />
TWILIO_AUTH=your_twilio_auth_token <br />
TWILIO_PHONE=+1xxxxxxxxxx <br />
(iv) Run backend <br />
npx nodemon app.js

2) Frontend
(i) Go to the frontend directory <br />
cd ../frontend <br />
(ii) Install dependencies <br />
npm install <br />
(iii) Start the server <br />
npm run dev 

**Assumptions Made:**
1) userId is assumed to be: an email address for Email notifications, a phone number for SMS notifications and any string for In-App notifications.
2) Email is sent using Nodemailer with Gmail SMTP (App password required)
3) SMS is sent using Twilio
4) Notifications are instantly stored and marked as either sent or failed (no queue implementation yet)
5) No authentication layer is added for simplicity

**To Do:**
1) Integrate RabbitMQ or Kafka
2) Add user authentication (JWT)
3) Add retry logic for failed messages


