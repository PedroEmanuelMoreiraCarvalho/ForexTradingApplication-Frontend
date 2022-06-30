import React, { useState } from 'react';
import '../App.css';
export interface LoginPageProps{}

const LoginPage:React.FunctionComponent<LoginPageProps> = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");
    
    const handleName = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setName(e.target.value);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setPassword(e.target.value);
    }

    return(
        <div className='login-page'>
            {warning ? <div className='warning' data-testid='warning'>{warning}</div> : null}
            <div className='login-area'>
                <input onChange={(e)=>{handleName(e)}} type='text' placeholder='name'/>
                <input onChange={(e)=>{handlePassword(e)}} type='password' placeholder='password'/>
                <div className='buttons'>
                    <button id='login' data-testid='login-button'>Login</button>
                    <button id='signin'>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage