import React from "react"
import {shallowEqual, useSelector} from "react-redux";

export default function useFirebaseState(propertyName) {
    const prop = useSelector( state => {
        return state.firebase[propertyName];
    }, shallowEqual);

    return React.useMemo(()=> prop, [prop]);
}