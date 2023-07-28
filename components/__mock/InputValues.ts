import flatpickr from "flatpickr";
import { InputProps } from "../input";

let value = ""

export const DefaultInputValues: InputProps = {
  type: "text",
  handleChange:(e:any) => value = e.target.value
};

export const PlaceholderInputValues: InputProps = {
    type:"text",
    placeholder:"Enter Text",
    handleChange:(e:any) => value = e.target.value

}

export const InputSizeValues: InputProps = {
    type:"text",
    placeholder:"Enter Text",
    handleChange:(e:any) => value = e.target.value

}

export const InputDisableValues: InputProps = {
  type:"text",
  disabled: true,
  value: "Enter Text",
  handleChange:(e:any) => value = e.target.value

}
export const InputReadOnlyValues: InputProps = {
  type:"text",
  value: "Enter Text",
  handleChange:(e:any) => value = e.target.value

}
export const InputErrorValues: InputProps = {
  type:"text",
  value: "Enter Text",
  isError:true,
  handleChange:(e:any) => value = e.target.value

}

export const InputFieldWithErrorMessageValues: InputProps = {
  type:"text",
  placeholder: "Enter Text",
  value: "Enter Text",
  isError:true,
  errorMessage:"This is a error message",
  handleChange:(e:any) => value = e.target.value

}

export const InputFieldWithDateValues: InputProps = {
  label:"Date:",
  type:"date",
  value: "Hello World",
  handleChange:(e:any) => value = e.target.value,
  flatpickrConfig:{}
}

export const InputFieldWithDateTimeValues: InputProps = {
  label:"DateTime Local:",
  type:"date",
  value: "Hello World",
  handleChange:(e:any) => value = e.target.value,
  flatpickrConfig:{enableTime:true}
}


export const InputFieldWithTimeValues: InputProps = {
  label:"Time:",
  type:"date",
  value: "Hello World",
  handleChange:(e:any) => value = e.target.value,
  flatpickrConfig:{enableTime:true, noCalendar:true}
}