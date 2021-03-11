import React, {useCallback} from 'react'
import Dropzone, {useDropzone} from './dropzone-index'

export default function MyDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
<Dropzone 
    onDrop={acceptedFiles => console.log(acceptedFiles)}
    preventDropOnDocument
    >
  {({getRootProps, getInputProps}) => (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  )}
</Dropzone>
  )
}