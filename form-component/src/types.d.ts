import { FormEvent } from "react";

type SubmitFunction = (data: {values: typeof values; event: FormEvent<HTMLFormElement>}) => void;

export interface Form {
    /**
    * Se espera un array de Inputs
    * @example
    * <FormComponent
    *   inputs={[
    *       {
                id: 'input1',
                name: 'name',
                type: 'text',
                required: true,

                label: 'Nombre Completo',
                clearable: true,
    *       }
    *   ]}
    * >
    */
    inputs?: Array<Inputs>
    title: string
    textButton: string
    className?: string
    /**
     * @param {Object} data - Los datos del formulario.
     * @param {Object} data.values - Los valores del formulario.
     * @param {FormEvent<HTMLFormElement>} [data.event] - El elemento de envío del formulario.
     * @example
     * <FormComponent
     *   submit={({values, event}) => {
     *      console.log("Parametros devueltos: ", event, values)
     *   }}
     * />
    */
    submit?: SubmitFunction
    children?: ReactNode
}

/**
 * Represents the input fields for a form
 * 
 * @property {string} id - ID attribute of the input field
 * @property {string} name - Name attribute of the input field
 * @property {string} type - Type of the input (e.g., 'text', 'password')
 * @property {boolean} required - Marks the input as required
 * @property {string} [label] - Label for the input field
 * @property {string} [className] - Custom CSS class for the input field
 * @property {string} [placeholder] - Placeholder text for the input field
 * @property {boolean} [clearable] - Indicates if the input can be cleared
 * @property {boolean} [toggleable] - Indicates if the input can be toggled
 */
export interface Inputs {    
    id: string
    name: string    
    type: string    
    required: boolean
    pattern?: string
    label?: string    
    className?: string    
    placeholder?: string    
    clearable?: boolean
    toggleable?: boolean    
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {}