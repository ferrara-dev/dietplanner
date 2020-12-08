import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import React, {useState, useEffect} from "react";

export default function (componentRef){
    const [ref, setRef] = useState(componentRef);


    console.log(ref);

    function scrollLock (){
        disableBodyScroll(ref.current);
        console.log(ref.current)
        return enable;
    }

    function enable () {
        enableBodyScroll(ref.current);
    }

    return {scrollLock};
}