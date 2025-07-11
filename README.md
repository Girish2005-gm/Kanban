# KanbanFlow - Task Management App

KanbanFlow is a modern, responsive task management application built with React. It allows users to create task boards, lists, and cards with drag-and-drop support. Perfect for developers, freelancers, and teams to manage personal or work-related projects.

---

## 🚀 Features

* 🔐 User Authentication (Sign up, Login, Logout)
* 📝 Create multiple boards, lists, and cards
* 🧲 Drag and Drop support for cards and lists
* 📋 Card details including:

  * Title
  * Description
  * Tags
  * Due Dates
* 🗑️ Delete cards and lists
* 🔍 Filter and Search tasks by name or tag
* 📱 Fully Responsive UI
* 🔔 Toast Notifications

---

## 🛠️ Tech Stack

* **Frontend**: React.js, Tailwind CSS, React Router, Lucide Icons, react-hot-toast
* **Drag & Drop**: @hello-pangea/dnd
* **Backend**: Firebase Authentication & Firestore Database (No Storage used)

---

## 📦 Folder Structure

```
kanbanflow/
├── public/
├── src/
│   ├── components/     # All reusable components (ListColumn, Card, Modal, etc.)
│   ├── pages/          # Page components (Home, Dashboard, Auth)
│   ├── context/        # Auth and Global State Context
│   ├── utils/          # Utility functions (e.g., highlightMatch)
│   ├── App.jsx         # Root component
│   └── main.jsx        # Entry point
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 📸 Screenshots

<img width="2489" height="1180" alt="image" src="https://github.com/user-attachments/assets/fa5b5e98-c16a-4689-b867-82c037714646" />
<img width="2455" height="1172" alt="image" src="https://github.com/user-attachments/assets/150b0bf9-d99f-4717-8aa5-a6a7be283007" />
<img width="2474" height="1112" alt="image" src="https://github.com/user-attachments/assets/cf9c3f4a-a570-4b01-9650-826b1cc637e1" />
<img width="2518" height="938" alt="image" src="https://github.com/user-attachments/assets/1a774b78-e040-4ac3-9aab-948eb2f96144" />
<img width="2541" height="1196" alt="image" src="https://github.com/user-attachments/assets/bd481dbb-7f2c-4f56-9137-e0f9acef3bcc" />
<img width="2556" height="1185" alt="image" src="https://github.com/user-attachments/assets/245ef9ff-06ea-4e56-a3c2-2261dc80a274" />
<img width="2537" height="1233" alt="image" src="https://github.com/user-attachments/assets/4295c7c9-3b97-4d16-80ef-b136a36ebe8c" />
<img width="2384" height="1016" alt="image" src="https://github.com/user-attachments/assets/f6bb5b51-2179-4395-8f8d-ad23671ddc56" />
<img width="2501" height="1133" alt="image" src="https://github.com/user-attachments/assets/d96b1fae-9747-4c04-8582-4c1db1b8b514" />

---

## 🔧 Setup Instructions

```bash
# 1. Clone the Repository
$ git clone https://github.com/Girish2005-gm/KanBan-Board.git
$ cd KanBan-Board

# 2. Install Dependencies
$ npm install

# 3. Start the Development Server
$ npm run dev
```

Make sure to configure your **Firebase** project and replace the Firebase config in your `.env` or `firebase.js` file.

---

## ✅ TODOs / Future Features

* [ ] Drag-and-drop across boards
* [ ] Team support with multi-user boards
* [ ] File attachments via Firebase Storage
* [ ] Activity timeline and analytics

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 💬 Feedback

Have suggestions or issues? Feel free to open an [issue](https://github.com/Girish2005-gm/KanBan-Board/issues) or submit a PR!

---

> Built with 💻 by Girish Maheshwari
