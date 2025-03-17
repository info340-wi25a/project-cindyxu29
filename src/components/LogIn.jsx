import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';

export default function LogIn(props) {

    const auth = getAuth();

    const firebaseUIConfig = {
        signInOptions: [ //array of sign in options supported
          //array can include just "Provider IDs", or objects with the IDs and options
          GoogleAuthProvider.PROVIDER_ID,
          { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
        ],
        signInFlow: 'popup', //don't redirect to authenticate
        credentialHelper: 'none', //don't show the email account chooser
        callbacks: { //"lifecycle" callbacks
          signInSuccessWithAuthResult: () => {
            return false; //don't redirect after authentication
          }
        }   
    }   


    return (
        <>
            <div className="login-container">
              <h1 className="login-heading-text"> Please sign in to create and manage your yoga classes! </h1>
              <StyledFirebaseAuth 
              className="log-in-buttons"
              firebaseAuth={auth}
              uiConfig={firebaseUIConfig}
              />
            </div>


        </>
    );
}

