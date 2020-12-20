import {useReduxState} from "../../../../helpers/hooks/useFirebaseState";

import {Footer} from "../../../common/layout/styled";
import {makeStyles} from "@material-ui/core";

const useFooterStyles = makeStyles(({theme, palette, breakpoints}) => ({
   footer:{
       position : "fixed",
       bottom : 0,
       backgroundImage: "radial-gradient(top, #b8f4f9, #c3f4f6, #cdf4f4, #d7f4f3, #e0f4f2)",
       minHeight : "50px",
   }
}));
export default function DietFooter(){
    const currentMeal = useReduxState(["currentMeal"]);
    const currentCategory = useReduxState(["currentMealCategory"]);
    const styles = useFooterStyles();

    return <Footer className={styles.footer}>
        <div>
            Footer
        </div>
    </Footer>
}