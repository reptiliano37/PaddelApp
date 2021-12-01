import React from 'react';
import Navigator from './config/navigator'

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import {AuthProvider} from './contexts/auth-context'
import { AppBootstrap } from './screens';
Amplify.configure(awsconfig);

export default function App() {
  return (
    <AuthProvider>
      <AppBootstrap>
        <Navigator/>
      </AppBootstrap>
    </AuthProvider>
  );
}
