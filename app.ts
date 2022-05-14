require('dotenv').config();

import morgan from "morgan";
import express from 'express';
import Router from "./routes";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

app.use(cookieParser());


app.use(cors({
  credentials: true
  , methods: ['GET', 'POST', 'PUT', 'DELETE'],
  origin: 'http://localhost:3000'
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(Router);

export default app;

