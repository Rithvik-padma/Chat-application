import React, {useState} from 'react'
import axios from 'axios'


const FileUpload = () => {
    const [file, setFile] = useState({});
    const [uploadedFile, setUploadedFile] = useState({});

    const onFileChange = e => setFile(e.target.files[0])

    const onSubmit = async e => {
        e.preventDefault();
        const formdata = new FormData() 
        formdata.append('uploadedFile', file)

        try{
            const response = await axios.post('http://localhost:5500/uploads', formdata, {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            });

            const {fileName, filePath} = response.data
            setUploadedFile({fileName, filePath})
            console.log(uploadedFile)
        }
        catch(err){
            if(err.response.status === 500){
                console.error("There was a problem with the server")
            }
            else{
                console.error(err.response.data.msg)
            }
        }
    }

    return (
        <>
            <form onSubmit={onSubmit} className="d-flex flex-column justify-content-center align-items-center">
                <div className="mb-3 col-md-6 col-sm-10 col-10">
                    <div className="input-group">                
                        <input className="form-control" type="file" id="customFileInput" onChange={onFileChange}/>
                    </div>
                </div>
                <input type="submit" value="Upload" className="btn btn-primary col-md-2 col-sm-4 col-4" />
            </form>
        </>
    )
}

export default FileUpload
