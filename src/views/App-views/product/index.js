import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Skeleton} from "antd";
import {getProducts} from "../../../redux/actions";
import {Link} from "react-router-dom";

const Product = ({getProducts,product})=> {

    useEffect(()=> {
        getProducts(50)
    },[getProducts])
    return(
        <div className={'flex flex-col space-y-4'}>
            <div className={'w-full flex items-center'}>
                <h1 className={'text-lg'}>Product Detail</h1>
                <div className="flex-grow"/>
            </div>
            <div className={'w-full grid grid-cols-12 gap-6'}>
                {product.collections.loading ? <Skeleton active className={'col-span-12'}/>:product.collections.data.map((item,index)=> (
                    <div className="h-60 col-span-2 rounded-2xl relative transition duration-200 overflow-hidden" key={index}>
                        <Link to={`/product/${item.id}`} className="w-full z-10 h-20 bg-black bg-opacity-50 absolute bottom-0 left-0 px-4 py-2">
                            <p className={'p-0 m-0 leading-6 text-white text-lg font-semibold truncate'}>{item.title}</p>
                            <p className={'text-white truncate p-0 m-0 leading-4'}>{item.description}</p>
                            <p className={'text-white truncate text-xs p-0 m-0 leading-4'}>{item.category}</p>
                        </Link>
                        <img src={item.images} alt="" className={'absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 min-h-full w-full object-cover'}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

Product.propTypes = {
    getProducts: PropTypes.func.isRequired
}
Product.defaultProps = {}

const mapStateToProps = state => ({
    product: state.product
})
const mapDispatchToProps = {
    getProducts
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)