import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import  dotenv  from 'dotenv'

dotenv.config()
const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`FHIR API server running on port ${port}`);
});
