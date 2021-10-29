import React from "react";

//üst komponentten alacağımız datalar
const TextInput=({name,label,onChange,placeHolder,value,error})=> {

let wrapperClass="form-group";

//Hata var ise
if(error && error.length){
    //Hata classı nı ekliyoruz
    wrapperClass+=" is-invalid"
}


    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input 
                type="text" 
                name={name} 
                className={"form-control"+ (error?" is-invalid":" is-valid") }
                placeholder={placeHolder} 
                value={value}
                onChange={onChange}
                />
                {/* Hata var ise alert vereceğim */}
                {
                  error ?<div id={name} class="invalid-feedback">{error}</div>
                   :<div id={name} class="valid-feedback">Başarılı</div>
                }
            </div>
        </div>
    )
}

export default TextInput
