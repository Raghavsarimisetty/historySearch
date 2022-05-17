import {Component} from 'react'

import HistoryList from '../HistoryList/index'

import './index.css'

class History extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickDelete = id => {
    console.log(id)
  }

  render() {
    const {searchInput} = this.state
    const {usersList} = this.props

    const SearchDetails = usersList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="image"
            />
            <input
              type="search"
              className="input"
              placeholder="Search Input"
              onChange={this.onChangeSearch}
            />
          </div>
        </div>
        <ul className="ultra-container">
          {SearchDetails.map(each => (
            <HistoryList
              key={each.id}
              onClickDelete={this.onClickDelete}
              listItems={each}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default History
