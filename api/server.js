const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')

const app = express()


app.use(fileUpload())

app.post('/uploads', (req, res) => {
    try{
        if(req.files === null){
            return res.status(400).json({msg: "No file uploaded"})
        }
        const uploadedFile = req.files.uploadedFile
    
        uploadedFile.mv(`${path.dirname(__dirname)}/public/uploads/${uploadedFile.name}`, err => {
            if(err){
                console.error(err); 
                return res.status(500).send(err)
            }
            res.json({fileName: uploadedFile.name, filePath: `/uploads/${uploadedFile.name}`})
        })
        res.status(200).send("File uploaded")
    }
    catch(err){
        res.status(500).json({error: err.response.data.msg})
    }
})

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log("Server started... at port " + PORT))