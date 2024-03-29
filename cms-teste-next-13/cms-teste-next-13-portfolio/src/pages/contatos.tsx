import { CopyButton } from '@/components/commons/CopyButton';
import Head from 'next/head';

const Contatos = () => {
    return (
        <>
            <Head>
                <title>Contatos | Huriel</title>
            </Head>
            <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
                <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>
                <ul className="table mx-auto space-y-6 md:space-y-8">
                    <li className="md:text-xl">
                        <span className="font-bold">E-mail</span>
                        <div className="flex gap-1 md:gap-3 items-center">
                            <a
                                href="mailto:chris.mar.silva@gmail.com"
                                target="_blank"
                                className="text-sm md:text-lg text-slate-300 underline truncate"
                            >
                                chris.mar.silva@gmail.com
                            </a>
                            <CopyButton textToCopy="chris.mar.silva@gmail.com" />
                        </div>
                    </li>
                    <li>
                        <span className="font-bold">LinkedIn</span>
                        <div className="flex gap-1 md:gap-3 items-center">
                            <a
                                href="https://www.linkedin.com/in/cristiano-martins-da-silva-a6b0ba111/"
                                target="_blank"
                                className="text-sm md:text-lg text-slate-300 underline truncate"
                            >
                                https://www.linkedin.com/in/cristiano-martins-da-silva-a6b0ba111/
                            </a>
                        </div>
                    </li>
                    <li>
                        <span className="font-bold">GitHub</span>
                        <div className="flex gap-1 md:gap-3 items-center">
                            <a
                                href="https://github.com/ChrisMarSilva"
                                target="_blank"
                                className="text-sm md:text-lg text-slate-300 underline truncate"
                            >
                                https://github.com/ChrisMarSilva
                            </a>
                        </div>
                    </li>
                    <li>
                        <span className="font-bold">YouTube</span>
                        <div className="flex gap-1 md:gap-3 items-center">
                            <a
                                href="https://www.youtube.com/ChrisMarSilva"
                                target="_blank"
                                className="text-sm md:text-lg text-slate-300 underline truncate"
                            >
                                https://www.youtube.com/ChrisMarSilva
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Contatos;