import useFirebaseAuth from "../helpers/hooks/usefirebaseAuth";
import {useFirestoreConnect} from "react-redux-firebase";


export default function withFirestoreSubscription(WrappedComponent, collection){
    return (props) => {

        const userUID = useFirebaseAuth().uid;
        useFirestoreConnect(collection.map(col => {
            return {
                collection: col.name,
                doc: userUID,
                storeAs: col.as
            }
        })
        );

        return <WrappedComponent {...props}/>
    }
}