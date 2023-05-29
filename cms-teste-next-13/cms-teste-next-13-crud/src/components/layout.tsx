import Navbar from './navbar';
import Footer from './footer';

type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className='container'>
            <Navbar />
            {/* <h2>Crud App with JSON Server</h2> */}
            <main>
                {children}
            </main>
            <Footer />
        </div >
    );
}