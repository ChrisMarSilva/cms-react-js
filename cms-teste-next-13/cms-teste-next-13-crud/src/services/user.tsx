import api from "@/services/api";
import { User } from "@/models/user";

export const getAllUsersFn = async (): Promise<User[]> => {
    try {
        const res = await api.get<User[]>('user');
        return res.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch user');
    }
}

export const getUserFn = async (id: number): Promise<User> => {
    try {
        const res = await api.get<User>(`user/${id}`);
        return res.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch user');
    }
}

// formData: FormData
//export const postUserFn = async (id: number, name: string, email: string): Promise<User> => {
export const postUserFn = async (formData: any): Promise<User> => {
    try {
        const body = { id: formData.id, name: formData.name, email: formData.email };
        const res = await api.post<User>('user', body);
        return res.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch user');
    }
}

//({ id, formData, }: { id: number; formData: FormData; })
//xport const putUserFn = async (id: number, name: string, email: string): Promise<User> => {
export const putUserFn = async (formData: any): Promise<User> => {
    try {
        const body = { id: formData.id, name: formData.name, email: formData.email };
        const res = await api.put<User>(`user/${formData.id}`, body);
        return res.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch user');
    }
}

export const deleteUserFn = async (id: number): Promise<User> => {
    try {
        const res = await api.delete<User>(`user/${id}`);
        return res.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch user');
    }
}
