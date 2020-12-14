import CreateMealForm from "../../view/form/createMealForm";
import useForm from "../../helpers/hooks/useForm";
import Modal from "../../view/common/modal/modal";
import {useDispatch} from "react-redux";
import {createMealCategory} from "../../model/actions/mealCategory";
import {useHistory} from "react-router";
import {useFirestoreConnect} from "react-redux-firebase";
import {useReduxState} from "../../helpers/hooks/useFirebaseState";
import React from "react";

export default function CreateMealCategory() {
    let isMounted = false;
    const dispatch = useDispatch();
    const history = useHistory();
    const userUID = useReduxState(["firebase", "auth", "uid"]);
    const currentMealCategory = useReduxState(["currentMealCategory"]);

    const [error, setError] = React.useState(undefined);

    useFirestoreConnect([{
        collection : "mealPlans",
        doc: userUID,
        storeAs: "mealPlan"
    },{
        collection : "users",
        doc: userUID,
        storeAs: "user"
    },
    ]);

    React.useEffect(() => {
        isMounted = true;
        return () => {
            isMounted = false
        };
    }, []);

    const addMealCategory = () => {
        try {
            dispatch(createMealCategory({description: fields.description, priority: fields.priority}));
            history.goBack();
        } catch (error) {
            if (isMounted)
                setError(error);
        }
    };

    const cancel = () => {
        history.goBack();
    }

    const updateMealCategory = () => {

    };

    const {fields, handleChange, handleSubmit} = useForm(addMealCategory);

    return <Modal>
        <CreateMealForm
            set={handleSubmit}
            fields={fields}
            handleChange={handleChange}
            mealCategory={currentMealCategory}
            error={{
                reset: () => setError(undefined),
                err: error,
            }}
        />
    </Modal>
}