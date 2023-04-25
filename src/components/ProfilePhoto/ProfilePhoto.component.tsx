import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class ProfilePhoto extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='profile_photo'>
        <img src='./NakulRed.png'></img>
      </div>
    )
  }
}

export default ProfilePhoto