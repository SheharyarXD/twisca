import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a Context for authentication
export const AuthContext = createContext();

// AuthProvider component to wrap the app with authentication context
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Check for existing user session on load
    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await axios.get('/api/auth/check-session');
                if (response.data.user) {
                    setUser(response.data.user);
                }
            } catch (err) {
                console.log("Session check failed", err);
            } finally {
                setLoading(false);
            }
        };

        checkSession();
    }, []);

    // Login function
    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/auth/signin', { email, password });
            setUser(response.data.user);
            setError(null);
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    // Signup function
    const signup = async (email, password) => {
        try {
            const response = await axios.post('/api/auth/signup', { email, password });
            setUser(response.data.user);
            setError(null);
        } catch (err) {
            setError('User already exists');
        }
    };

    // Logout function
    const logout = async () => {
        try {
            await axios.post('/api/auth/logout');
            setUser(null);
        } catch (err) {
            console.log("Logout failed", err);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
};
