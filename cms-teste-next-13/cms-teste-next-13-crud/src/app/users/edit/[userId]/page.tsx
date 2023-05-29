"use client"

import React, { useEffect, useState, } from "react";
import type { Metadata } from 'next';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux'

import type { RootState } from '@/store'
import { UpdateUser } from "@/store/features/userSlice";
import Layout from '@/components/layout';

type Params = {
    params: {
        userId: string
    }
}

export default function UserEditPage({ params: { userId } }: Params) {
    const router = useRouter();
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.user);
    const user = users.data.filter(x => x.id === parseInt(userId));
    const { name, email } = user[0]

    const [formData, setFormData] = useState({ name: name, email: email });

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.currentTarget.name;
        const fieldValue = e.currentTarget.value;
        setFormData((prevState) => ({ ...prevState, [fieldName]: fieldValue }));
    }

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(UpdateUser({
            id: parseInt(userId),
            name: formData.name,
            email: formData.email
        }))

        setFormData({ name: "", email: "" })
        router.push('/users')
    }

    return (
        <Layout>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
                <div className='w-50 boder bg-secondary text-white p-5'>

                    <h3>Update User - {userId}</h3>

                    <form onSubmit={submitForm}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                value={formData.name}
                                onChange={handleInput}
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
                                value={formData.email}
                                onChange={handleInput}
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
                            <button type="submit" className="btn btn-primary">  Update  </button>
                            {'  '}
                            <Link href={`/users/`} className='btn btn-dark'>Cancelar</Link>
                        </div>
                    </form>

                </div>
            </div>

        </Layout>
    );
}