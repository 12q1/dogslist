import React, {PureComponent} from 'react'
import request from 'superagent'
import DogsList from './DogsList'

export default class DogsListContainer extends PureComponent {
  state = { dogBreeds: null }

  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const breeds = Object.keys(response.body.message)
        this.updateBreeds(breeds)
      })
      .catch(console.error)
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }

  render() {
    return <DogsList match={this.props.match} dogBreeds={this.state.dogBreeds} />

  }
}
