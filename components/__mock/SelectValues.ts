//import { selectProps } from "../select";
import { SelectProps } from "components/select";
import { PlaceholderInput } from "components/input/Input.stories";

export const selectValueWithIcon: SelectProps = {
  option: [
    {
      id: 1,
      name: "Profile",
      value: "Profile",
      avatar: "people",
      error: "Error",
    },
    {
      id: 2,
      name: "Settings",
      value: "Settings",
      avatar: "settings",
      error: "Error",
    },
    {
      id: 3,
      name: "Account",
      value: "Account",
      avatar: "lock",
      error: "Error",
    },
  ],

  handleChange: (e: any) => {},
  size: "small",
};

export const selectValueWithOutIcon: SelectProps = {
  option: [
    {
      id: 1,
      name: "Profile",
      value: "Profile",
    },
    {
      id: 2,
      name: "Settings",
      value: "Settings",
    },
    {
      id: 3,
      name: "Account",
      value: "Account",
    },
  ],
  label: "Name",
  handleChange: (e: any) => {},
  size: "small",
  placeholder: "Placeholder",
  valueSelected: 3
};

export const selectDisabledValues: SelectProps = {
  option: [
    {
      id: 1,
      name: "Profile",
      value: "Profile",
      error: "Error",
    },
    {
      id: 2,
      name: "Settings",
      value: "Settings",
      error: "Error",
    },
    {
      id: 3,
      name: "Account",
      value: "Account",
      error: "Error",
    },
  ],
  label: "Disable label",

  handleChange: (e: any) => {},
  size: "small",
  disabled: true,
};

export const selectErrorValues: SelectProps = {
  option: [
    {
      id: 1,
      name: "Profile",
      value: "Profile",
      error: "Error",
    },
    {
      id: 2,
      name: "Settings",
      value: "Settings",
      error: "Error",
    },
    {
      id: 3,
      name: "Account",
      value: "Account",
      error: "Error",
    },
  ],

  handleChange: (e: any) => {},
  size: "small",
  isError: true,
  errorMessage: "This is Error Message",
};

export const selectwithMultiSelectValues: SelectProps = {
  option: [
    {
      id: 1,
      name: "Profile",
      value: "Profile",
      error: "Error",
    },
    {
      id: 2,
      name: "Settings",
      value: "Settings",
      error: "Error",
    },
    {
      id: 3,
      name: "Account",
      value: "Account",
      error: "Error",
    },
  ],

  handleChange: (e: any) => {},
  isMultiSelect: true,
  placeholder: "Placeholder",
  size: "small",
  valueSelected:[1,3]
};
