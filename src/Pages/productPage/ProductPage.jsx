import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppHeader from '../../Components/AppHeader'
import ProductContainer from '../../Container/productContainer/ProductContainer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../redux/slices/ProductSlice'
import { getUserId } from '../../Utils/AsyncStorageHelper'

const ProductPage = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false)

  const PAGE_LIMIT = 10;
  console.log('dataList', dataList)

  const fetchPaginationData = async (_pageNo) => {
    console.log('called', _pageNo)
    if (loading || allLoaded) return
    setLoading(true)
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${PAGE_LIMIT}&_page=${_pageNo}`);

      const result = await response.json();
      console.log('result.length', result.length)
      if (result.length < PAGE_LIMIT) { //9 < 10
        setAllLoaded(true)
      }

      setDataList(prev => [...prev, ...result]);
      setPageNo(prev => prev + 1);
      setLoading(false)
    } catch (error) {
      console.log('some error occured', error)
    }
  }


  useEffect(() => {
    fetchPaginationData(1)
  }, [])





  const { productList, isLoading, error } = useSelector(state => state.product);
  // console.log('error', error)
  // Calling Api's 
  useEffect(() => {
    // dispatch(fetchProduct())
    // getUserData()
  }, [])

  const getUserData = async () => {
    const id = await getUserId();

    // console.log(id)
  }

  // Business Login


  return (
    <SafeAreaView style={{flex:1}}>
      <AppHeader title={'Products'} />
      {
        error ? (<View>
          <Text>{error.message}</Text>
        </View>) : (<ProductContainer
          loading={loading}
          setLoading={setLoading}
          dataList={dataList}
          pageNo={pageNo}
          setPageNo={setPageNo}
          productList={productList}
          fetchPaginationData={fetchPaginationData}
        />)
      }

    </SafeAreaView>
  )
}

export default ProductPage
