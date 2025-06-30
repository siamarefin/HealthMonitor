import React, { useState } from "react";

function Signup () {
    const [form, setForm] = useState({name:"", email:"", password:""})
    const [massage, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.prevention
    }

    return (
        <signup> 
            
        </signup>
    );
}