// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onClickedButton} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails

  const onClickButton = () => {
    onClickedButton(registrationStatus)
  }

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onClickButton}>
        <img className="image" src={imageUrl} alt="event" />
      </button>
      <p className="event-name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
