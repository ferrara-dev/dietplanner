import React, {useEffect, useMemo} from "react";
import {useFirebase} from "react-redux-firebase";
import {useSelector} from "react-redux";
import {getFirebaseAuth} from "../../selector/selectFirebaseAuth"

export default function useFirebaseAuth(){
    const authState = useSelector(getFirebaseAuth());

    const auth = useMemo(() => (authState), [authState])
    return auth;
}