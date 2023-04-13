const express = require('express')
const fileUpload = require('express-fileupload')

const app = express()

app.use(fileUpload())

app.post('/upload', (req, res) => {
    if(req.files === null){
        return res.status(400).json({msg: "No file uploaded"})
    }
    const uploadedFile = req.files.uplodedFile

    uploadedFile.mv(`${__dirname}/../public/uploads/${uploadedFile.name}`, err => {
        if(err){
            console.error(err);
            res.status(500).send(err)
        }
        res.json({fileName: uploadedFile.name, filePath: `/uploads/${uploadedFile.name}`})
    })
})

app.listen('8081', () => console.log("Server started..."))