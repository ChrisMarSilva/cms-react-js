"use client"

import { useEffect, useCallback, Suspense, } from "react";
import type { Metadata } from 'next';
import Link from 'next/link'
//import { useSelector, useDispatch } from 'react-redux'
//import { BiEdit, BiTrashAlt } from "react-icons/bi";

//import type { RootState } from '@/store'
//import { deleteUser } from "@/store/features/userSlice";
import useUsers from "@/hooks/useUsers";
import Layout from '@/components/layout';
// import Bug from '@/components/Bug';
// import Success from '@/components/Success';

export const metadata: Metadata = {
    title: 'User - CMS Crud',
}

export default function UserPage() {
    // const dispatch = useDispatch();
    const { query, mutation, deleteMutation, deleteUser, } = useUsers();
    // const users = useSelector((state: RootState) => state.user);

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const handleDelte = useCallback(async (userId: number) => {
        //await deleteUser(userId);
        //await mutation.mutate(); // await queryclient.prefetchQuery('users', getUsers)
        await deleteMutation.mutate(userId);
        // dispatch(deleteUser({ id: userId }));
    }, []);

    if (query.isLoading) return <div>Loading...</div>;
    if (query.error) return <div>Failed to load</div>;

    // if (addMutation.isLoading) return <div>Loading!</div>
    // if (addMutation.isError) return <Bug message={addMutation.error}></Bug>
    // if (addMutation.isSuccess) return <Success message={"Added Successfully"}></Success>

    return (
        <Layout>

            <Link href={`/users/create`} className='btn btn-success my-3'>Create +</Link>

            {/* {addMutation.isSuccess && <Success message={"Added Successfully 2"}></Success>} */}

            <div className="table-responsive">
                <table className='table table-striped table-bordered table-borderless table-hover'>
                    <thead>
                        <tr className="bg-gray-800">
                            <th className="px-16 py-2 text-gray-200">Id</th>
                            <th className="px-16 py-2 text-gray-200">Name</th>
                            <th className="px-16 py-2 text-gray-200">Email</th>
                            <th className="px-16 py-2 text-gray-200">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                        <Suspense fallback={<p>Loading...</p>}>
                            {query.data && query.data?.length > 0 &&
                                // query.data?.map((user, index) => (
                                query.data?.map(({ id, name, email }: { id: number; name: string; email: string }) => (
                                    <tr className="bg-gray-50" key={id}>
                                        <td className="px-16 py-2 text-center">{id}</td>
                                        <td className="px-16 py-2">{name}</td>
                                        <td className="px-16 py-2">{email}</td>
                                        <td className="px-16 py-2">
                                            <Link href={`/users/edit/${id}`} className='btn btn-sm btn-primary'>Edit </Link>
                                            <button onClick={() => handleDelte(id)} className='btn btn-sm btn-danger ms-2'>Delete </button>
                                        </td>
                                    </tr>
                                ))}
                        </Suspense>
                    </tbody>
                </table>
            </div>

        </Layout>
    );
}