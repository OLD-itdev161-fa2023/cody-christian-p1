import express from 'express';
import connectDatabase from './config/db';
import {check, validationResult } from 'express-validator';
import cors from 'cors';

//initialize express 
const app = express();


//connect to database
connectDatabase();

//middleware
app.use(express.json({ extended: false}));
app.use(
    cors({
        origin: 'http://localhost:3000'
    })
);

//API Endpoints
//@route GET
//@desc Test endpoint
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

//@route POST api/guitars
//@desc Register Guitar
app.post('/api/guitars', 
    [
        check('model', 'Please enter model name').not().isEmpty(),
        check('finish', 'Please enter finish type').not().isEmpty(),
        check('brand', 'Please enter guitar brand').not().isEmpty(),
        check('value', 'Please enter a dollar amount for value').not().isEmpty()
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            res.send(req.body);
        }        
    }
);

//listener
const port = 4000;
app.listen(port, () => console.log(`Express server running on port ${port}`));