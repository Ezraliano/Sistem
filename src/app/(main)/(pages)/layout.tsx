
import React from "react"

type props = {children: React.ReactNode}

const Layout =({ children }: props) =>{
    return (
        <div className="border-1-[1px] border-t-[1px] pb-20 h-screen rounded-1-3xl border-muted-foreground/20 overflow-scroll">
           {children}
        </div>
    )
}
export default Layout