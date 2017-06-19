import React from "react"
import {Button, Col, ControlLabel, Form, FormGroup, Panel} from "react-bootstrap"
import {DataShape, Field, FormProps, reduxForm} from "redux-form"

import {connect} from "react-redux"

import {IState} from "ConfigureStore"
import {login} from "login/LoginActions"

import styles from "login/LoginForm.less"

import {Spinner} from "component/spinner/Spinner"

interface StateToProps {
  isLoggingIn: boolean
}

interface DispatchToProps {
  login: () => void
}

interface MergedProps extends StateToProps, DispatchToProps {
}

interface Props extends MergedProps, FormProps<DataShape, MergedProps, any> {
}

class LoginForm extends React.Component<Props, {}> {

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
                <FormGroup>
                  <Col componentClass={ControlLabel} xs={3}>Login</Col>
                  <Col xs={9}>
                    <Field
                        className="form-control"
                        name="login"
                        component="Input"
                        type="text"
                        placeholder="Enter login name or email address"
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col componentClass={ControlLabel} xs={3}>Password</Col>
                  <Col xs={9}>
                    <Field
                        className="form-control"
                        name="password"
                        component="Input"
                        type="password"
                        placeholder="Enter password"
                    />
                  </Col>
                </FormGroup>
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

const mapStateToProps = (state: IState, props: Props) => ({
  isLoggingIn: state.login.isLoggingIn,
})

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login()),
})

const form = reduxForm({
  form: "loginForm",
})(LoginForm)

export default connect(mapStateToProps, mapDispatchToProps)(form)
