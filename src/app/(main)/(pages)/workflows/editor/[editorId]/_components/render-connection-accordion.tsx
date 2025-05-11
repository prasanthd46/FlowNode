'use client'
import ConnectionCard from '@/components/ConnectionComp/connection-card'
import { AccordionContent } from '@/components/ui/accordion'
import MultipleSelector from '@/components/ui/multiple-selector'
import { useNodeConnections } from '@/provider/connections-providers'
import { EditorState } from '@/provider/editor-provider'
import React, { useMemo } from 'react'
import { Connection } from '@/lib/type'
import { useFuzzieStore } from '@/store'


type Props = {}

const RenderConnectionAccordion = ({connection,state}: {connection:Connection,state:EditorState}) => {

    const {
        title,
        image,
        description,
        connectionKey,
        accessTokenKey,
        alwaysTrue,
        slackSpecial}=connection
    
    const {nodeConnection } = useNodeConnections()
     

 
      
    const {slackChannels,selectedSlackChannels,setSelectedSlackChannels} = useFuzzieStore()
   
    const connectionData = (nodeConnection as any)[connectionKey]
   
   
  const isConnected =
    alwaysTrue ||
    (nodeConnection[connectionKey] &&
      accessTokenKey &&
      connectionData[accessTokenKey!])
    return (
        <AccordionContent key={title}>

        {state.editor.selectedNode.data.title === title && (
          <>
            
            <ConnectionCard
              title={title}
              icon={image}
              description={description}
              type={title}
              connected={{ [title]: isConnected }}
            />
            {console.log()}
            {slackSpecial && isConnected && (
              
              <div className="p-8">
                
                {slackChannels?.length ? (
                  <>
                    <div className="mb-4 ml-1">
                      Select the slack channels to send notification and messages:
                    </div>
                    {console.log(selectedSlackChannels)}
                    <MultipleSelector
                      value={selectedSlackChannels}
                      onChange={setSelectedSlackChannels}
                      defaultOptions={slackChannels}
                      placeholder="Select channels"
                      emptyIndicator={
                        <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                          no results found.
                        </p>
                      }
                    />
                  </>
                ) : (
                  'No Slack channels found. Please add your Slack bot to your Slack channel'
                )}
              </div>
            )}
          </>
        )}
      </AccordionContent>
  )
}

export default RenderConnectionAccordion