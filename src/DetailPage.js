import React, { Component } from 'react'
import { getCategories, getItem, getCategoryId, updateItem, deleteItem } from './apiUtils.js';

export default class DetailPage extends Component {
  state ={
    category_id: 1,
    name: '',
    cores: 1,
    integrated_gpu: false,
    tdp: 1,
    family: 'Ryzen',
    categories: [],
  }

  componentDidMount = async () => {
    const categories = await getCategories();
    const cpu = await getItem(this.props.match.params.cpuId);
    const category_id = getCategoryId(cpu, categories);

    this.setState({
      ...cpu,
      category_id,
      categories,
    })
  }

  handleCategoryChange = (e) => this.setState({ 
    category_id: Number(e.target.value)})

  handleNameChange = (e) => this.setState({ 
    name: e.target.value})

  handleCoresChange = (e) => this.setState({ 
    cores: Number(e.target.value)})

  handleIntegratedChange = () => {this.setState({ 
    integrated_gpu: !this.state.integrated_gpu})}

  handleTdpChange = (e) => this.setState({ 
    tdp: Number(e.target.value)})

  handleFamilyChange = (e) => this.setState({ 
    family: e.target.value})

  handleSubmit = async (e) => {
    e.preventDefault(); //prevent page from being cleared
    await updateItem(this.props.match.params.cpuId, this.state);
    this.props.history.push('/cpuData');
  }
  
  handleDelete = async (e) => {
    e.preventDefault(); //prevent page from being cleared
    await deleteItem(this.props.match.params.cpuId);
    this.props.history.push('/cpuData');
  }

  render() {
    return (
      <div>
        DETAILS PAGES
        <form onSubmit={this.handleSubmit}>
          <label>
            Category:
            <select value={this.state.category} onChange={this.handleCategoryChange}>
              {
                this.state.categories
                  .map(category => 
                    <option value={category.id} selected={this.state.category_id === category.id} key={category.id}>
                      {category.name}
                    </option>
                )
              }
            </select>
          </label>
          <label>
            Name: <input value={this.state.name} onChange={this.handleNameChange}/>
          </label>
          <label>
            Cores: <input value={this.state.cores} onChange={this.handleCoresChange} type='number'/>
          </label>
          <label>
            Integrated GPU?: <input value={this.state.integrated_gpu} onChange={this.handleIntegratedChange} type='checkbox' checked={this.state.integrated_gpu}/>
          </label>
          <label>
            TDP: <input value={this.state.tdp} onChange={this.handleTdpChange} type='number'/>
          </label>
          <label>
            Family: <input value={this.state.family}  onChange={this.handleFamilyChange}/>
          </label>
          <button>Update</button>
        </form>
        <button onClick={this.handleDelete}>Delete this item</button>
      </div>
    )
  }
}
