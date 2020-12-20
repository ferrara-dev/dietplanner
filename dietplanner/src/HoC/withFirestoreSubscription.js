import useFirebaseAuth from "../helpers/hooks/usefirebaseAuth";
import {useFirestoreConnect} from "react-redux-firebase";
import {useReduxState} from "../helpers/hooks/useFirebaseState";


export default function withFirestoreSubscription(WrappedComponent, config){
    return (props) => {

        const userUID = useFirebaseAuth().uid;
        useFirestoreConnect(config.map(({collection, as} )=> {
            return {
                collection: collection,
                doc: userUID,
                storeAs: as
            }
        })
        );

        const firestoreData = useReduxState("firestore","data");
        const childProps = {firestoreData, ...props};

        return <WrappedComponent {...childProps}/>
    };
}

