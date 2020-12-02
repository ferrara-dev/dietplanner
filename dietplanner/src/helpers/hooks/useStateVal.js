import {useState, useEffect} from "react"
import {useSelector} from "react-redux";
export default function useStateVal(propertyNames){
    const [value, setValue] = useState(undefined);
    const state = useSelector(state => state);

    useEffect(() => {
        const words = propertyNames.split('.');
        let prevValue = null;
        words.forEach(word => {

        });
    }, [propertyNames])
}