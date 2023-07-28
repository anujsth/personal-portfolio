import { render } from "@testing-library/react"
import { DropdownValueWithAvatar } from "../__mock/SelectValues"
import { Dropdown } from "./Select"

describe('Dropdown component',()=>{
    test("Dropdown component is render properly",()=>{
        let dropdownComponent = render(<Dropdown {...DropdownValueWithAvatar}/>);
    })
})