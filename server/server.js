const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')

const app = express()


app.use(fileUpload())

app.post('/uploads', (req, res) => {
        if(req.files === null){
            return res?.status(400).json({msg: "No file uploaded"})
        }
        const uploadedFile = req.files.uploadedFile
    
        uploadedFile.mv(`${path.dirname(__dirname)}/client/public/uploads/${uploadedFile.name}`, err => {
            if(err){
                console.error(err); 
                return res?.status(500).send(err)
            }
            return res?.json({fileName: uploadedFile.name, filePath: `/uploads/${uploadedFile.name}`})
        })
})

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log("Server started... at port " + PORT))