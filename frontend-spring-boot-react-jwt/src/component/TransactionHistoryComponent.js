import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './scss/TransactionHistoryComponent.scss';
import HistoryService from '../service/HistoryService';

const propTypes = {
  history: PropTypes.instanceOf(Object),
};

class TransactionHistoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyItems: [],
    };
  }

  componentDidMount() {
    this.refreshHistory();
  }

  viewHistoryItemClicked(id) {
    this.props.history.push(`/historyItem/${id}`);
  }

  refreshHistory() {
    HistoryService.retrieveHistory()
      .then(
        (response) => {
          this.setState({ historyItems: response.data });
        }
      );
  }

  render() {
    return (
      <div className="container">
        <h3>All Transactions</h3>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {
                            this.state.historyItems.map(
                              (historyItem) =>
                                <tr className={historyItem.type === 'DEBIT' ? 'debitBlock' : 'creditBlock'} key={historyItem.id}>
                                  <td>{historyItem.id}</td>
                                  <td>{historyItem.type}</td>
                                  <td>{historyItem.amount}</td>
                                  <td><button type="button" className="btn btn-success" onClick={() => this.viewHistoryItemClicked(historyItem.id)}>View details</button></td>
                                </tr>
                            )
                        }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

TransactionHistoryComponent.propTypes = propTypes;

export default TransactionHistoryComponent;
