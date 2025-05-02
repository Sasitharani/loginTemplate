import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3004/api/login', {
                email,
                password
            });
            if (response.status === 200) {
                setMessage('Login Successfully');
                Swal.fire({
                    title: 'Login Success',
                    text: `You have Sucessfully Logged In.`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                dispatch({ type: 'user/login', payload: email });
                navigate('/');
            }
        } catch (error) {
            setMessage('Login failed');
            Swal.fire({
                title: 'Login Failed',
                text: error.response?.data?.message || 'Invalid credentials',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
            padding: '2rem',
        }}>
            <form
                onSubmit={handleLogin}
                style={{
                    width: '100%',
                    maxWidth: 420,
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: 24,
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                    padding: '2.5rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                }}
            >
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#3730a3',
                    textAlign: 'center',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.02em',
                }}>Login</h2>
                <p style={{
                    color: '#64748b',
                    textAlign: 'center',
                    marginBottom: '1rem',
                    fontSize: '1.1rem',
                }}>Welcome back! Please login to your account</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontWeight: 600, color: '#3730a3', marginBottom: 4 }}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        style={{
                            padding: '0.75rem 1rem',
                            borderRadius: 12,
                            border: '1.5px solid #c7d2fe',
                            fontSize: '1.1rem',
                            outline: 'none',
                            transition: 'border 0.2s',
                        }}
                        onFocus={e => e.target.style.border = '1.5px solid #6366f1'}
                        onBlur={e => e.target.style.border = '1.5px solid #c7d2fe'}
                        placeholder="Enter your email"
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontWeight: 600, color: '#3730a3', marginBottom: 4 }}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        style={{
                            padding: '0.75rem 1rem',
                            borderRadius: 12,
                            border: '1.5px solid #c7d2fe',
                            fontSize: '1.1rem',
                            outline: 'none',
                            transition: 'border 0.2s',
                        }}
                        onFocus={e => e.target.style.border = '1.5px solid #6366f1'}
                        onBlur={e => e.target.style.border = '1.5px solid #c7d2fe'}
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        marginTop: '0.5rem',
                        padding: '0.9rem 0',
                        borderRadius: 12,
                        background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        border: 'none',
                        boxShadow: '0 2px 8px rgba(99,102,241,0.08)',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        transition: 'background 0.2s, transform 0.2s',
                    }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <div style={{ color: '#ef4444', textAlign: 'center', minHeight: 24 }}>{message}</div>
                <div style={{ textAlign: 'center', marginTop: 8 }}>
                    <Link to="/signup" style={{ color: '#6366f1', fontWeight: 600, textDecoration: 'none' }}>
                        Don't have an account? Sign Up
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
