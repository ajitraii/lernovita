import React from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProductContainer = (props) => {
    const {
        loading,
        setLoading,
        productList,
        dataList,
        pageNo,
        setPageNo,
        fetchPaginationData
    } = props

    const renderUserItem = (props) => {
        const { item } = props;

        return (
            <View style={{ width: '95%', padding: 10, backgroundColor: '#fff', borderRadius: 5, borderRadius: 3, alignSelf: 'center', margin: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                    <Image style={{ height: 70, width: 70, }} source={{ uri: item.image }} />

                    <View style={{ marginLeft: 30 }}>
                        <Text style={styles.heading}>{item ? item?.title : ''}</Text>
                        <Text numberOfLines={2} style={styles.subHeading}>{item ? item?.body : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.id : ''}</Text>
                        {/* <Text style={styles.heading}>{item ? item?.title : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.description : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.price : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.category : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.rating?.rate : ''}</Text> */}
                    </View>
                </View>

            </View>
        )
    }
    const renderFooter = () => {
        if (!loading) return
        return (
            <ActivityIndicator color={'red'} size={'small'} />
        )
    }
    return (
        <View style={{flex:1}}>
            <FlatList
                // data={productList}
                data={dataList}
                keyExtractor={item => item.id}
                renderItem={renderUserItem}
                onEndReached={() => { fetchPaginationData(pageNo) }}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
            />
        </View>
    )
}

export default ProductContainer
const styles = StyleSheet.create({

    heading: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    subHeading: {
        fontSize: 16,
        color: 'gray'
    }

})
