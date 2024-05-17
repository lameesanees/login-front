import React from 'react';
import{ Link }from 'react-router-dom'
function Home() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: "url('https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity here (0.5 is 50% opacity)
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to Our Website</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Discover Amazing Content</p>
          <Link to = {'/login'}>
          <button
          className='btn btn-secondary'
          >
            Explore Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
