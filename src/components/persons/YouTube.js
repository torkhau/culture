import React from 'react'
import ModalVideo from 'react-modal-video'
import { Button } from '@material-ui/core';
import './YouTube.css'


export default class YouTube extends React.Component {

  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <div style={{ margin: '30px auto' }}>
        <ModalVideo
          channel='youtube'
          isOpen={this.state.isOpen}
          videoId={this.props.videoId}
          onClose={() => this.setState({ isOpen: false })}
        />
        <Button onClick={this.openModal} variant="contained" color="secondary">
          YouTube video
        </Button>
      </div>
    )
  }
}