# Record Management App

A simple full-stack technical assessment project built with:
- React (frontend)
- Django REST Framework (backend)
- PostgreSQL (database)

This project matches the assignment requirement to create, view, and update records with 10 fields.
[Project Demo Video](https://drive.google.com/file/d/1KJVhiQtpVllAUNymEe6KHH0XYvLffNhf/view?usp=sharing)

## Features
- Create record
- View records
- Update record
- Frontend validation
- Backend validation
- PostgreSQL persistence
- Clean separation between UI, API, and database layers

## Tech Stack
- Frontend: React + Vite + Axios
- Backend: Python + Django + Django REST Framework
- Database: PostgreSQL

## 10 Fields
- First Name
- Last Name
- Email
- Phone
- Company
- Designation
- City
- Country
- Experience (Years)
- Notes

## Architecture
```text
React UI -> Django REST API -> PostgreSQL
```

## 1. Install software
Make sure these are installed on your PC:
- VS Code
- Node.js and npm
- Python 3.11 or 3.12
- PostgreSQL
- Git

Check versions:
```bash
node -v
npm -v
python --version
pip --version
git --version
psql --version
```

## 2. PostgreSQL setup
Open PostgreSQL and create a database:
```sql
CREATE DATABASE records_db;
```

Default settings used in this project are:
- DB_NAME=records_db
- DB_USER=postgres
- DB_PASSWORD=postgres
- DB_HOST=localhost
- DB_PORT=5432

If your password is different, either:
1. change it in `backend/backend/settings.py`, or
2. set environment variables before running.

## 3. Backend setup
Open terminal from project root:
```bash
cd backend
python -m venv venv
```

Activate virtual environment on Windows:
```bash
venv\Scripts\activate
```

Install backend packages:
```bash
pip install -r requirements.txt
```

Run migrations:
```bash
python manage.py migrate
```

Start backend server:
```bash
python manage.py runserver
```

Backend URL:
```text
http://127.0.0.1:8000/
```

API URL:
```text
http://127.0.0.1:8000/api/records/
```

## 4. Frontend setup
Open a second terminal from project root:
```bash
cd frontend
npm install
npm run dev
```

Frontend URL:
```text
http://localhost:5173/
```

## 5. How to use
1. Open the frontend in browser
2. Fill the form
3. Click **Create Record**
4. See records in table
5. Click **Edit** to update a record
6. Save changes

## 6. API endpoints
### Create and list records
- `GET /api/records/`
- `POST /api/records/`

### Retrieve and update one record
- `GET /api/records/<id>/`
- `PUT /api/records/<id>/`

## 7. Validation rules
### Frontend
- Required: first name, last name, email, phone, city, country, experience
- Valid email format
- Phone must have at least 10 digits
- Experience cannot be negative

### Backend
- Unique email
- Phone validation
- Experience validation

## 8. Clear layer separation
### Frontend
- `App.jsx`: state management and API calls
- `RecordForm.jsx`: form UI
- `RecordList.jsx`: records table UI
- `api.js`: API configuration

### Backend / business logic
- `models.py`: database structure
- `serializers.py`: validation + JSON conversion
- `views.py`: API logic
- `urls.py`: endpoint routing

### Database
- PostgreSQL stores all record data permanently


## 11. Design decisions
- Used Django REST Framework for clean APIs
- Used PostgreSQL because it is mandatory in the assessment
- Used Vite React for simpler frontend setup
- Kept UI simple and readable instead of over-designing
- Added timestamps in model for future extension
- Kept modular structure for easy scaling

## 12. Trade-offs
- Delete functionality not included because the core requirement is create, view, and update
- Authentication not added to keep the project simple and focused
- Search and pagination left as future enhancement

## 13. Optional improvements you can add later
- Delete button
- Search box
- Pagination
- Authentication
- Docker
- Deployment

## 14. Common errors and fixes
### Error: `psycopg2.OperationalError`
Reason: PostgreSQL is not running or password is wrong.
Fix: Start PostgreSQL service and check DB credentials in settings.

### Error: `ModuleNotFoundError: No module named 'django'`
Reason: Virtual environment not activated or packages not installed.
Fix:
```bash
venv\Scripts\activate
pip install -r requirements.txt
```

### Error: frontend cannot fetch data
Reason: Backend is not running or CORS issue.
Fix:
- Run backend server
- Check `CORS_ALLOWED_ORIGINS`
- Ensure frontend uses `http://127.0.0.1:8000/api`


![Screenshot](https://github.com/Adi-an/record-management-app/blob/6356cc743a4697937eb3aa28a1540496ae4c6b99/Screenshot%202026-04-15%20185429.png)
