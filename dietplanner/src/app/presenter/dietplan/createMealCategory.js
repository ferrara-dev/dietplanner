import CreateMealForm from "../../component/form/createMealForm";
import useForm from "../../../helpers/hooks/useForm";
import Modal from "../../component/common/modal/modal";
import {useFirestore, useFirestoreConnect} from "react-redux-firebase";
import useFirebaseAuth from "../../../helpers/hooks/usefirebaseAuth";
import {useDispatch, useSelector} from "react-redux";
import useFirestoreData from "../../../helpers/hooks/useFirebaseState";
import {setCategoryDescription} from "../../../actions/mealCategory";

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

    const addMealCategory = () => {
        const isPresent = currentMealPlan.mealPlan.some(element => {
            return element.description === fields.description
        });
        if(isPresent){
            throw Error("Meal category with description " + fields.description + " is already present");
        }
        else{
            const newMeal = {description: fields.description, alternatives: []}
            const updatedPlan = currentMealPlan.mealPlan.concat(newMeal);
            const payload = {...currentMealPlan, mealPlan: updatedPlan};
            try {
                firestore.collection('mealPlans').doc(`${userUID}`).set(payload);
                dispatch(setCategoryDescription(fields.description));
            } catch (err) {
                console.log(err);
            }
        }
    };

    const {fields, handleChange, handleSubmit} = useForm(addMealCategory);

    return <Modal>
        <CreateMealForm set={handleSubmit} fields={fields} handleChange={handleChange}/>
    </Modal>
}