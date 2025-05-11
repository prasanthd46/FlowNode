import React from 'react'
import WorkflowButton from './_components/WorkflowButton'
import WorkFlows from './_components'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 relative ">
        <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blue-lg flex items-center border-b justify-between">
            Workflows
        <WorkflowButton></WorkflowButton>
        </h1>
        <WorkFlows />

    </div>
  )
}
export default page