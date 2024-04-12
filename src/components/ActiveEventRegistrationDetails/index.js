// Write your code here

import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {report} = props
  console.log(report)

  const renderInitialView = () => (
    <p className="suggest">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegisterView = () => (
    <div>
      <img
        className="register-image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="describe">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registered-block">
      <img
        className="registered-image"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="alert">You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div className="closed-block">
      <img
        className="closed-image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p className="note">Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const renderRegistration = () => {
    switch (report) {
      case 'REGISTERED':
        return renderRegisteredView()
      case 'REGISTRATIONS_CLOSED':
        return renderRegistrationClosedView()
      case 'YET_TO_REGISTER':
        return renderYetToRegisterView()
      default:
        return renderInitialView()
    }
  }
  return <div>{renderRegistration()}</div>
}

export default ActiveEventRegistrationDetails
