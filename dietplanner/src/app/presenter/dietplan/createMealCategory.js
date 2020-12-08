import CreateMealForm from "../../component/form/createMealForm";
import useForm from "../../../helpers/hooks/useForm";
import Modal from "../../component/common/modal/modal";
import {useFirestore, useFirestoreConnect} from "react-redux-firebase";
import useFirebaseAuth from "../../../helpers/hooks/usefirebaseAuth";
import {useDispatch, useSelector} from "react-redux";
import useFirestoreData from "../../../helpers/hooks/useFirebaseState";

export default function CreateMealCategory() {
    const userUID = useFirebaseAuth().uid;

    useFirestoreConnect({
        collection : "mealPlans",
        doc: userUID,
        storeAs: "mealPlan"
    });

    const dispatch = useDispatch();
    const firestore = useFirestore();
    const currentMealPlan = useFirestoreData("mealPlan");
    const mealPlan = useSelector(state => state.nutrition.currentMeal);
    const state  = useSelector(state => state);
    const addMeal = () => {
        const newMeal = {meal: fields.title, alternatives: []}
        const updatedPlan = currentMealPlan.mealPlan.concat(newMeal);
        const payload = {...currentMealPlan, mealPlan: updatedPlan};
        firestore.collection('mealPlans').doc(`${userUID}`).set(payload);
    }
    console.log(state)
    function submit() {

    }

    const {fields, handleChange, handleSubmit} = useForm(addMeal);

    return <Modal>
        <CreateMealForm set={handleSubmit} fields={fields} handleChange={handleChange}/>
    </Modal>
}