
export default function Footer() {
    return (
        <>
            {/* <footer className="fixed-bottom text-center" style={{ backgroundColor: "#f5f5f5", lineHeight: '60px', position: 'absolute', width: '100%', height: '60px', }}>
                <span className="text-muted font-weight-bold">Rodapé...</span>
            </footer> */}

            <footer className='fixed-bottom text-center bg-gray-900'>
                <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
                    <nav className='-mx-5 -my-2 flex flex-wrap justify-center' aria-label='Footer'>
                        <div className='px-5 py-2'>
                            <p className='text-base text-gray-400 hover:text-gray-300 transition'>  Rodapé</p>
                        </div>
                    </nav>
                    <p className='mt-8 text-center text-base text-gray-500'>&copy; 2022 Nayless - all rights reserved.</p>
                </div>
            </footer>

        </>
    );
}