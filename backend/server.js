import express from "express";
import { notFound,errorHandler } from './middleware/errormiddleware.js'
import currencyRoute from './route/currencyRoute.js'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app=express()

app.use(express.json())


app.use('/api/currency',currencyRoute)

if (process.env.NODE_ENV === 'production') {
    const frontendBuildPath = path.join(__dirname, '../frontend/build');
    
    app.use(express.static(frontendBuildPath));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(frontendBuildPath, 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send("Hii from Amit");
    });
}

app.use(notFound)
app.use(errorHandler)
const port=process.env.PORT||5000
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})