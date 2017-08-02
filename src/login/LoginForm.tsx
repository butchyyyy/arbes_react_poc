import React from "react"
import {Button, Col, Form, FormGroup, Panel} from "react-bootstrap"
import {DecoratedComponentClass, InjectedFormProps, reduxForm} from "redux-form"

import {connect} from "react-redux"

import {IState} from "ConfigureStore"
import {login} from "login/LoginActions"

import styles from "login/LoginForm.less"

import {BootstrapField} from "component/form/BootstrapField"
import {BootstrapInput} from "component/form/BootstrapInput"
import {Spinner} from "component/spinner/Spinner"
import {required} from "validation/BasicValidation"

interface StateProps {
  isLoggingIn: boolean
}

interface DispatchProps {
  login: () => void
}

class LoginFormComponent
    extends React.Component<StateProps & DispatchProps & InjectedFormProps<{}, StateProps & DispatchProps>, {}> {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  public render() {
    return (
        <Col xs={6} xsOffset={3} className={styles.loginForm}>
          <Panel header={<strong>Sign in to continue</strong>}>
            <Spinner loading={this.props.isLoggingIn}>
              <Form horizontal={true} onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <BootstrapField name="login" component={BootstrapInput} type="text" validate={required} label="Login" labelXs={3} controlXs={9}/>
                <BootstrapField name="password" component={BootstrapInput} type="password" validate={required} label="Password" labelXs={3} controlXs={9}/>
                <FormGroup>
                  <Col xsOffset={3} xs={10}>
                    <Button bsStyle="primary" type="submit">Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </Spinner>
          </Panel>
        </Col>
    )
  }

  private handleSubmit() {
    this.props.login()
  }

}

const mapStateToProps = (state: IState): StateProps => ({
  isLoggingIn: state.login.isLoggingIn,
})

const mapDispatchToProps = (dispatch): DispatchProps => ({
  login: () => dispatch(login()),
})

const form: DecoratedComponentClass<{}, StateProps & DispatchProps> = reduxForm<{}, StateProps & DispatchProps>({
  form: "loginForm",
})(LoginFormComponent)

export const LoginForm: React.ComponentClass<{}> = connect(mapStateToProps, mapDispatchToProps)(form)
