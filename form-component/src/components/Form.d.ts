import * as FormTypes from '../types';
/**
 * FormComponent
 * @param {Array<Inputs>} [inputs] - Se pasa como parametro en un arreglo de inputs
 * @param {string} title - Se usa para el titulo del Formulario
 * @param {string} textButton - Se usa para el texto del botón encargado de hacer submit
 * @param {string} className - Estilos personalizados para el formulario usando tailwind
 * @param {Function} [submit] - Función que se llama cuando se envía el formulario.
 * @param {children} [children] - Cualquier elemento JSX que se agregue ira debajo del Formulario
 */
export declare function FormComponent({ inputs, title, textButton, className, submit, children }: FormTypes.Form): import("react/jsx-runtime").JSX.Element;
