import {useEffect, useState} from 'react'

export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        setMatches(media.matches)

        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches)
        }

        media.addEventListener('change', listener)
        return () => media.removeEventListener('change', listener)
    }, [query])

    return matches
}

export const useIsMobile = () => {
    return useMediaQuery('(max-width: 768px)')
}
