import {Component} from 'react'

import './index.css'

class RegistrationFrom extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFormSubmitted: false,
    showFirstNameError: false,
    showLastNameError: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    const isInputError = firstName === ''
    this.setState({showFirstNameError: isInputError})
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    const isInputError = lastName === ''
    this.setState({showLastNameError: isInputError})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({showFirstNameError: true, showLastNameError: true})
    } else if (firstName === '') {
      this.setState({showFirstNameError: true})
    } else if (lastName === '') {
      this.setState({showLastNameError: true})
    } else {
      this.setState({isFormSubmitted: true})
    }
  }

  submitBtnClicked = () => {
    this.setState({isFormSubmitted: false})
  }

  getFirstName = () => {
    const {firstName, showFirstNameError} = this.state

    const inputClassName = showFirstNameError
      ? 'error-input input-bar'
      : 'input-bar'

    return (
      <>
        <label className="label-text" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={inputClassName}
          onChange={this.onChangeFirstName}
          value={firstName}
          placeholder="FIRST NAME"
          onBlur={this.onBlurFirstName}
        />
        {showFirstNameError && <p className="required-text">Required</p>}
      </>
    )
  }

  getLastName = () => {
    const {lastName, showLastNameError} = this.state
    const inputClassName = showLastNameError
      ? 'error-input input-bar'
      : 'input-bar'

    return (
      <>
        <label className="label-text" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={inputClassName}
          onChange={this.onChangeLastName}
          value={lastName}
          placeholder="LAST NAME"
          onBlur={this.onBlurLastName}
        />
        {showLastNameError && <p className="required-text">Required</p>}
      </>
    )
  }

  renderForm = () => (
    <form className="form-data-container" onSubmit={this.onSubmitForm}>
      <div className="input-container">{this.getFirstName()}</div>
      <div className="input-container">{this.getLastName()}</div>
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  )

  renderSuccess = () => (
    <div className="form-data-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p>Submitted Successfully</p>
      <button
        className="submit-btn"
        type="button"
        onClick={this.submitBtnClicked}
      >
        Submit another response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="bg-container">
        <h1 className="head-element">Registration</h1>
        <div className="form-container">
          {!isFormSubmitted ? this.renderForm() : this.renderSuccess()}
        </div>
      </div>
    )
  }
}

export default RegistrationFrom
