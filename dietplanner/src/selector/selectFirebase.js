import {useMemo} from "react"
export  const getFirebase = () => ({firebase}) => {
    const fb = useMemo(() => (firebase), [firebase])
    return fb;
}