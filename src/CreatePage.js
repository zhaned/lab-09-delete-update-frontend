import React, { Component } from 'react'
import { createItem } from './apiUtils.js';

export default class CreatePage extends Component {
  state ={
    category_id: 1,
    name: '',
    cores: 1,
    integrated_gpu: false,
    tdp: 1,
    family: 'Ryzen'
  }

  handleCategoryChange = (e) => this.setState({ 
    category_id: Number(e.target.value)})

  handleNameChange = (e) => this.setState({ 
    name: e.target.value})

  handleCoresChange = (e) => this.setState({ 
    cores: Number(e.target.value)})

  handleIntegratedChange = () => this.setState({ 
    integrated_gpu: !this.state.integrated_gpu})

  handleTdpChange = (e) => this.setState({ 
    tdp: Number(e.target.value)})

  handleFamilyChange = (e) => this.setState({ 
    family: e.target.value})

  handleSubmit = async (e) => {
    e.preventDefault(); //prevent page from being cleared
    await createItem(this.state);
    this.props.history.push('/cpuData');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Category:
            <select value={this.state.category} onChange={this.handleCategoryChange}>
              <option value={1}>Ryzen</option>
              <option value={2}>Athlon</option>
            </select>
          </label>
          <label>
            Name: <input value={this.state.name} onChange={this.handleNameChange}/>
          </label>
          <label>
            Cores: <input value={this.state.cores} onChange={this.handleCoresChange} type='number'/>
          </label>
          <label>
            Integrated GPU?: <input value={this.state.integrated_gpu} onChange={this.handleIntegratedChange} type='checkbox'/>
          </label>
          <label>
            TDP: <input value={this.state.tdp} onChange={this.handleTdpChange} type='number'/>
          </label>
          <label>
            Family: <input value={this.state.family} onChange={this.handleFamilyChange}/>
          </label>
          <button>Create</button>
        </form>
      </div>
    )
  }
}
