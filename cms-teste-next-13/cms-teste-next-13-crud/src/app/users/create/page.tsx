"use client"

import React, { useEffect, useState, } from "react";
import type { Metadata } from 'next';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux'

import type { RootState } from '@/store'
import { addUser } from "@/store/features/userSlice";
import Layout from '@/components/layout';

export const metadata: Metadata = {
    title: 'Create User - CMS Crud',
}

export default function UserCeatePage() {
    const router = useRouter();
    //console.log(router);

    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.user);

    const [formData, setFormData] = useState({ name: "Pessoa x", email: "emailx@gmail.com" });
    // const [name, seName] = useState<string>('');
    // const [email, setEmail] = useState<string>('');

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.currentTarget.name; // e.target.name;
        const fieldValue = e.currentTarget.value; // e.target.value;
        // console.log(`${fieldName}: ${fieldValue}`)
        setFormData((prevState) => ({ ...prevState, [fieldName]: fieldValue }));
    }

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //const formURL = e.target.action
        //const data = new FormData()

        dispatch(addUser({
            id: users.data.length > 0 ? users.data[users.data.length - 1].id + 1 : 1,
            name: formData.name, // const name = e.target.name.value;
            email: formData.email // const email = e.target.email.value;
        }))

        setFormData({ name: "", email: "" })
        router.push('/users')

        //  Object.entries(formData).forEach(([key, value]) => { data.append(key, value); })
        //  let formData = new FormData();
        //  for (let [key, value] of Object.entries(state)) { formData.append(key, value); }
        //  fetch(formURL, { method: "POST", body: data, headers: { 'accept': 'application/json' } })
        // .then(() => { setFormData({  name: "",  email: "" })
        // })

    }

    return (
        <Layout>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
                <div className='w-50 boder bg-secondary text-white p-5'>

                    <h3>Add New User</h3>

                    {/* <form action="/api/form" method="POST"> */}
                    <form onSubmit={submitForm}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                value={formData.name} // value={name}
                                onChange={handleInput}//onChange={e => seName(e.target.value)} 
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder="Enter name"
                                required={true}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                value={formData.email} // value={email}
                                onChange={handleInput} // onChange={e => setEmail(e.target.value)} 
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                required={true}
                                autoComplete="email"
                            />
                        </div>
                        <div className="text-right">
                            <br />
                            <button type="submit" className="btn btn-primary">  Create  </button>
                            {'  '}
                            <Link href={`/users/`} className='btn btn-dark'>Cancelar</Link>
                        </div>
                    </form>

                </div>
            </div>

        </Layout>
    );
}