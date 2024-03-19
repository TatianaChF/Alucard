import express, { Express } from "express";
import dotenv from "dotenv";
import { router } from "./routes/test.js";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const keycloakHost = '192.168.5.6';
const realmName = 'tikaya';

app.use((req: any, res: any, next: any) => {
    if (req.headers.authorization) {
        const options = {
            method: 'GET',
            url: `https://${keycloakHost}/auth/realms/${realmName}/protocol/openid-connect/userinfo`,
            headers: {
                Authorization: req.headers.authorization,
            },
        };

        async function getData() {
            const url = `https://${keycloakHost}/auth/realms/${realmName}/protocol/openid-connect/userinfo`;
            try {
                let response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        Authorization: req.headers.authorization,
                    }
                });

                if (response.status !== 200) {
                    res.status(401).json({
                        error: `unauthorized`
                    });
                }
                else {
                    next();
                }
            } catch(error) {
                console.log(error);
            }
            
        }
    }

})