import React, { } from "react";
import Error from "../error";

interface PropType {
    id: string, name: string, value?: string, onChange?: (t: any) => void,
    onBlur?: (t: any) => any, error?: string, options: any[], className?: string,
    valueKey?: string, formik?: any
}

function Select({ id, name, value, onChange, onBlur, error, options, className, valueKey, formik }: PropType) {
    return (
        <>
            <select id={id} name={name} value={formik ? formik?.values[`${name}`] : value as string}
                onChange={formik ? formik?.handleChange : onChange} onBlur={formik ? formik?.handleBlur : onBlur}
                className={"form-select select-box-1 " + className}>
                <option value={''}>{"Select"}</option>
                {options?.map((it: any) => <option key={it?._id} value={valueKey ? it[`${valueKey}`] : it?._id}>{it?.label}</option>)}
            </select>
            {formik ? <Error formik={formik} name={`${name}`} /> : error && <span className='info-error'>{error}</span>}
        </>
    )
}

export default Select;