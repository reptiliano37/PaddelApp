import React, {createContext, ReactElement,ReactNode, useState, useEffect, Dispatch, SetStateAction} from 'react'
import AppLoading from 'expo-app-loading';
import { Auth, Hub } from 'aws-amplify';
import {useAuth} from '../contexts/auth-context'


type AppBootstrapProps = {
    children: ReactNode;
}

type AuthContextType = {
    user:{[key:string]:any} | null;
    setUser:Dispatch<SetStateAction<{[key:string]:any} | null>>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export default function AppBootstrap({ children }: AppBootstrapProps): ReactElement{
    const [authLoaded, setAuthLoaded] = useState(false);
    const {setUser} = useAuth();

    useEffect(() => {
      async function checkCurrentUser (){
        try {
            const user = await Auth.currentAuthenticatedUser();
            setUser(user)
        } catch (error) {
            console.log(error)
            setUser(null)
        }
        setAuthLoaded(true);
      };

      checkCurrentUser();

      function hubListener(hubData: any){
          const {data, event} = hubData.payload;
          switch (event) {
            case "signOut":
                setUser(null)
                break;
        
            case "signIn":
                setUser(data)
                break;
            default:
                break;
          }
      }

      Hub.listen("auth",hubListener )
      return ()=> {
          Hub.remove("auth", hubListener)
      }
    },[])

    return authLoaded ? <>{children}</> : <AppLoading/>
}