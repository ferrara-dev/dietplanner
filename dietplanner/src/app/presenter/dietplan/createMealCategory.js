import CreateMealForm from "../../component/form/createMealForm";
import useForm from "../../../helpers/hooks/useForm";
import Modal from "../../component/common/modal/modal";
import {useDispatch} from "react-redux";
import {createMealCategory} from "../../../actions/mealCategory";

export default function CreateMealCategory() {
    const dispatch = useDispatch();

    const addMealCategory = () => {
        dispatch(createMealCategory(fields.description))
    };

    const {fields, handleChange, handleSubmit} = useForm(addMealCategory);

    return <Modal>
        <CreateMealForm set={handleSubmit} fields={fields} handleChange={handleChange}/>
    </Modal>
}