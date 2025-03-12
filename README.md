# **Family Photo Management**

This is a fullstack project for managing family photos, where users can view, create, update, and delete photos and albums. The project consists of a React frontend (with TypeScript) and a Node.js backend (with TypeScript) that acts as a Backend for Frontend (BFF) to consume the public API from [JSONPlaceholder](https://jsonplaceholder.typicode.com/). The user ID in question is **ID 1**, set this way to save time on developing a login page, which was not the focus of the challenge.

## ⚠️ **Incomplete Challenge**

Due to my current work context at dti (which led me to prioritize team tasks, especially since I was on a tight deadline for a crucial delivery task), some parts of the task were left unfinished. However, I will explain here what was missing and how I would approach each of these steps.

### **1. Photo Changes and Persistence**

#### **Backend**

A `POST` endpoint would be created for adding photos; a `PUT` endpoint for modifying a photo, such as its URL or title; and finally, a `DELETE` endpoint for completely removing a photo. The same would be done for albums, as the task requires that this functionality be available, each in its respective file in `/backend/api`. It is worth noting that, although **JSONPlaceholder** does not persist data, its routes would be used for existing changes in the API, only changing the return strategy to persist data on the frontend using the album/photo IDs.

#### **Frontend**

Using Redux, a small data storage would be created to save all user data, albums, and photos for user **ID 1** (as explained at the beginning of this document). All subsequent changes would be made by directly manipulating the Redux store, facilitating persistence.

### **2. Use of shadcn**

Although its usage is relatively _simple_, I did not have much time to read the entire documentation, apply, and adapt to the complete and reliable use of the library. Therefore, I opted to use only **Tailwind** for the CSS in this challenge.

### **3. UI**

The UI of the frontend ended up being of extremely questionable quality. Due to the short time and the lack of a pre-established design, I chose to improve and optimize some things within the code rather than improve the design (a secondary aspect, I believe) of the challenge.

### **4. Photo Bug**

For some reason, all the photo URLs from the API were deprecated, causing errors when trying to retrieve them, leading to the use of a placeholder to show something to the user.

## **Technologies Used**

### **Frontend**

- **React** with **TypeScript**;
- **Vite** as the build tool;
- **Tailwind CSS** for styling;
- **React Router** for navigation between pages.

### **Backend**

- **Node.js** with **TypeScript**;
- **Express** to create the server;
- **Axios** to make requests to the JSONPlaceholder API.

### **Testing**

- **Jest** for unit testing.

## **Prerequisites**

Before starting, make sure you have installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** (package managers)
- **Git** (to clone the repository)

## **How to Run the Project**

Follow the steps below to set up and run the project locally.

### **1. Clone the Repository**

```bash
git clone https://github.com/yankessimos/family-photo-management.git
cd family-photo-management
```

### **2. Set Up the Backend**

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   npm start
   ```

   The backend will be running at `http://localhost:5000`.

### **3. Set Up the Frontend**

1. Navigate to the frontend folder:

   ```bash
   cd ../frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

   The frontend will be running at `http://localhost:5173`.

### **4. Access the Application**

Open your browser and go to:

```
http://localhost:5173
```

## **Project Structure**

### **Backend**

- **`server.ts`**: Entry point of the server.
- **`api/`**: Contains the route files (users, albums, photos).
- **`types/`**: Defines the TypeScript interfaces for the API data.

### **Frontend**

- **`src/`**: Contains the frontend source code.
  - **`components/`**: Reusable components.
  - **`pages/`**: Application pages.
  - **`types/`**: Defines the TypeScript interfaces for the API data.
  - **`App.tsx`**: Route configuration and main application structure.

## **API Endpoints**

The backend acts as a proxy for the JSONPlaceholder API. Here are the main endpoints:

- **List users**: `GET /users`
- **List albums of a user**: `GET /albums/:id`
- **List photos of an album**: `GET /photos/:id`

## **Testing**

The project includes unit tests to ensure business logic. To run the tests:

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Run the tests:
   ```bash
   npm test
   ```

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
