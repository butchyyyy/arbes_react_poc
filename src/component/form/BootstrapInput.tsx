import React, {InputHTMLAttributes} from "react"

import {BootstrapFieldProps} from "component/form/BootstrapField"
import {Col, ControlLabel, FormControl, FormGroup, HelpBlock} from "react-bootstrap"
import {WrappedFieldProps} from "redux-form"

export class BootstrapInput extends React.PureComponent<BootstrapFieldProps & WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>, {}> {

  public render() {
    const {
      input,
      label,
      labelXs,
      controlXs,
      type,
      meta: {touched, error, warning},
    } = this.props

    const validationState = touched && ( error && "error" ) || ( warning && "warning" ) || null

    let message
    if ( touched && ( error || warning ) ) {
      message = <span className="help-block">{error || warning}</span>
    }

    return (
      <FormGroup validationState={validationState}>
        <Col xs={labelXs ? labelXs : 6} componentClass={ControlLabel}>
          {label}
        </Col>
        <Col xs={controlXs ? controlXs : 6}>
          <FormControl {...input} type={type}/>
          <FormControl.Feedback/>
          <HelpBlock>{message}</HelpBlock>
        </Col>
      </FormGroup>
    )
  }
}
