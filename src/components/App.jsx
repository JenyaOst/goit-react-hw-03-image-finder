import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { Searchbar } from './Searchbar/Searchbar';
export default class App extends Component {
  state = {
    dataImages: null,
    status: 'idle',
    error: null,
    searchValue: '',
    page: 1,
    loading: false,
    isOpenModal: false,
    modalData: null,
  };
  onSubmitForm = formData => {
    if (formData.inputValue === this.state.searchValue) {
      Notiflix.Notify.warning('You are making a similar request!', {
        position: 'center-top',
        width: '400px',
        fontSize: '16px',
      });
      return;
    }
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmitForm} />
      </div>
    );
  }
}
