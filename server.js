import jsonServer from 'jsonServer'

const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(

    jsonServer.rewrite({
        "/*": "/$1",
    })
);

server.use(router);

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
})

export default server;