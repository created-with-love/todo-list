import React, { Component } from 'react';

import './App.css';
import Container from './components/Container';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
import initialTodos from './data-json/todoListData.json';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';
import Stats from './components/Stats';
import Header from './components/Header';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const { showModal } = this.state;

    return (
      <Container>
        <Header />

        <div className="barStyles">
          <Stats />
          <IconButton onClick={this.toggleModal} aria-label="Add Todo">
            <AddIcon width="40" height="40" fill="#black" />
          </IconButton>
          <Filter />
        </div>

        <TodoList />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onClose={this.toggleModal} />
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
