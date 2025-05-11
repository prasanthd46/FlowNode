'use client'
import CustomModal from '@/components/custom-modal'
import WorkflowForm from '@/components/forms/workflow-form'
import { Button } from '@/components/ui/button'
import { useModal } from '@/provider/modal-provider'
import { Plus } from 'lucide-react'
import React from 'react'

type Props = {}

const WorkflowButton = (props: Props) => {
  const {setOpen,setClose} = useModal()
  const handleClick=()=>{
   setOpen(
    <CustomModal title="Create a Workflow Automation"
       subheading="Workflows are a powerfull that help you automate tasks"   >
        <WorkflowForm  />
    </CustomModal>
   )
  }
    return (
    <Button size={'icon'} onClick={handleClick} className=''>
        <Plus />
    </Button>
  )
}
export default WorkflowButton