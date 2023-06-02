import { useQuery, useMutation, } from '@tanstack/react-query';

import { queryClient } from "@/services/queryClient";
import { getAllUsersFn, getUserFn, postUserFn, putUserFn, deleteUserFn } from "@/services/user";
import { User } from "@/models/user";

export default function useUsers() {

    const query = useQuery<User[] | null>({
        queryKey: ['useUsers'],
        queryFn: async () => await getAllUsersFn()
    })

    const mutation = useMutation({
        mutationFn: async () => await getAllUsersFn(),
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['useUsers'] }); },
        onError: error => console.error(error),
    })

    // const addMutation = useMutation({
    //     mutationFn: async () => await getAllUsersFn(),
    //     onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['useUsers'] }); },
    //     onError: error => console.error(error),
    // })

    // const addMutation = useMutation(addUser, { onSuccess: () => { queryClient.prefetchQuery('users', getUsers) } })

    const addMutation = useMutation({
        mutationFn: async (formData: any) => await postUserFn(formData),
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['useUsers'] }); },
    })

    const updateMutation = useMutation({
        mutationFn: async (formData: any) => await putUserFn(formData),
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['useUsers'] }); },
    })

    const deleteMutation = useMutation({
        mutationFn: async (id: number) => await deleteUserFn(id),
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['useUsers'] }); },
    })

    const getUser = async (id: number) => {
        const user = await getUserFn(id);
        return user;
    }

    const addUser = async (id: number, name: string, email: string) => {
        //const user = await postUserFn(id, name, email);
        //return user;
    }

    const altUser = async (id: number, name: string, email: string) => {
        //const user = await putUserFn(id, name, email);
        //return user;
    }

    const deleteUser = async (id: number) => {
        // await deleteUserFn(id);
    }

    return { query, mutation, addMutation, updateMutation, deleteMutation, getUser, addUser, altUser, deleteUser, }
}
