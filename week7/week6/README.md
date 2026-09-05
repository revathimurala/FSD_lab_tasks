# Week 6 - Server-Side Rendering (SSR), Forms & Validation

## Experiment
Configure a template engine, render dynamic values, accept HTML form input, and perform basic validation using Express.js and EJS.

## Folder Structure

```text
week6/
├── server.js
├── package.json
├── README.md
└── views/
    └── index.ejs
```

## Steps to Run

1. Open the terminal inside the `week6` folder.
2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node server.js
```

4. Open:

```text
http://localhost:3000
```

## Test Cases

### 1. Initial Form
The page displays the **User Registration** form with:
- Username
- Age
- Register button

### 2. Validation Failure - Username
Leave username empty or enter fewer than 3 characters.

Expected message:

```text
Username must be at least 3 characters long.
```

### 3. Validation Failure - Age
Enter a valid username and an age below 18.

Expected message:

```text
You must be at least 18 years old.
```

### 4. Successful Registration
Example:

```text
Username: Pradeep
Age: 35
```

Expected result:

```text
Registration Successful

Welcome, Pradeep! Your account is ready.
```

## Concepts Covered

- Express.js server
- EJS template engine
- Server-Side Rendering (SSR)
- Dynamic values using EJS
- HTML forms
- POST requests
- `express.urlencoded()` middleware
- `req.body`
- Input validation
- Conditional rendering
