import request from 'superagent';

const URL = 'https://arcane-bayou-88812.herokuapp.com/cpuData';

export async function getItems() {
  const { body } = await request.get(`${URL}/cpuData`); //destructering so its not mad ugly
  // this goes and gets the property 'body' of the data request
  return body;
}

export async function getItem(id) {
  const { body } = await request.get(`${URL}/cpuData/${id}`);

  return body;
}

export async function deleteItem(id) {
  const { body } = await request.delete(`${URL}/cpuData/${id}`);

  return body;
}

export async function updateItem(id, input) {
  const { body } = await request.put(`${URL}/cpuData/${id}`)
    .send(input);

    return body;
}

export async function createItem(input) {
  const { body } = await request.post(`${URL}/cpuData/`)
    .send(input);

    return body;
}

export async function getCategories() {
  const data = await request.get(`${URL}/categories`); //example of non-destructured 

  return data.body; //superagent makes the body property
}