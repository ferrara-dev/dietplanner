import React from "react"
import FormStep from "./formStep";
import useForm from "../../../../helpers/hooks/useForm";
import usePages from "../../../../helpers/hooks/usePages";
export default function MasterForm() {

    const onSubmit = () => {
        const { email, username, password } = fields
        alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}`)
    }

    const {fields, handleChange, handleSubmit} = useForm(onSubmit);
    const {nextStep, prevStep, activeIndex} = usePages(3,1)

    return (
        <React.Fragment>
            <h1>A Wizard Form!</h1>
            <p>Step {activeIndex} </p>

            <form onSubmit={handleSubmit}>

                // Render the form steps and pass in the required props
                <FormStep
                    currentStep={activeIndex}
                    handleChange={e => e.preventDefault() && false}
                    email={fields.email}
                    nr={1}
                    nav={[["next", nextStep]]}
                />
                <FormStep
                    currentStep={activeIndex}
                    handleChange={handleChange}
                    email={fields.email}
                    nr={2}
                    nav={[["prev", prevStep],["next", nextStep]]}
                />
                <FormStep
                    currentStep={activeIndex}
                    handleChange={handleChange}
                    email={fields.email}
                    nr={3}
                    nav={[["prev", prevStep],["submit", handleSubmit]]}
                />

            </form>
        </React.Fragment>
    );
}