import React from "react";
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light bg-light row justify-content-center sticky-top">
                <div className="container">
                    <div className="col-3 p-0">
                        <Link className="navbar-brand" href="/"> Crud App with JSON Server </Link>
                    </div>
                    <div className="col-3 mt-3 mt-md-0 text-center d-flex flex-row">
                        <span><Link className="nav-link" href="/">Home </Link></span>
                        <span><Link className="nav-link" href="/users">Users </Link></span>
                    </div>
                </div>
            </nav>
        </>
    );
}