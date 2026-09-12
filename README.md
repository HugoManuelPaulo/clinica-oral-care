# Dental Appointment Management System 🦷

A web application for managing dental appointments, developed as the final graduation project for my B.Sc. in Software Engineering at UNIGRAN.

## Features

- Patient registration and history
- Appointment scheduling with FullCalendar
- Appointment cancellation and rescheduling
- Dental procedure records
- Specialist schedule management
- Email confirmations and reminders
- Informational health-insurance field
- Role-based access for patients, dentists and receptionists
- Password recovery workflow

## Technologies

- PHP 8.2
- MySQL
- JavaScript
- Bootstrap 5
- FullCalendar
- SendGrid API
- PHPMailer
- Composer

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/hugomanuelpaulo/clinica-oral-care.git
cd clinica-oral-care
```

### 2. Install dependencies

```bash
composer install
```

### 3. Configure the environment

Create a local environment file based on `.env.example` and provide your own credentials:

```env
SENDGRID_API_KEY=YOUR_KEY_HERE
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_DATABASE=teste_db
```

Do not commit real credentials.

### 4. Prepare the database

Create the MySQL database and import the SQL script included with the project.

### 5. Run locally

Use a local PHP environment such as XAMPP or WAMP, then open:

```text
http://localhost/clinica-oral-care
```

## Security notes

- PHP sessions are used for access control by user role.
- Environment-specific configuration and credentials must remain outside version control.
- Passwords should be handled with `password_hash()` and `password_verify()`.
- This is an academic project and should receive a full security review before production use.

## Academic context

- **Degree:** B.Sc. in Software Engineering
- **Institution:** Centro Universitário da Grande Dourados (UNIGRAN)
- **Year:** 2025

## Author

Hugo Manuel Rodrigues Paulo
