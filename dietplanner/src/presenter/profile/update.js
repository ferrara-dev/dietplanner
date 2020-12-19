import UpdateForm from "../../view/user/updateView.";
import useForm from "../../helpers/hooks/useForm";
import {useDispatch} from "react-redux";
import {useFirebase, useFirestore} from "react-redux-firebase";

export default function Update(){
    const firebase = useFirebase();
    function updateProfile(){
        let profileUpdate = {}
        if(fields.weight)
            profileUpdate["weight"] = fields.weight;
        if(fields.activityLevel)
            profileUpdate["activityLevel"] = fields.activityLevel;
        firebase.updateProfile(profileUpdate);
    };

    const {fields, handleChange, handleSubmit} = useForm(updateProfile);
    return <UpdateForm fields={fields} onChange={handleChange} onSubmit={handleSubmit}/>
}