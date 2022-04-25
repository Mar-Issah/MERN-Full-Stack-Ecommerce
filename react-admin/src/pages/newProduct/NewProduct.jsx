import './newProduct.css';
import { useState } from 'react';

//shows how to handle multple inputs in one state
//categories are seperated because it is an array
export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  //handling muliple inputs using name
  //prev; make sure it doesnt reuturn a new object since there are multiple fields
  //make sure name are exact name in db
  const handleChange = (e) => {
    console.log(e);
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  //use the split method to  seprate the CSV
  const handleCategories = (e) => {
    setCat(e.target.value.split(','));
  };
  console.log(inputs);
  console.log(cat);

  return (
    <div className='newProduct'>
      <h1 className='addProductTitle'>New Product</h1>
      <form className='addProductForm'>
        <div className='addProductItem'>
          <label>Image</label>
          <input type='file' id='file' onChange={(e) => setFile(e.target.files)[0]} />
        </div>
        <div className='addProductItem'>
          <label>Title</label>
          <input name='title' type='text' placeholder='Apple Airpods' onChange={handleChange} />
        </div>
        <div className='addProductItem'>
          <label>Decription</label>
          <input name='desc' type='text' placeholder='Description' onChange={handleChange} />
        </div>
        <div className='addProductItem'>
          <label>Price</label>
          <input name='price' type='text' placeholder='Price' onChange={handleChange} />
        </div>
        <div className='addProductItem'>
          <label>Categories</label>
          <input type='text' placeholder='Coat, Jeans' onChange={handleCategories} />
        </div>
        <div className='addProductItem'>
          <label>Stock</label>
          <select name='inStock' onChange={handleChange}>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </div>
        <button className='addProductButton'>Create</button>
      </form>
    </div>
  );
}
