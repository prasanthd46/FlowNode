import React from 'react'

type Props = {children:React.ReactNode}

const layout = (props: Props) => {
  return (
    <div className="border-l-[1px] rounded-2xl border-t-[1px] border-[#303030] pb-20 h-screen  border-muted-foreground/20 ">
     {props.children}
    </div>
  )
}

export default layout