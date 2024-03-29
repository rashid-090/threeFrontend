import React from "react";

function Error({ name, formik, style }: { name: string, formik: any, style?: any }) {
    return (
        <>
            {formik.touched[`${name}`] && formik?.errors[`${name}`] &&
                <span style={style} className="info-error">
                    {formik.errors[`${name}`]}
                </span>}
        </>
    )
}

export default Error;