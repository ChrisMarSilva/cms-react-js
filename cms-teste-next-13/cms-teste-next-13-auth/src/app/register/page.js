"use client";

import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/register", { name, email, password, });
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container container-fluid">
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-10 col-lg-5 ">
                    <form className="border border-secondary rounded p-4" onSubmit={submitHandler}>
                        <h1 className="mb-4">Register</h1>
                        <div className="form-outline mb-4">
                            <label className="form-label" for="name_field"> Name </label>
                            <input type="text" id="name_field" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" for="email_field"> Email address </label>
                            <input type="email" id="email_field" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" for="password_field"> Password </label>
                            <input type="password" id="password_field" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-block w-100 btn-primary btn-block mb-4">Register</button>
                        <div className="text-left">
                            <p> <Link href="/login">Back to login</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;