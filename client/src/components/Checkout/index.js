import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import Logo from './../../Images/ampleLogo.png';
import axios from 'axios';

export default class Checkout extends React.Component {
    state = {
        paid: false
    }
  onToken = (token) => {
    axios({
        method: 'post',
        url: '/charge',
        data: token
      }).then(response => {
      this.setState({paid:response.data.paid})
        this.props.handleSend()
    });
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
      handleSend = {()=>this.props.handleSend()}
      paid={this.state.paid}
      name={this.props.name} // the pop-in header title
  image={Logo} // the pop-in header image (default none)
  panelLabel="" // prepended to the amount in the bottom pay button
  amount={100} // cents
  currency="USD"
        token={this.onToken}
        stripeKey="pk_test_zSKeg9j7HqRk3yIyjqbJY9zH"
      />
    )
  }
}
