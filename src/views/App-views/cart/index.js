import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button, Modal, Skeleton, Space} from "antd";
import {Redirect} from 'react-router-dom'
import {CheckCircleFilled, ExclamationCircleOutlined, MinusCircleOutlined, PlusCircleOutlined} from "@ant-design/icons";
import {ChangeQty} from "../../../redux/actions/cart";
import {Link} from "react-router-dom";

const CartPages = ({loading,data,ChangeQty,Auth})=>{

    const [newData,setNewdata]= useState([...data])
    const [total,setTotal] = useState(0)
    const [modal,setModal] = useState(false)
    const [load,setLoading] = useState(false)

    const handleModal = ()=> {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
            setModal(true)
            confirm()
        },1000)
    }
    useEffect(()=> {
        if (newData.length > 0){
            const testing = newData.map((item) => item.price * item.qty)
            setTotal(testing.reduce((a,b)=> a+b))
        }

    })
    function confirm() {
        Modal.confirm({
            title: 'SUCCESS',
            icon: <CheckCircleFilled />,
            content: 'SUCCESS CHECKOUT',
            okText: 'Lanjut',
            cancelText: '',
        });
    }



    if (!Auth.loading && !Auth.isAuth){
        return <Redirect to={'/'}/>
    }
    return (
        <div className="w-full">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8 p-4 bg-white rounded-xl space-y-4">
                    {loading ? [0,1,2,3,4,5,6].map((item,index)=> (
                        <Skeleton active/>
                    )):(
                        data && data.length > 0 && data.map((item,index)=> {
                            return item !== null && (
                                <div className="w-full border p-4 rounded-xl flex flex-col space-y-4">
                                    <div className={'grid grid-cols-12 gap-4'}>
                                        <div className="col-span-2 bg-gray-100 rounded-xl h-20 overflow-hidden relative">
                                            <img src={item.images} alt="" className={'absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 w-full'}/>
                                        </div>
                                        <div className="col-span-10 h-20 flex flex-col space-y-2 items-start">
                                            <div className={'flex items-center w-full'}>
                                                <Link to={`/product/${item.id}`}><h2 className={'text-lg transition duration-200 hover:text-red-400 leading-4 p-0 m-0'}>{item.title}</h2></Link>
                                                <div className="flex-grow"/>
                                                <div className={'flex items-center space-x-4'}>

                                                    <div>
                                                        {`${item.qty} Qty`}
                                                    </div>

                                                    <p className={'text-xl leading-4 p-0 m-0 text-blue-400 font-bold'}>Rp. {`${item.price * item.qty}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, "\$1.")}</p>
                                                </div>
                                            </div>

                                            <span className={'px-4 py-1 bg-gray-50 rounded-full text-gray-500'}>{item.category.replace('-', ' ')}</span>

                                        </div>
                                    </div>
                                    <div>
                                        <p className={'line-clamp-2'}>{item.description}</p>
                                    </div>

                                </div>
                            )
                        })
                    )}
                </div>
                <div className="col-span-4">
                    <div className={'p-4 bg-white rounded-xl'}>
                        <span>Total</span>
                        <p className={'text-lg font-bold '}>Rp. {`${total}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, "\$1.")}</p>
                        <div className="w-full">
                            <Button loading={load} onClick={handleModal} className={'w-full group px-4 py-4 rounded-lg bg-gray-50 transition duration-200 hover:bg-blue-400 hover:text-white'}>
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

CartPages.propTypes = {
    ChangeQty:PropTypes.func.isRequired
}
CartPages.defaultProps = {}

const mapStateToProps = state => ({
    data : state.cart.data,
    loading: state.cart.loading,
    Auth: state.Auth
})

const mapDispatchToProps = {
    ChangeQty
}

export default connect(mapStateToProps,mapDispatchToProps)(CartPages)