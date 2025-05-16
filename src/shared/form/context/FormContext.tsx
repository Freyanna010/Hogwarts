import { createContext } from "react"

//  export const FormContext = <T extends {}> () => {
//     const InitialFormValue: T = {} as T
//       const initialIsInputEmpty = {} as Record<NameValue<T>, boolean>

//   return createContext<FormContextValues<T>>({
//     formData: InitialFormValue,
//     setFormValue: () => {},
//     checkRequiredInput: () => {},
//     isInputEmpty: initialIsInputEmpty
//   });
// }


export const FormContext = createContext<unknown>(null);
// TODO:  нужно ли начальное состояние вместо null?  


