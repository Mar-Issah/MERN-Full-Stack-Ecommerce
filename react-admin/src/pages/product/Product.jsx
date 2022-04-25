import { Link, useParams } from 'react-router-dom';
import './product.css';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { useState, useMemo, useEffect } from 'react';
import { userRequest } from '../../axiosInstance';

export default function Product() {
  //also uselocation and split
  //get prduct stats/income for specific product
  const { productId } = useParams();
  const [pStats, sePStats] = useState([]);

  const product = useSelector((state) => state.products.products.find((product) => product._id === productId));

  const MONTHS = useMemo(() => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], []);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('/orders/income?pid=' + productId);
        //incase months are not sorted
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) => sePStats((prev) => [...prev, { name: MONTHS[item._id - 1], Sales: item.total }]));
      } catch (err) {}
    };
    getStats();
  }, [MONTHS]);
  // ,name: 'Apr',Sales: 955
  console.log(pStats);
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newproduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart data={pStats} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img src={product.img} alt='product' className='productInfoImg' />
            <span className='productName'>{product.title}</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id: </span>
              <span className='productInfoValue'>{product._id}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'>5123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>active:</span>
              <span className='productInfoValue'>yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Product Name</label>
            <input type='text' placeholder={product.title} />
            <label>Product Description</label>
            <input type='text' placeholder={product.desc} />
            <label>Product Price</label>
            <input type='text' placeholder={product.price} />
            <label>In Stock</label>
            <select name='inStock' id='idStock'>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img src={product.img} alt='' className='productUploadImg' />
              <label htmlFor='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
