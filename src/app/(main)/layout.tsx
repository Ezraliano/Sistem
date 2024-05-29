import InfoBar from "@/components/infobar";
import Menuoption from "@/components/sidebar";
import React from "react";


type props = {children: React.ReactNode}

const Layout =(props: props)=>{
    return(
        <div className="flex overflow-hidden h-screen">
            <Menuoption />
            <div className="w-full">
                {props.children}
            </div>
        </div>
    )
}
export default Layout