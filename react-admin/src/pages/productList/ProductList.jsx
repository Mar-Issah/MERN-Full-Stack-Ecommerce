import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from '../../redux/apiCalls';

export default function ProductList() {
  const [data, setData] = useState(productRows);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  //call the getProducts apiCall and pass in the dispatch to get all products, useSelector
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    deleteProduct(dispatch, id);
  };

  //column fields has to match fields in document
  const columns = [
    { field: '_id', headerName: 'ID', width: 230 },
    {
      field: 'product',
      headerName: 'Product',
      width: 230,
      renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img className='productListImg' src={params.row.img} alt='' />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'inStock', headerName: 'Stock', width: 100 },
    // {
    //no status field
    //   field: 'status',
    //   headerName: 'Status',
    //   width: 120,
    // },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row._id}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutline className='productListDelete' onClick={() => handleDelete(params.row._id)} />
          </>
        );
      },
    },
  ];

  //getRowId to get the unique id property _id
  return (
    <div className='productList'>
      <DataGrid rows={products} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection getRowId={(row) => row._id} />
    </div>
  );
}
