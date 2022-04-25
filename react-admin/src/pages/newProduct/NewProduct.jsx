import './newProduct.css';
import { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import app from '../../firebase';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/apiCalls';

//shows how to handle multple inputs in one state
//categories are seperated because it is an array
export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  const dispatch = useDispatch();
  //handling muliple inputs using event name
  //prev; make sure it doesnt reuturn a new object since there are multiple fields
  //make sure name are exact name in db
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  //use the split method to seprate the CSV
  const handleCategories = (e) => {
    setCat(e.target.value.split(','));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //use all the stae to get your updated products and dispatch to server
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProduct(dispatch, product);
        });
      }
    );
  };

  return (
    <div className='newProduct'>
      <h1 className='addProductTitle'>New Product</h1>
      <form className='addProductForm'>
        <div className='addProductItem'>
          <label>Image</label>
          <input type='file' id='file' onChange={(e) => setFile(e.target.files[0])} />
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
          <input name='price' type='number' placeholder='Price' onChange={handleChange} />
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
        <button className='addProductButton' onClick={handleClick}>
          Create
        </button>
      </form>
    </div>
  );
}
