import React from "react";

interface PropType {
    id: string, name: string, value?: string, checked: boolean, onChange: (t: any) => void,
    onBlur: (t: any) => any, error?: string, className?: string,
    label?: string,
}

function Checkbox({ id, name, value, checked, onChange, onBlur, className, error, label }: PropType) {
    return (
        <>
            <div className="form-check">
                <input
                    id={id}
                    type="checkbox"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={"form-check-input " + className}
                />
                <label className="form-check-label" htmlFor={id || name}>
                    {label}
                </label>
            </div>
        </>
    )
}

export default Checkbox;