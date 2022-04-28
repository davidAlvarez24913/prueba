import express from 'express'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/prueba' ,( _, res) =>{
    console.log("hola mundo")
    res.send({ message: 'Hola mundo',OK:200,status:200})
    //res.statusMessage ='200'
})
try {
    app.listen(PORT, () => {
   
        return console.log(` Servidor corriendo en el puerto: ${PORT}`)
    })
} catch (error) {
    console.error(error)
}

