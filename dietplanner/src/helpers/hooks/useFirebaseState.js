import React, {useMemo} from "react"
import {shallowEqual, useSelector} from "react-redux";

export default function useFirestoreData(propertyName) {
    const data = useSelector(state => state.firestore.data[propertyName],shallowEqual);
    const d = useMemo(() => data, [data]);
    return d;
}