import '../App.css';
import loading from '../loading.svg';
import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';
export interface LoginPageProps{}

const LoginPage:React.FunctionComponent<LoginPageProps> = () => {
    const [name, setName] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [warning, setWarning] = useState<String>("");
    const [isLoading, setLoading] = useState<Boolean>(false);
    const { login, signin } = useContext(UserContext);
    const navigate = useNavigate();
    
    const handleName = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setName(e.target.value);
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setPassword(e.target.value);
    };

    const areSomeFieldsEmpty = (name: String, password: String): boolean =>{
        if(name.trim() === ""){setWarning("invalid name");return true};
        if(password.trim() === ""){setWarning("invalid password");return true};
        return false
    }

    const Login = async() => {
        setWarning("");
        if(isLoading)return;
        if(areSomeFieldsEmpty(name, password))return;
        setLoading(true);
        let user_login = {
            name: name,
            password: password
        };
        let login_res = await login(user_login);
        if(login_res.success){
            navigate("/")
        }else{
            setWarning(login_res.message);
        }
        setLoading(false)
    };

    const Signin = async() => {
        setWarning("");
        if(isLoading)return;
        if(areSomeFieldsEmpty(name, password))return;
        setLoading(true);
        let user_login = {
            name: name,
            password: password
        };
        let login_res = await signin(user_login);
        if(login_res.success){
            navigate("/")
        }else{
            setWarning(login_res.message);
        }
        setLoading(false)
    };

    return(
        <div className='login-page'>
            {warning ? <div className='warning' data-testid='warning'>{warning}</div> : null}
            <div className='login-area'>
                <form>
                    <input onChange={(e)=>{handleName(e)}} type='text' placeholder='name'/>
                    <input onChange={(e)=>{handlePassword(e)}} type='password' placeholder='password'/>
                </form>
                { isLoading ? <img id='loading' data-testid='loading' src={loading}/> : null }
                <div className='buttons'>
                    <button id='login' data-testid='login-button' onClick={()=>{Login()}}>Login</button>
                    <button id='signin' data-testid='signin-button' onClick={()=>{Signin()}}>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage