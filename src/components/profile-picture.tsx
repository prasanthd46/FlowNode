'use client'
import React, { useState } from 'react'
import UploadCare from './UploadCare'
import { useRouter } from 'next/navigation'
import Image  from "next/image"
import { Button } from './ui/button'
import { X } from 'lucide-react'


type Props = {
    userImage : string | null
    onDelete? : any
    onUpload? : any
}

const ProfilePicture = ({userImage,onDelete,onUpload}: Props) => {
    const router = useRouter()
    const [currentImage, setCurrentImage] = useState(userImage)
    const onRemoveProfileImage = async()=>{
        const response = await onDelete()
        if(response){
            router.refresh()
        }
    }
    const onUploadImage = async (url: string) => {
        const response = await onUpload?.(url)
        if (response) {
            setCurrentImage(url)
        }
    }
    return (
    <div className="flex flex-col">
        <p className="text-lg text-white">
            Profile Pic
        </p>
        <div className="flex h-[30vh] flex-col items-center justify-center">
            {userImage? <> 
                <div className="relative h-full w-2/12">
                    <Image
                        src={userImage}
                        alt="User_Image"
                        fill
                    />
                </div>
                <Button
                    onClick={onRemoveProfileImage}
                    className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
                >
                    <X /> RemoveLogo
                </Button>
            </>:<UploadCare onUpload={onUploadImage} />}
            
        </div>
    </div>
  )
}

export default ProfilePicture