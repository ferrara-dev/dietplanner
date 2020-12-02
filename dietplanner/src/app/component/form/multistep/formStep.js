
export default function FormStep({currentStep, onChange, nr, value, nav}){
    if (currentStep !== nr) {
        return null
    }

    return(
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
                className="form-control"
                id="email"
                name="email"
                type="text"
                placeholder="Enter email"
                defaultValue={value || ""} // Prop: The email input data
                onChange={onChange} // Prop: Puts data into state
            />
            {nav.map(btn => {
                return <button type="button" onClick={btn[1]}>{btn[0]}</button>
            })}
        </div>
    )
}