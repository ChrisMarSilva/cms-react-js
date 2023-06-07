const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

// app.prepare().then(() => {
//     createServer((req, res) => {
//         const parsedUrl = parse(req.url, true)
//         const { pathname, query } = parsedUrl

//         if (pathname === '/a') {
//             app.render(req, res, '/a', query)
//         } else if (pathname === '/b') {
//             app.render(req, res, '/b', query)
//         } else {
//             handle(req, res, parsedUrl)
//         }
//     }).listen(port, (err) => {
//         if (err) throw err
//         console.log(`> Ready on http://localhost:${port}`)
//     })
// })

app.prepare().then(() => {
    const server = express()

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
}).catch(ex => {
    console.error(ex.stack)
    process.exit(1)
})

// app.prepare().then(() => {
//     createServer((req, res) => {
//         const parsedUrl = parse(req.url, true)
//         handle(req, res, parsedUrl)
//     }).listen(process.env.PORT || 3000, (err) => {
//         if (err) throw err
//         console.log('> Ready on http://localhost')
//     })
// })