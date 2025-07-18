

# Library Members Management

A modern, full-stack web application for managing library members, featuring an ultra-modern React frontend and a simple Express backend.



**GitHub:** [https://github.com/your-username/library-members](https://github.com/Pruthvi070/library-members)

---

## Features

- ✨ Ultra-modern, responsive UI with Material UI and Lucide icons
- 🔍 Search and filter members by name and status
- ➕ Add new members with a beautiful modal form
- 📋 View all members in a stylish, interactive table
- ⚡ Instant updates with no page reloads
- 🟢 Status chips for Active/Inactive members
- 🛠️ Simple Express backend with REST API

---




## Screenshots

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://raw.githubusercontent.com/Pruthvi070/library-members/main/Preview/prev-1.png" alt="Preview 1" width="700"/>
        <br />
        <sub><b>Dashboard View</b></sub>
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/Pruthvi070/library-members/main/Preview/prev-2.png" alt="Preview 2" width="700"/>
        <br />
        <sub><b>Add Member Modal</b></sub>
      </td>
    </tr>
    <tr>
      <td align="center" colspan="2">
        <img src="https://raw.githubusercontent.com/Pruthvi070/library-members/main/Preview/prev-3.png" alt="Preview 3" width="700"/>
        <br />
        <sub><b>Member Table with Status Chips</b></sub>
      </td>
    </tr>
  </table>
</div>



---

## Tech Stack

- **Frontend:** React, Material UI, Lucide React, Axios
- **Backend:** Node.js, Express, CORS

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```bash
 [  git clone https://github.com/your-username/library-members.git](https://github.com/Pruthvi070/library-members.git)
   cd library-members
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the App

1. **Start the backend server:**
   ```bash
   cd backend
   npm start
   ```
   The backend will run at [http://localhost:4000](http://localhost:4000).

2. **Start the frontend:**
   ```bash
   cd ../frontend
   npm start
   ```
   The frontend will run at [http://localhost:3000](http://localhost:3000).

---

## API Endpoints

- `GET /members` — Get all members
- `POST /members` — Add a new member (fields: name, email, phone, startDate, status)

---

## Project Structure

```
library-members/
  backend/
    server.js
    package.json
  frontend/
    src/
      components/
        AddMemberForm.js
        MemberTable.js
      App.js
      index.js
    package.json
```

---

## Customization

- UI is built with Material UI and Lucide icons for a modern look.
- Easily extend the backend for more features (edit, delete, authentication, etc).

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by [Pruthviraj]**

---

Let me know if you want to add badges, deployment instructions, or anything else! If you provide your actual GitHub link, I’ll update the README for you.
