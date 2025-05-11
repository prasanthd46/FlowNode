'use client'
import { FileUploaderRegular } from '@uploadcare/react-uploader/next'
import type { OutputFileEntry } from '@uploadcare/react-uploader'
import '@uploadcare/react-uploader/core.css'

type Props = {
  onUpload: (cdnUrl: string) => void
}

const Uploadcare = ({ onUpload }: Props) => {
  return (
    <div>
      <FileUploaderRegular
        pubkey="a7afd13cbcc0a96d2465"
        sourceList="local, camera, url, dropbox, gdrive"
        cameraModes="photo, video"
        classNameUploader="uc-dark"
        onChange={(output) => {
          const uploadedFile = output.successEntries?.[0] as OutputFileEntry
          if (uploadedFile && uploadedFile.cdnUrl) {
            onUpload(uploadedFile.cdnUrl)
          }
        }}
      />
    </div>
  )
}

export default Uploadcare
