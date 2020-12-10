import React, {useMemo} from "react"
import {shallowEqual, useSelector} from "react-redux";

export default function useFirestoreData(propertyName) {
    const data = useSelector(state => state.firestore.data[propertyName],shallowEqual);
    const d = useMemo(() => data, [data]);
    return d;
}

/**
 * Custom hook used to access redux state.
 * property names are given in the param array.
 *
 * @param propertyChain []
 *
 * @returns The property with the name present last in the propertyChain parameter,
 * if the array is empty or conatins a prop name that does not exist undefined will be returned.
 */
export function useReduxState(propertyChain = []){
    const state = useSelector(state => {
        if(!propertyChain[0])
            return state;

        let currentState = state[propertyChain[0]];

        if(!currentState)
            return;

        let prevState;

        for(let i = 1; i < propertyChain.length; i++){
            prevState = currentState;
            currentState = currentState[propertyChain[i]];
            if(!currentState)
                return prevState;
        }
        return currentState;
    });

    const targetState = useMemo(() => (state), [state]);

    return targetState;
}