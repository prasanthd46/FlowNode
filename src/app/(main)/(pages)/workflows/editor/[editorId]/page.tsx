import { ConnectionsProvider } from '@/provider/connections-providers'
import EditorProvider from '@/provider/editor-provider'
import React from 'react'
import EditorCanvas from './_components/editor-canvas'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="h-full">
            <EditorProvider>
                <ConnectionsProvider>
                    <EditorCanvas />
                </ConnectionsProvider>

            </EditorProvider>
    </div>
  )
}
export default page