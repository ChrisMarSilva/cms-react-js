"use client"

import { useEffect } from "react";
import type { Metadata } from 'next';
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'

import type { RootState } from '@/store'
import { deleteUser } from "@/store/features/userSlice";
import Layout from '@/components/layout';

export const metadata: Metadata = {
    title: 'User - CMS Crud',
}

export default function UserPage() {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.user)

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const handleDelte = async (userId: number) => {
        dispatch(deleteUser({ id: userId }))
    }

    if (users.error) return <div>Failed to load</div>;
    if (users.isLoading) return <div>Loading...</div>;

    return (
        <Layout>
            <Link href={`/users/create`} className='btn btn-success my-3'>Create +</Link>
            <div className="table-responsive">
                <table className='table table-striped table-bordered table-borderless table-hover'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.data?.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link href={`/users/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                    <button onClick={() => handleDelte(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}