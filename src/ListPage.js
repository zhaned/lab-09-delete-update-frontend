import React, { Component } from 'react'
import { getItems } from './apiUtils.js';
import { Link } from 'react-router-dom';

export default class ListPage extends Component {
  state = {
    cpuData: [],
    loading: false
  }

  componentDidMount = async () => {
    this.setState({ loading: true })
    const cpuData = await getItems();
    this.setState({ 
      cpuData: cpuData,
      loading: false })
  }

  render() {

    return (
      <div>
        Welcome to the Home/List Page!
        <div className='list'>
          { this.state.cpuData.map(cpu => <Link to={`/cpuData/${cpu.id}`} key={cpu.name}>
            <div className='cpu'>
              <p>Category: {cpu.category}</p>
              <p>Name: {cpu.name}</p>
              <p>Cores: {cpu.cores}</p>
              <p>Integrated GPU: {cpu.integrated_gpu.toString()}</p>
              <p>TDP: {cpu.tdp}</p>
              <p>Family: {cpu.family}</p>
            </div>
          </Link>
            )}
        </div>
      </div>
    )
  }
}
