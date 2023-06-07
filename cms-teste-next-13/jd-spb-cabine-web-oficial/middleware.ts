// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// // const legacyPrefixes = ['/docs', '/blog'];
// export function middleware(req: NextRequest) {
//     const { pathname } = req.nextUrl;
//     // const role = req.headers.get("authorization");

//     console.log(`middleware`)
//     console.log(`${pathname}`)


//     //
//     // let verify = req.cookies.get("loggedin");
//     // let cookie = req.cookies.get('nextjs')?.value;
//     // request.cookies.has('nextjs'); // => true
//     //let url = req.url

//     // if(!verify && url.includes('/dashboard')){
//     //     return NextResponse.redirect("http://localhost:3000/");
//     // }

//     // if (verify && url === "http://localhost:3000/") {
//     //   return NextResponse.redirect("http://localhost:3000/dashboard");
//     // }

//     // if (request.nextUrl.pathname.startsWith('/about')) {
//     //     return NextResponse.rewrite(new URL('/about-2', request.url));
//     // }

//     // if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     //     return NextResponse.rewrite(new URL('/dashboard/user', request.url));
//     // }


//     // const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

//     // if (!session) {
//     //     const requestedPage = req.nextUrl.pathname;
//     //     const url = req.nextUrl.clone();
//     //     url.pathname = `/auth/login`;
//     //     url.search = `p=${requestedPage}`;
//     //     return NextResponse.redirect(url);
//     //     return NextResponse.redirect(new URL('/', request.url));
//     // }

//     return NextResponse.redirect(new URL('/dashboard', req.url));
//     //return NextResponse.next();
// }

// export const config = {
//     matcher: [
//         //'/*',
//         //'/dashboard/:path*',
//         '/logs/:path*',
//     ],
// }