import {useMemo} from "react"
export  const getFirebaseAuth = () => ({firebase:{auth}}) => {
    const authentication = useMemo(() => (auth), [auth])
    return authentication;
}