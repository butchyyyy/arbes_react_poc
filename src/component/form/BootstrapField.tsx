import React from "react"
import {Field, GenericFieldHTMLAttributes} from "redux-form"

export interface BootstrapFieldProps {
  label?: string
  labelXs?: number
  controlXs?: number
}

export class BootstrapField extends Field<GenericFieldHTMLAttributes & BootstrapFieldProps> {

}
