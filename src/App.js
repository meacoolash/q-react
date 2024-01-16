import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './fatures/auth/Login';
import DashLayout from './components/DashLayout';
import Welcome from './fatures/auth/Welcome';
import ContactList from './fatures/contacts/ContactList';
import UsersList from './fatures/users/UsersList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* Dash */}
        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path="contacts">
            <Route index element={<ContactList />} />
          </Route>
          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>
        </Route> 
        {/* End Dash */}

      </Route>
    </Routes>
  );
}

export default App;
