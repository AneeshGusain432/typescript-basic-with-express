import "dotenv/config";
import http from 'node:http'
import { createExpressServerApplication } from './app/index.js';
import { env } from './env.js';

function main() {
    try {
        const Server = http.createServer(createExpressServerApplication())
        const PORT: number = env.PORT ? +env.PORT : 8000

        Server.listen(PORT, () => {
            console.log(`server is running on PORT ${PORT}`)
        })
        
    } catch (error) {
        throw error
    }
}

main()

