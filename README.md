# Collaborative Form Filling System

This is a collaborative web-based form filling system that allows multiple users to contribute data to shared forms in real-time. It is designed with modularity and scalability in mind, using the MVC architecture and built on Node.js and Express. To enable real-time collaboration efficiently, the app uses **WebSockets** instead of traditional polling methods.

WebSockets provide a persistent, full-duplex communication channel between the server and the client, allowing instant data synchronization between users. This avoids the overhead and delay associated with periodic polling and ensures a seamless collaborative experience.

## 🚀 Features

- Real-time collaborative form editing using **WebSockets**
- Instant updates across all connected users without the need for page refresh or polling
- User-friendly interface using server-side rendering
- RESTful API integration for backend operations
- MongoDB database connection for persistent storage
- Clean separation of concerns (MVC structure)

## 🛠️ Technologies Used

- **Node.js** with **Express.js**
- **Mysql2 (Mysql Workbench 8.0)
- **EJS** templating engine (for server-rendered views)
- **HTML/CSS/JS** for frontend
- **WebSockets** (via `socket.io`) for real-time communication
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

You can try the live version of this project here:  
🔗 [Live App on Railway](https://collaborativeformfillingsystem-production.up.railway.app/admin/create)



This project is deployed on [Railway](https://railway.app/). To deploy your own version:

1. Push the project to GitHub.
   
```bash
git init                      # Initialize a new Git repository
git add .                    # Stage all files
git status                   # (Optional) Check which files are staged
git commit -m "Initial commit"   # Commit the changes
git branch -M main               # Rename the branch to main (optional but common)
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main         # Push to GitHub
```
2. Import the repository into Railway.

```Integrate Github With Railway Hosting
1.Click on Deploy a new project
2.Then click on deploy from github repo
3.It will List all your repositories select the repo where the project is present
4.Then It wil start extracting the files
```

3. Set up the required environment variables from `.env`.
4. Deploy and start the service.



*Key Features:

Real-Time Collaboration
Multiple users can fill out the same form simultaneously, with live updates using WebSockets via socket.io.

Instant Data Sync
All connected users see real-time changes instantly, without needing to refresh or reload the page.

Server-Side Rendering
EJS-based views provide a fast, clean UI that integrates well with backend data.

Modular MVC Architecture
Ensures clean separation between logic, routes, and views for better maintainability and scalability.

Database Integration
Uses MySQL for structured, persistent form data storage.

RESTful API Support
Enables modular backend operations that can be extended easily in the future.

Secure Deployment Ready
Supports .env configuration for secrets and environment variables. Deployed on Railway for accessibility.



*Edge Cases Handled:

Simultaneous Edits Conflict Prevention
Using WebSockets ensures the latest value is shared across all clients instantly, reducing chances of overwrite conflicts.

User Disconnection/Reconnection
The app handles client reconnections gracefully by syncing the current form state from the server when a user returns.

Empty or Invalid Form Inputs
Basic validation is implemented to ensure required fields are filled before submission.

Database Connection Failures
Includes error handling for MySQL connection issues, with appropriate fallback or error messages.

Environment Configuration Errors
If .env variables are missing or incorrectly set, the system throws warnings or halts critical operations to prevent runtime failures.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to fork, contribute, or give feedback. Happy coding! 🎉
