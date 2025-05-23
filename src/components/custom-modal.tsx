
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  
  import React from 'react'
import { Button } from "./ui/button"
import { useModal } from "@/provider/modal-provider"
  
  type Props = {
    title:string,
    subheading:string,
    children:React.ReactNode
    defaultOpen?:boolean
}
  
  const CustomModal = ({title,subheading,children,defaultOpen}: Props) => {
    const {isOpen,setClose} = useModal()
    const handleClose = () => setClose()
   
    return (
        <Drawer open={isOpen} onClose={handleClose}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-center">{title}</DrawerTitle>
            <DrawerDescription className="text-center flex flex-col items-center gap-4 h-96 overflow-scroll">
                {subheading}
                
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="flex flex-col gap-4 bg-background border-t-[1px] border-t-muted">
            
            <DrawerClose asChild>
              <Button variant="ghost" className="w-full" onClick={handleClose} >Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
    )
  }
  export default CustomModal