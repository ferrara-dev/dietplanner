import CreateMealForm from "../../view/form/createMealForm";
import useForm from "../../helpers/hooks/useForm";
import Modal from "../../view/common/modal/modal";
import {useDispatch} from "react-redux";
import {createMealCategory} from "../../model/actions/mealCategory";
import {useHistory} from "react-router";
export default function CreateMealCategory() {
    const dispatch = useDispatch();
    const history = useHistory();

    const addMealCategory = () => {
        dispatch(createMealCategory(fields.description));
        history.goBack();
    };

    const {fields, handleChange, handleSubmit} = useForm(addMealCategory);

    return <Modal>
        <CreateMealForm set={handleSubmit} fields={fields} handleChange={handleChange}/>
    </Modal>
}