import React from 'react';
import { useState } from "react";
import 'firebase/auth';

export const AuthComponent = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submit = () =>{
        console.log(email, password)
    }

    return (
        <div>
            <label htmlFor="email">Correo electronico</label>
            <input type="email" id="email" onChange={(ev) => setEmail(ev.target.value)}/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" onChange={(ev) => setPassword(ev.target.value)}/>
            <button onClick={submit}>Iniciar sesion</button>
        </div>
    )
}