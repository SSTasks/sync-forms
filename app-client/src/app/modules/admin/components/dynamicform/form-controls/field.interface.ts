import { Group } from "src/app/models/group.model";

export interface Validator {
    name: string;
    validator: any;
    message: string;
}

export interface FieldConfig {
    disabled?: boolean,
    placeholder?: string,
    label?: string;
    name?: string;
    inputType?: string;
    options?: any;
    type: string;
    value?: any;
    validations?: Validator[];
    color?: string;
}
