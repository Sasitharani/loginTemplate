import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const email = useSelector((state) => state.user.email);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === 'sasitharani@gmail.com') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <header style={{ border: '2px solid #333', position: 'fixed', top: 0, left: 0, width: '100%', background: '#000', zIndex: 100 }}>
      <nav style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px 32px' }}>
        <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
          <li>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s, transform 0.3s' }}
              onMouseEnter={e => {
                e.target.style.color = '#00FFFF';
                e.target.style.transform = 'scale(2)';
                e.target.style.transition = 'color 0.3s, transform 0.3s';
                e.target.style.textShadow = '0 0 10px #00FFFF, 0 0 20px #00FFFF';
              }}
              onMouseLeave={e => {
                e.target.style.color = '#fff';
                e.target.style.transform = 'scale(1)';
                e.target.style.textShadow = 'none';
              }}
            >Home</Link>
          </li>
          <li>
            <Link to="/signup" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s, transform 0.3s' }}
              onMouseEnter={e => {
                e.target.style.color = '#FF00FF';
                e.target.style.transform = 'scale(2)';
                e.target.style.transition = 'color 0.3s, transform 0.3s';
                e.target.style.textShadow = '0 0 10px #FF00FF, 0 0 20px #FF00FF';
              }}
              onMouseLeave={e => {
                e.target.style.color = '#fff';
                e.target.style.transform = 'scale(1)';
                e.target.style.textShadow = 'none';
              }}
            >Sign Up</Link>
          </li>
          {isAdmin && (
            <li>
              <Link to="/admin-view" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s, transform 0.3s' }}
                onMouseEnter={e => {
                  e.target.style.color = '#FFD700';
                  e.target.style.transform = 'scale(2)';
                  e.target.style.transition = 'color 0.3s, transform 0.3s';
                  e.target.style.textShadow = '0 0 10px #FFD700, 0 0 20px #FFD700';
                }}
                onMouseLeave={e => {
                  e.target.style.color = '#fff';
                  e.target.style.transform = 'scale(1)';
                  e.target.style.textShadow = 'none';
                }}
              >Admin View</Link>
            </li>
          )}
          {isLoggedIn ? (
            <>
              {email && <li style={{ color: '#fff' }}>{email.slice(0, email.indexOf('@'))}</li>}
              <li>
                <Link to="/logout" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s, transform 0.3s' }}
                  onMouseEnter={e => {
                    e.target.style.color = '#FF4500';
                    e.target.style.transform = 'scale(2)';
                    e.target.style.transition = 'color 0.3s, transform 0.3s';
                    e.target.style.textShadow = '0 0 10px #FF4500, 0 0 20px #FF4500';
                  }}
                  onMouseLeave={e => {
                    e.target.style.color = '#fff';
                    e.target.style.transform = 'scale(1)';
                    e.target.style.textShadow = 'none';
                  }}
                >Logout</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s, transform 0.3s' }}
                onMouseEnter={e => {
                  e.target.style.color = '#00FF00';
                  e.target.style.transform = 'scale(2)';
                  e.target.style.transition = 'color 0.3s, transform 0.3s';
                  e.target.style.textShadow = '0 0 10px #00FF00, 0 0 20px #00FF00';
                }}
                onMouseLeave={e => {
                  e.target.style.color = '#fff';
                  e.target.style.transform = 'scale(1)';
                  e.target.style.textShadow = 'none';
                }}
              >Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
