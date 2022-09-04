import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import useFirestore  from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import UploadForm from './UploadForm';

const Dashboard = () => {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { docs } = useFirestore('images');

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <UploadForm />
      <div className="row1">
        {docs && docs.map(doc => (
          <motion.div className="column1" key={doc.id} 
            layout
            whileHover={{ opacity: 1 }}s
          >
            <motion.img src={doc.url} alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
      </div>
      {error && <alert variant="danger">{error}</alert>}
      <button onClick={handleLogout}>Log Out</button>
    </>
  )
}

export default Dashboard;