/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import '../styles/globals.css';
import { AuthProvider } from '../utils/context/authContext';
import ViewDirectorBasedOnUserAuthStatus from '../utils/ViewDirector';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <AuthProvider>
      {/* Your banner */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          background: '#333',
          padding: '10px',
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#FFD700', // Text color set to text-yellow-400
          fontSize: '20px', // Font size set to a larger value
          zIndex: 1000,
        }}
      >
        TownSquare
      </div>

      {/* Content with top padding to avoid overlap */}
      <div style={{ paddingTop: '40px' }}>
        {/* gives children components access to user and auth methods */}
        <ViewDirectorBasedOnUserAuthStatus
          // if status is pending === loading
          // if status is logged in === view app
          // if status is logged out === sign in page
          component={Component}
          pageProps={pageProps}
        />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
