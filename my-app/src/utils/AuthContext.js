import React, { createContext, useState, useEffect } from 'react';

// Create a Context for authentication
export const AuthContext = createContext();

// AuthProvider component to wrap the app with authentication context
export const AuthProvider = ({ children }) => {
    const basicUrl = 'http://localhost:3000'; // Make sure to use http if SSL isn't set up
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Check for existing user session on load
    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await fetch(`${basicUrl}/api/auth/check-session`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include', // This is important if you're using cookies
                });

                if (!response.ok) {
                    throw new Error('Session check failed');
                }

                const data = await response.json();
                if (data.user) {
                    setUser(data.user);
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
        console.log(email)
        console.log(password)
        try {
            const response = await fetch(`${basicUrl}/api/auth/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include', // Include credentials if needed (cookies, sessions)
            });

            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            const data = await response.json();
            setUser(data.user);
            setError(null);
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    // Signup function
    const signup = async (email, password) => {
        try {
            const response = await fetch(`${basicUrl}/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include', // Include credentials if needed
            });

            if (!response.ok) {
                throw new Error('User already exists');
            }

            const data = await response.json();
            setUser(data.user);
            setError(null);
        } catch (err) {
            setError('User already exists');
        }
    };

    // Logout function
    const logout = async () => {
        try {
            const response = await fetch(`${basicUrl}/api/auth/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include credentials if needed
            });

            if (!response.ok) {
                throw new Error('Logout failed');
            }

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
