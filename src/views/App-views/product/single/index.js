import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {useParams} from "react-router-dom";
import {getSingle} from "../../../../redux/actions";
import {Button, Skeleton, Tooltip} from "antd";
import {MinusCircleOutlined, PlusCircleOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {addToCart, ChangeQty} from "../../../../redux/actions/cart";

const Single = ({getSingle,ChangeQty,addToCart, single,data,loading}) => {
    const params = useParams()
    let {id} = params

    const [line, setLine] = useState(true)
    useEffect(() => {
        getSingle(id)
    }, [getSingle])

    const dataFiltered = data.filter((item)=> item.id === parseInt(id))

    return (
        <div className="w-full block relative space-y-6">
            {
                single.loading ? <Skeleton active/> : (
                    single.data.map((item, index) => (
                        <div className="w-full" key={index}>
                            <div className={'w-full grid grid-cols-12 gap-6'}>
                                <div className="relative overflow-hidden col-span-4 h-80 bg-white rounded-xl">
                                    <img src={item.images} alt=""
                                         className={'absolute top-1/2 left-1/2 z-10 transition duration-200 hover:scale-110 transform -translate-x-2/4 -translate-y-2/4 w-full '}/>
                                </div>
                                <div className="col-span-8 bg-white rounded-xl p-4 h-full flex flex-col">
                                    <h1 className={'text-2xl font-bold truncate tracking-tight'}>{item.title}</h1>
                                    <div className={'block relative'}>
                                        <p className={'text-gray-500 font-semibold px-4 py-2 bg-gray-50 rounded-xl w-auto line-clamp-4'}>{item.category.replace('-', ' ')}</p>
                                    </div>
                                    <div className={'my-1'}>
                                        <p className={'text-2xl font-bold '}>{"Rp. " + item.price}</p>
                                    </div>
                                    <div className={"w-full my-4"}>
                                        <p className={`${line ? 'line-clamp-4' : ''}`}>{item.description}</p>
                                        {line && (
                                            <button type={'button'}
                                                    className={'rounded-xl px-4 py-1 bg-white border hover:border-blue-500 hover:text-blue-500 transition duration-200'}
                                                    onClick={() => setLine(!line)}
                                            >
                                                Readmore
                                            </button>
                                        )}
                                    </div>
                                    <div className={'flex items-center space-x-4'}>
                                        {
                                            dataFiltered.length < 1 &&(
                                                <Tooltip title="Add to cart">

                                                    <Button
                                                        className={'py-2 rounded-xl'}
                                                        loading={loading} type="primary" icon={<ShoppingCartOutlined className={'p-0 leading-4 m-0'}/>} onClick={()=> {
                                                        addToCart(item)
                                                    }}>
                                                        Add to cart
                                                    </Button>
                                                </Tooltip>
                                                )
                                            }
                                        {
                                            dataFiltered.length > 0 && (
                                                <div className={'flex items-center space-x-4'}>
                                                    <Button shape={'circle'} loading={loading} type="danger" icon={<MinusCircleOutlined />} onClick={()=> ChangeQty(dataFiltered[0].id,(dataFiltered[0].qty - 1))}>

                                                    </Button>
                                                    <div>
                                                        {dataFiltered[0].qty}
                                                    </div>
                                                    <Button shape={'circle'} type="primary" loading={loading} icon={<PlusCircleOutlined />} onClick={()=> ChangeQty(dataFiltered[0].id,(dataFiltered[0].qty + 1))}>

                                                    </Button>

                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))

                )
            }
        </div>
    )
}

Single.propTypes = {
    getSingle: PropTypes.func.isRequired,
    ChangeQty: PropTypes.func.isRequired,
    addToCart:PropTypes.func.isRequired
}
Single.defaultProps = {}

const mapStateToProps = state => ({
    single: state.product.single,
    loading: state.cart.loading,
    data: state.cart.data
})

const mapDispatchToProps = {
    getSingle,
    ChangeQty,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Single)