import UpdateForm from "../../view/user/updateView.";
import useForm from "../../helpers/hooks/useForm";
import {useDispatch} from "react-redux";
import React from "react";
import {useFirestoreConnect} from "react-redux-firebase";
import useFirebaseAuth from "../../helpers/hooks/usefirebaseAuth";
import {submitUpdate} from "../../model/actions/user";
import {useHistory} from "react-router"
export default function Update(){
    const [submitted, setSubmitted] = React.useState(false);
    const [submissionError, setSubmissionError] = React.useState(undefined);
    const userUID = useFirebaseAuth().uid;
    const dispatch = useDispatch();
    const history = useHistory();

    React.useEffect(() => {
        setSubmissionError(undefined);
    });

    useFirestoreConnect([{
        collection : "updates",
        doc: userUID,
        storeAs: "updates"
    },
    ]);

    function updateProfile(){
        let profileUpdate = {}

        if(fields.weight)
            profileUpdate["weight"] = fields.weight;
        if(fields.activityLevel)
            profileUpdate["activityLevel"] = fields.activityLevel;

        try{
            setSubmissionError(undefined);
            dispatch(submitUpdate(profileUpdate));
            setSubmitted(true);
        } catch (e) {
            setSubmissionError(e);
        };

    };

    const {fields, handleChange, handleSubmit} = useForm(updateProfile);
    return <UpdateForm
        fields={fields}
        onChange={handleChange}
        onSubmit={handleSubmit}
        error={submissionError}
        submitted={submitted}
        goToProfile={() => history.push("/profile/personal")}
    />
}