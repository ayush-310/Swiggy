import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    const [onlineStatus, setonlineStatus] = useState(true)

    // Check if online

    useEffect(() => {
        window.addEventListener("offline", () => {
            setonlineStatus(false)
        })
        
        window.addEventListener("online", () => {
            setonlineStatus(true)
        })
    }, [])

    return onlineStatus
}

export default useOnlineStatus