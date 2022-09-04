import React, { useContext, useState, useEffect } from "react";
import { auth } from '../firebase/config.js';

const AuthContext = React.createContext()

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	function login(email, password) {
		return auth.signInWithEmailAndPassword(email, password);
	}

	function logout() {
		return auth.signOut();
	}

	function resetPassword(email) {
		return auth.sendPasswordResetEmail(email);
	}

	useEffect(() => {
		const unsub = auth.onAuthStateChanged(user => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsub;
	}, []);

	const value = {
		currentUser,
		login,
		logout,
		resetPassword
	}

	return (
		<AuthContext.Provider value={value}>
			{ !loading && children }
		</AuthContext.Provider>
	)

}