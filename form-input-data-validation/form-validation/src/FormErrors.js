// handling presentation of error messages hence can be choosen as functional component

export const FormErrors=((formErrors)=>{
    <div className="formErrors">
        {Object.keys(formErrors).map((fieldName,i)=>{
            if(formErrors[fieldName].length>0)
            {
                return (
                    <p key={i}>{fieldName}{formErrors[fieldName]}</p>
                );
            }
            else
                return '';
        })}
    </div>
})