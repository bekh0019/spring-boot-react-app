import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HistoryService from '../service/HistoryService';

const propTypes = {
  history: PropTypes.instanceOf(Object),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

class HistoryItemComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      amount: '',
      userId: '',
      userName: '',
      accountBalance: '',
    };
  }

  componentDidMount() {
    HistoryService.retrieveHistoryItem(this.state.id)
      .then((response) => this.setState({
        amount: response.data.amount,
        userId: response.data.user.id,
        userName: response.data.user.name,
        accountBalance: response.data.user.accountBalance,
      }));
  }

  backToHistoryClicked = () => {
    this.props.history.push('/history');
  }

  render() {
    const { amount = '', id = '', userId = '', userName = '', accountBalance = '' } = this.state;

    return (
      <div className="container">
        <h3>Transaction Details</h3>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Transaction Id</th>
                <th>Amount</th>
                <th>User Id</th>
                <th>User Name</th>
                <th>Account Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr key={id}>
                <td>{id}</td>
                <td>{amount}</td>
                <td>{userId}</td>
                <td>{userName}</td>
                <td>{accountBalance}</td>
                <td><button type="button" className="btn btn-success" onClick={() => this.backToHistoryClicked()}>Back to History</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
HistoryItemComponent.propTypes = propTypes;

export default HistoryItemComponent;
