# Week 8 - Cookies and Session Management

## Objective
To understand stateful application development using cookies and sessions, and to implement a simple authentication mechanism.

## Folder Structure

```text
week8/
├── server.js
├── package.json
├── README.md
└── views/
    ├── login.ejs
    └── dashboard.ejs
```

## Concepts Covered

- Cookies
- `cookie-parser`
- Sessions using `express-session`
- Session-based authentication
- Login and logout
- Private route protection using middleware
- EJS templates
- `req.session`
- `req.cookies`
- `res.cookie()`
- `res.clearCookie()`

## How to Run

Open the terminal inside the `week8` folder:

```bash
npm install
node server.js
```

Open:

```text
http://localhost:3000/login
```

## Login Credentials

```text
Username: admin
Password: 123
```

## Expected Flow

1. Open `/dashboard` without logging in.
2. The authentication middleware redirects you to `/login`.
3. Enter `admin` and `123`.
4. A session is created.
5. A `lastVisit` cookie is created.
6. You are redirected to the private dashboard.
7. The dashboard displays the logged-in username and cookie value.
8. Click **Logout** to destroy the session and clear cookies.

## Cookie Verification

Open browser Developer Tools:

```text
F12 → Application → Cookies → http://localhost:3000
```

You can observe:
- `connect.sid` — session identifier cookie.
- `lastVisit` — custom cookie created during login.

## Session Expiry

The session cookie is configured with:

```js
maxAge: 60000
```

Therefore, it expires after approximately 1 minute.
