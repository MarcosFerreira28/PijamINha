import { app } from "./app"
import { env } from "./env/index"

app.listen({
    host: '0.0.0.0',
    port: env.PORT
}).then(() => {
    console.log("Servidor está rodando na porta: 3333\n")
    console.log("http://localhost:" + env.PORT)
})