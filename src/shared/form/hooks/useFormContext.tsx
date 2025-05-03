import { useContext } from "react"
import { FormContext } from "../context"
import { FormContextTypes } from "../types";


export const useFormContext = <T,>() => {
    const context = useContext(FormContext)

    if(!context) {
        throw new Error("useFormContext must be used within a FormProvider");
    }

    return context as FormContextTypes<T>
}