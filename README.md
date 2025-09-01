# HealthMonitor

A full-stack web application for monitoring, storing, and analyzing health-related data.  
This project integrates a **React frontend**, a **Node.js/Express backend** with **MongoDB**, and a **Python FastAPI service** for machine learning–based predictive analytics.

---

## 🚀 Features
- **User Authentication** (bcrypt password hashing + Google OAuth)
- **Health Data Submission** (forms and document uploads)
- **File Upload Support** using Multer & Form-data
- **Predictive Analytics** powered by XGBoost and other ML models
- **Interactive Dashboard** for displaying health data and results
- **Modular Architecture** (separate client, server, and ML services)

---

## 🏗️ Project Structure
HealthMonitor/
│
├── backend/ # Node.js + Express server
│ ├── routes/ # API routes
│ ├── models/ # MongoDB schemas
│ └── server.js # Server entry point
│
├── client/ # React frontend
│ ├── src/ # React components and views
│ └── package.json
│
├── models/ # Machine learning service (FastAPI + Python)
│ ├── main.py # FastAPI entry point
│ └── model.pkl # Trained ML model
│
└── README.md


---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/siamarefin/HealthMonitor.git
cd HealthMonitor

cd backend
npm install
npm install express mongoose cors bcryptjs nodemon multer form-data google-auth-library axios
npm start   # or nodemon server.js

cd client
npm install
npm install react-router-dom axios
npm start
cd models
pip install -r requirements.txt
uvicorn main:app --reload


📡 Tech Stack

Frontend: React, React Router, Axios, CSS

Backend: Node.js, Express, MongoDB, Mongoose, BcryptJS, Multer

ML Service: Python, FastAPI, XGBoost, Joblib, Scikit-learn, Pydantic

Other Tools: Nodemon, CORS, Google OAuth Library

🔑 API Endpoints (Examples)
Method	Endpoint	Description
POST	/api/register	Register new user
POST	/api/login	User login
POST	/api/upload	Upload health documents
POST	/api/predict	Send health data for ML pred
📊 Future Improvements

Richer data visualizations in dashboard

Advanced ML models (deep learning, medical image analysis)

Cloud deployment on AWS / GCP / Heroku

Role-based authentication and access control

CI/CD pipelines for testing and deployment

📜 License

This project is licensed under the MIT License.

👨‍💻 Author

Siam Arefin
GitHub: @siamarefin




#install packages

```
npm install express mongoose cors bcryptjs react-router-dom google-auth-library axios multer form-data
```
# cd backend 

```
python3 -m venv myenv
source myenv/bin/activate
```


# backend run

```
npx nodemon server.js
```

# frontend running

```
npm start
```

# fast api run

```
cd backend
uvicorn code:app --reload --port 8000
```

# pip install backend

```
pip install fastapi pydantic uvicorn joblib pandas langchain python-dotenv fastapi pymupdf xgboost langchain-google-genai python-multipart
```

# client install

```
npm install axios assert @craco/craco url stream-browserify
```
