import { useEffect, useState } from 'react'

export const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        
        const handleWidthResize = () => setWidth( window.innerWidth )
        window.addEventListener('resize', handleWidthResize);

    }, [width])

    return [ width ]
}