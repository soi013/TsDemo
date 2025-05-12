import fastify from "fastify";

console.log("demo_fastify.ts");
console.log("## npmの例 fastify");

const app = fastify();

app.get('/', (req, reply) => {
    reply.type('text/html').send('HELLO WORLD');
    console.log("received request", { hostname: req.hostname, url: req.url, method: req.method });
});

// ポート3000でサーバーを起動
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


