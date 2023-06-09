"use client"

import { useEffect, useState, useRef, } from "react";
import { CiTrash } from "react-icons/ci";
import Head from "next/head";
//import Image from "next/image";

//import styles from "@/styles/Home.module.scss";
import styles from "./styles/Home.module.scss";

const Teste1 = () => { // export default function Teste1() {

  const productNameRef = useRef<HTMLInputElement | null>(null);
  const productIDToDeleteRef = useRef<HTMLInputElement | null>(null);
  const productIDToUpdateRef = useRef<HTMLInputElement | null>(null);
  const productNameToUpdateRef = useRef<HTMLInputElement | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [updated, setUpdated] = useState<boolean>(false);
  const [updatedError, setUpdatedError] = useState<boolean>(false);
  const [created, setCreated] = useState<boolean>(false);
  const [deleted, setDeleted] = useState<boolean>(false);
  const [deletedError, setDeletedError] = useState<boolean>(false);

  const headers = { "Content-Type": "application/json; charset=UTF-8", };

  useEffect(() => {
    getProducts();
  }, []);

  async function addProduct() {
    const nome = productNameRef.current?.value.trim();
    if (nome!.length < 3) return;

    const body = JSON.stringify({ nome: nome, });
    const postData = { method: "POST", headers: headers, body: body, };
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`, postData);
    const response = await res.json();
    //console.log(response);

    if (response.response.message !== "success") return;
    const newproduct = response.response.product;

    setProducts([...products, { id: newproduct.id, nome: newproduct.nome, },]);
    setCreated(true);
  }

  async function getProducts() {
    const postData = { method: "GET", headers: headers, };
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`, postData);
    const response = await res.json();
    console.log(response);

    setProducts(response.products);
  }

  async function updateProduct() {
    const productIDToUpdate = productIDToUpdateRef.current?.value.trim();
    const productNameToUpdate = productNameToUpdateRef.current?.value.trim();
    if (!productIDToUpdate!.length) return;

    const body = JSON.stringify({ id: productIDToUpdate, nome: productNameToUpdate, });
    const postData = { method: "PUT", headers: headers, body: body, };
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`, postData);
    const response = await res.json();

    if (response.response.message === "error") return setUpdatedError(true);
    // if (response.response.message !== "success") return;

    const productIdUpdated = parseFloat(response.response.product.id);
    const productUpdatedName = response.response.product.nome;

    //updating state
    const productsStateAfterUpdate = products.map((product: any) => {
      if (product.id === productIdUpdated) {
        const productUpdated = { ...product, nome: productUpdatedName, };
        return productUpdated;
      } else {
        return { ...product, };
      }
    });

    setUpdated(true);
    setProducts(productsStateAfterUpdate);
  }

  async function deleteProduct(id: number) {
    setDeletedError(false);
    if (!id) return;

    // const body = JSON.stringify({ id: id, });
    //const postData = { method: "DELETE", headers: headers, body: body, };
    //const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`, postData);// ${id}
    // "X-ID": id,
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products?_id=${id}`, { method: "DELETE", headers: headers, body: JSON.stringify({ id: id, }), cache: 'no-store', });
    const response = await res.json();
    //console.log(response.response);

    if (response.response.message === "error") return setDeletedError(true);

    const idToRemove = parseFloat(response.response.id);
    setProducts(products.filter((p: any) => p.id !== idToRemove));
    // setProducts((prevState: any[]) => ({ ...prevState, prevState.filter((p: any) => p.id !== idToRemove); }));
    setDeleted(true);
  }

  return (
    <>
      {" "}

      <Head>
        <title>CRUD With Next.Js & MySQL Demo</title>
      </Head>

      <div className={styles.container}>

        <section className={styles.main}>
          <h1>CRUD With Next.Js & MySQL Demo</h1>
          <div className={styles.heading}>
            <a href="/api/products" target="_blank" rel="noreferrer">Database API data</a>
          </div>
        </section>

        <section>
          <div className={styles.read}>
            <h2>Read</h2>
            <div className={styles.products}>
              {!products.length ? <>No products found</> : null}
              {deletedError ? <div className={styles.error}>Error!</div> : null}
              {products.map((item: any, index: number) => {
                return (
                  <div key={item.id} className={styles.product}>
                    <span>id</span>: {item.id} <br />{" "}
                    <span>nome</span>: {item.nome}{" "}
                    <CiTrash className={styles.icons} onClick={() => deleteProduct(item.id)} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className={styles.create}>
            <h2>Create</h2>
            <div className={styles.input}>
              <div className={styles.label}>Product Name</div>
              <input type="text" ref={productNameRef} />
            </div>
            {created ? <div className={styles.success}>Success!</div> : null}
            <div className={styles.buttonarea}>
              <input className={styles.button} value="Save" type="button" onClick={addProduct} />
            </div>
          </div>
        </section>

        <section>
          <div className={styles.update}>
            <h2>Update</h2>
            <div className={styles.input}>
              <div className={styles.label}>Product Id</div>
              <input type="text" ref={productIDToUpdateRef} />
            </div>
            <div className={styles.input}>
              <div className={styles.label}>Product Name</div>
              <input type="text" ref={productNameToUpdateRef} />
            </div>
            {updated ? <div className={styles.success}>Success!</div> : null}
            {updatedError ? <div className={styles.error}>Error!</div> : null}
            <div className={styles.buttonarea}>
              <input className={styles.button} value="Update" type="button" onClick={updateProduct} />
            </div>
          </div>
        </section>

        <section>
          <div className={styles.delete}>
            <h2>Delete</h2>
            <div className={styles.input}>
              <div className={styles.label}>Product Id</div>
              <input type="text" ref={productIDToDeleteRef} />
            </div>
            {deleted ? <div className={styles.success}>Success!</div> : null}
            {deletedError ? <div className={styles.error}>Error!</div> : null}
            <div className={styles.buttonarea}>
              <input className={`${styles.button} ${styles.warning}`} value="Delete" type="button" onClick={() => deleteProduct(productIDToDeleteRef.current?.value)} />
            </div>
          </div>
        </section>

        <footer>
          <p>
            Create, Read, Update, Delete database data in React, Node and
            Next.JS by Omar Elbaga{" "}
            <a href="https://github.com/oelbaga/nextjs-mysql" target="_blank" rel="noreferrer" > GitHub </a>
          </p>
        </footer>

      </div>
    </>
  )
}

export default Teste1;
