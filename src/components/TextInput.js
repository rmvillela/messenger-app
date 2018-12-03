import React from 'react';
import { TextInput } from 'react-native';
import { Font } from 'expo';

export default class TextInputFont extends React.Component {
  state = {
    fontLoaded: false
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      'ibmplexmono-light': require('../../assets/fonts/IBMPlexMono-Light.ttf')
    })

    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      this.state.fontLoaded ? (
        <TextInput {...this.props} style={{ fontFamily: 'ibmplexmono-light', ...this.props.style }} />
      ) : null
    )
  }
} 
  