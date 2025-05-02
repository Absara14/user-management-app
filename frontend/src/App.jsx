import React from 'react'
import UserForm from './Components/UserForm';
import UserList from'./Components/UserList';


function App() {
  return (
    <div
      className="min-h-screen bg-gray-100p-6">
        <h1 className="text-3xl font-bold mb-4">UserMangement</h1>
        <UserForm />
        <UserList />
    </div>
    
  );
}

export default App;