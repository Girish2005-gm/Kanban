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
* 🌙 Dark Mode ready (optional enhancement)

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

<img width="2499" height="1223" alt="image" src="https://github.com/user-attachments/assets/5776952c-c1ed-4900-8014-ebd90873869b" />
<img width="2535" height="1269" alt="image" src="https://github.com/user-attachments/assets/3806d5d9-c1ef-4fd1-91cd-40e396fa6529" />
<img width="2524" height="1236" alt="image" src="https://github.com/user-attachments/assets/728afbfd-90be-4551-83c1-8d0d29f353cb" />
<img width="2545" height="1279" alt="image" src="https://github.com/user-attachments/assets/b03af58e-8a80-4dca-b964-636da4677381" />
<img width="2549" height="1245" alt="image" src="https://github.com/user-attachments/assets/f5a682cd-3166-43e5-9413-b26f1415ad26" />

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
