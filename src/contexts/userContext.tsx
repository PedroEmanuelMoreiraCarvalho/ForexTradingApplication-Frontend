import { createContext, PropsWithChildren, useContext, useState } from "react";
import {useCookies} from 'react-cookie';

type FormType = {name: String, password: String}

export type UserPropsType = {
  login: (user_login: FormType) => Promise<any>,
  signin: (user_signin: FormType) => Promise<any>,
  user: UserType
};

type UserType = {
  name: String,
  cash: Number,
  current_token: String
}

export const UserContext = createContext<UserPropsType>({
    login: async ()=>{},
    signin: async ()=>{},
    user: {
      name: "",
      cash: 0,
      current_token: "",
    }
});

export const UserProvider = ({children}:PropsWithChildren) => {
  const [cookies, setCookie] = useCookies();
  const [user, setUser] = useState<UserType>({
    name: "",
    cash: 0,
    current_token: "",
  });

  const login = async(user_login: {name: String, password: String})=>{
    let login_req = await fetch("http://localhost:3800/login",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user_login)
    });
    let login_res = await login_req.json();
    
    if(login_res.success){
      let user_data: UserType = {
        name: login_res.name,
        cash: login_res.cash,
        current_token: login_res.current_token
      };
      setUser(user_data);
      setCookie('user', JSON.stringify(user_data));
    }

    return login_res;
  };

  const signin = async(signin: {name: String, password: String})=>{
    let signin_req = await fetch("http://localhost:3800/user",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signin)
    });
    let signin_res = await signin_req.json();
    
    if(signin_res.success){
      let user_data: UserType = {
        name: signin_res.name,
        cash: signin_res.cash,
        current_token: signin_res.current_token
      };
      setUser(user_data);
      setCookie('user', JSON.stringify(user_data));
    }

    return signin_res;
  };

  const values: UserPropsType = {
    login: login,
    signin: signin,
    user: user
  };

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext);