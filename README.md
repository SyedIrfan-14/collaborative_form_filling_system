# Collaborative Form Filling System

This is a collaborative web-based form filling system that allows multiple users to contribute data to shared forms in real-time. Designed with modularity in mind, it uses the MVC architecture and is built on Node.js and Express.

## 🚀 Features

- Real-time collaborative form editing
- User-friendly interface using server-side rendering
- RESTful API integration for backend operations
- MongoDB database connection for persistent storage
- Clean separation of concerns (MVC structure)

## 🛠️ Technologies Used

- **Node.js** with **Express.js**
- **MongoDB** (via Mongoose)
- **EJS** templating engine (assumed from views directory)
- **HTML/CSS/JS** for frontend
- **Railway** for deployment

## 📁 Project Structure

```
collaborative_form_filling_system/
├── controllers/        # Controller logic
├── db/                 # Database connection
├── models/             # Mongoose models
├── public/             # Static files (CSS, JS)
├── routes/             # Route definitions
├── views/              # EJS templates
├── server.js           # Main entry point
├── package.json        # Project metadata and dependencies
└── .env.example        # Environment variable configuration
```

## 🧩 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/collaborative_form_filling_system.git
cd collaborative_form_filling_system
```

2. **Install dependencies**

All required packages are already listed in the `package.json` file. Simply run the following command to install everything:

```bash
npm install
```

This will read the `package.json` file and automatically install all the necessary Node.js modules.

3. **Configure environment variables**

Copy `.env.example` to `.env` and fill in the required configuration:

```bash
cp .env.example .env
```

4. **Start the server**

```bash
npm start
```

The server will typically run at `http://localhost:3000` by default.

## 🌐 Deployment

This project is deployed on [Railway](https://railway.app/). To deploy your own version:

1. Push the project to GitHub.
2. Import the repository into Railway.
3. Set up the required environment variables from `.env`.
4. Deploy and start the service.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to fork, contribute, or give feedback. Happy coding! 🎉
