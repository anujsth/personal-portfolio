import {CheckboxProps} from '../checkbox';



export const CheckboxWithLabelValues : CheckboxProps ={
    label: "Checkbox"
}

export const CheckboxDisableValues : CheckboxProps ={
    label: "Checkbox",
    disabled:true,
}

export const CheckboxSizeValues : CheckboxProps ={
    label: "Checkbox",
    size: "medium"
}

export const CheckboxErrorValues : CheckboxProps ={
    label: "Checkbox",
    size: "medium",
    isError:true
}

export const CheckboxErrorMessageValues : CheckboxProps ={
    label: "Checkbox",
    size: "medium",
    isError:true,
    errorMessage: "This is Error Message"
}
