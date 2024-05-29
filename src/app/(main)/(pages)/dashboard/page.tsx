import Menuoption from "@/components/sidebar"
import React from "react"
import InfoBar from "@/components/infobar"
type props = {}

const Dashboard = () =>{
    return <div className="flex flex-col gap-4 relative">
    <h1 className="text-3xl sticky top-0 z- [1@1 p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
Dashboard 
<InfoBar/>
</h1>

 </div>
}
export default Dashboard