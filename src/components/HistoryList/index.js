import './index.css'

const HistoryList = props => {
  const {listItems, onClickDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = listItems

  const deleteHistory = () => {
    onClickDelete(id)
  }

  return (
    <li className="list-container">
      <p className="time-para">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="image-logo" />
      <h1 className="name">{title}</h1>
      <p className="domain">{domainUrl}</p>
      <button onClick={deleteHistory} className="button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-image"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryList
