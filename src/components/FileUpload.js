import React from 'react'

const FileUpload = () => {
  return (
    <>
    <form action="post" className="d-flex flex-column justify-content-center align-items-center">
        <div class="mb-3 col-md-6 col-sm-10 col-10">
            <div className="input-group">                
                <input class="form-control" type="file" id="customFileInput"/>
            </div>
        </div>
        <button type="submit" className="btn btn-primary col-md-2 col-sm-4 col-4">Upload</button>
    </form>
    </>
  )
}

export default FileUpload
