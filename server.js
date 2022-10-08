import express from 'express';
import connectDatabase from './config/db';

//initialize express 
const app = express();

//connect to database
connectDatabase();

//middleware
app.use(express.json({ extended: false}));

//API Endpoints
//@route GET
//@desc Test endpoint
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

//@route POST api/guitars
//@desc Register Guitar
app.post('/api/guitars', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

//listener
app.listen(3000, () => console.log('Express server running on port 3000'));