import React from 'react';
import Navigator from './config/navigator'

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import {AuthProvider,useAuth} from './contexts/auth-context'
import { AppBootstrap } from './screens';

// import 'react-native-gesture-handler';
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
