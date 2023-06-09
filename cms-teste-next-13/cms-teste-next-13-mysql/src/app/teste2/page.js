"use client";

//import { GetServerSideProps, InferGetServerSidePropsType, GetServerSidePropsContext, } from 'next';
import { useState, useEffect, } from "react";
import Layout from "./component/Layout";
import AppContext from './contexts/appContext';
//import { User } from '@prisma/client';

// type Repo = {
//   users: User[] | null
// }

// export async function getServerSideProps(ctx) {
// export const getServerSideProps: GetServerSideProps = async (ctx) => {
// export const getServerSideProps: GetServerSideProps<{ users: Repo }> = async (ctx) => {
//   console.log('getServerSideProps');

//   const url = `http://localhost:3000/api/users`; // `${process.env.NEXT_PUBLIC_URL}/api/users`;
//   const data = { method: "GET", headers: { "Content-Type": "application/json; charset=UTF-8" } };
//   const res = await fetch(url, data);

//   const users = await res.json();
//   console.log(users);

//   return { props: { users: users } }
// }

// export async function getServerSideProps() {
// export const getServerSideProps = async (context) => {
//   try {
//     console.log('Teste2.getServerSideProps');

//     const url = `http://localhost:3000/api/users`; // `${process.env.NEXT_PUBLIC_URL}/api/users`;
//     const data = { method: "GET", headers: { "Content-Type": "application/json; charset=UTF-8" } };
//     const res = await fetch(url, data);

//     const users = await res.json();
//     console.log(users);

//     return { props: { users: users } }
//   } catch (error) {
//     console.log(error);
//     return { props: { error: error.error } };
//   }
// }

// function Teste2({ users }: Repo) { // const Teste2 = ({ users, }: Repo) => { // const Teste2 = () => {// 
//function Teste2({ users, }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//export default function Teste2({ users }) {
// const Teste2 = ({ users }) => {
const Teste2 = () => {
  const [myUsers, setMyUsers] = useState([]); // useState(users); // <User[] | null>
  // console.log('Teste2.myUsers');
  // console.log(myUsers);
  // [{JSON.stringify(props)}]

  useEffect(() => {
    const getData = async () => {
      const url = `http://localhost:3000/api/users`; // `${process.env.NEXT_PUBLIC_URL}/api/users`;
      const data = { method: "GET", headers: { "Content-Type": "application/json; charset=UTF-8" } };
      const res = await fetch(url, data);
      const users = await res.json();
      // console.log(users);
      setMyUsers(users);
    }

    getData()
  }, []);


  return (
    <>
      <main>
        <AppContext.Provider value={{ users: myUsers, setMyUsers: setMyUsers }}>
          <Layout />
        </AppContext.Provider>
      </main>
    </>
  )
}

export default Teste2;
