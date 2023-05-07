import type { ReactNode } from "react"

import Header from "./header"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import Footer from "./footer"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>
         <Header />
          <div className="d-flex">
              <Sidebar />
              <div className="d-flex flex-column w-100">
                  <Navbar />
                  <div className="d-flex flex-column" style={{ height: 'calc(100vh - 57px)' }}>
                      {children}
                      <Footer />
                  </div>
              </div>                     
          </div> 
      </main>
    </>
  )
}