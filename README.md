# WTWR (What to Wear?): Back End

This is the back-end repository for the WTWR (What to Wear) application. It provides a robust, production-ready RESTful API built to manage user authentication, clothing items, and weather-based suggestions, complete with request validation, automated logging, and centralized error handling.

## Running the Project

- `npm run start` — to launch the server in production environment.
- `npm run dev` — to launch the server with the hot reload feature (Nodemon) for development.

## Tech Stack & Ecosystem

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB & Mongoose (ODM)
- **Request Validation:** Celebrate & Joi
- **Logging Architecture:** Winston & Express-Winston
- **Security:** Bcryptjs (Password Hashing) & Jsonwebtoken (JWT Auth)
- **Process Management:** PM2
- **Web Server Configuration:** NGINX with Let's Encrypt SSL/TLS Encryption

## Production Features

- **Robust REST API:** Full CRUD operations for users and clothing items.
- **Centralized Error Handling:** Unified middleware wrapper with specialized HTTP error classes protecting server internals from leakages (safe 500 error shielding).
- **Automated Validation Middleware:** Pre-validation on all incoming endpoint payloads via `celebrate` to guarantee clean data input before hitting DB models.
- **Winston Request & Error Logging:** Automatic recording of all application layer traffic to local files (`request.log` and `error.log`) for advanced debugging and production audit.
- **Real-time Crash Recovery:** Native integration of a `/crash-test` route simulating extreme runtime panic, handled seamlessly by a PM2 continuous process daemon.

---

## Deployment & Links

- **Frontend Live URL:** [https://wtwr-tc.jumpingcrab.com](https://wtwr-tc.jumpingcrab.com)
- **Backend API Live URL:** [https://api.wtwr-tc.jumpingcrab.com](https://api-wtwr-tc.jumpingcrab.com)
- **Frontend GitHub Repository:** [https://github.com/talchekol/se_project_react](https://github.com/talchekol/se_project_react)

## Project Pitch Video

Watch the walkthrough, presentation, and design breakdown of the system layout:
[TalChekol-ProjectPitch-WTWR](https://drive.google.com/file/d/1AeiE1k2y4H3S1eVnYPf-gzZbpzQcwKcf/view?usp=sharing)
[TalChekol-ProjectPitch-WTWR](https://drive.google.com/file/d/1AeiE1k2y4H3S1eVnYPf-gzZbpzQcwKcf/view?usp=sharing)
