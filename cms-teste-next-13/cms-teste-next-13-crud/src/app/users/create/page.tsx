"use client"

import React, { useEffect, useState, useCallback, } from "react";
import type { Metadata } from 'next';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
//import { useSelector, useDispatch } from 'react-redux'

//import type { RootState } from '@/store'
//import { addUser } from "@/store/features/userSlice";
import useUsers from "@/hooks/useUsers";
import Layout from '@/components/layout';

export const metadata: Metadata = {
    title: 'Create User - CMS Crud',
}

export default function UserCeatePage() {
    const router = useRouter();
    //console.log(router);
    //const dispatch = useDispatch();
    //const users = useSelector((state: RootState) => state.user);
    const { query, mutation, addMutation, addUser, } = useUsers();

    const [formData, setFormData] = useState({ name: "Pessoa x", email: "emailx@gmail.com", });

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

        // const formURL = e.target.action
        // const data = new FormData()
        //  Object.entries(formData).forEach(([key, value]) => { data.append(key, value); })
        //  let formData = new FormData();
        //  for (let [key, value] of Object.entries(state)) { formData.append(key, value); }

        if (Object.keys(formData).length == 0)
            return console.log("Don't have Form Data");

        const id = query.data && query.data.length > 0 ? query.data[query.data.length - 1].id + 1 : 1;
        const { name, email } = formData;  // const name = e.target.name.value;
        // console.log(`submitForm -> id: ${id} - name: ${name} - email: ${email}`);

        //dispatch(addUser({ id: id, name: name, email: email, }));
        //await addUser(id, name, email);
        await addMutation.mutate({ id: id, name: name, email: email });
        //await mutation.mutate();

        router.push('/users');
        setFormData({ name: "", email: "" });
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