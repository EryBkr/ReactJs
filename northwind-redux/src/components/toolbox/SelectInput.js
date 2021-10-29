import React from 'react'

function SelectInput({name,label,onChange,defaultOption,value,error,options}) {
    
    return (
       <div className="form-group">
           <label htmlFor={name}>{label}</label>
           <select className={"form-control"+(error&&" is-invalid")} name={name} id={name} value={value} onChange={onChange}>
                <option value="">{defaultOption}</option>
                {
                    options.map(option=>{
                        return (
                            <option value={option.id}>
                                 {option.categoryName}
                            </option>
                        )
                    })
                }
           </select>
           {error
           ?<div id={name} class="invalid-feedback">{error}</div>
           :<div id={name} class="valid-feedback">Başarılı</div>
                }
       </div> 
    )
}

export default SelectInput
