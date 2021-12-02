import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Badge, Layout, Menu} from "antd";

import {
    AppstoreOutlined,
    MailOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    UsergroupAddOutlined, LogoutOutlined
} from "@ant-design/icons";
import {Link, useHistory} from "react-router-dom";
import {getCart} from "../../../redux/actions/cart";
import {isLogout} from "../../../redux/actions/auth";

const {Header} = Layout;
const AppHero = ({getCart, cart, Auth,isLogout}) => {

    const [selected, setSelected] = useState('home')
    const history = useHistory()

    const handleGo = (url) => {
        setSelected(url === "/" ? "home" : url.replace('/', ''))
        history.push(url)
    }

    useEffect(() => {
            getCart()
    }, [getCart])

    return (
        <div className="w-full block relative bg-white h-20">
            <div className="w-full mx-auto h-full max-w-6xl flex items-end">
                <div className={' block relative w-full'} style={{height: '3rem'}}>
                    <Menu selectedKeys={[selected]} mode="horizontal" style={{
                        position: 'relative',
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'left', height: "3rem"
                    }}>
                        <Menu.Item key="home" onClick={() => {
                            handleGo('/')
                        }}>
                            <div className={'flex items-center space-x-2'}>
                                <MailOutlined/>
                                <span className={'px-4'}>Home</span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="product" onClick={() => {
                            handleGo('/product')
                        }}>
                            <div className={'flex items-center space-x-2'}>
                                <AppstoreOutlined/>
                                <span className={'px-4'}>Product</span>
                            </div>
                        </Menu.Item>
                    </Menu>
                </div>

                <div className={' block relative w-full'} style={{height: '3rem'}}>
                    <Menu selectedKeys={[selected]} mode="horizontal" style={{
                        position: 'relative',
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'right', height: "3rem"
                    }}>
                        {
                            !Auth.loading && Auth.isAuth && (
                                <>
                                    <Menu.Item key="cart" onClick={() => {
                                        handleGo('/cart')
                                    }}>
                                        <div className={'px-4'}>
                                            <Badge count={cart.data.length}>
                                                <ShoppingCartOutlined style={{fontSize: 20}}/>
                                            </Badge>
                                        </div>
                                    </Menu.Item>
                                    <Menu.Item onClick={isLogout}>
                                        <LogoutOutlined style={{fontSize: 20}}/>
                                    </Menu.Item>

                                </>
                            )}

                        {
                            !Auth.loading && !Auth.isAuth && (
                                <>
                                    <Menu.Item key="login" onClick={() => handleGo('/login')}>
                                        <div className="w-full flex items-center space-x-4 px-4">
                                            <UserOutlined/>
                                            <span>Login</span>
                                        </div>
                                    </Menu.Item>
                                    <Menu.Item key="register" onClick={() => handleGo('/register')}>
                                        <div className="w-full flex items-center space-x-4 px-4">
                                            <UsergroupAddOutlined/>
                                            <span>Register</span>
                                        </div>
                                    </Menu.Item>
                                </>
                            )
                        }

                    </Menu>
                </div>
            </div>
        </div>
    )
}
AppHero.propTypes = {
    getCart: PropTypes.func.isRequired,
    isLogout: PropTypes.func.isRequired,
}
AppHero.defaultProps = {}

const mapStateToProps = state => ({
    cart: state.cart,
    Auth: state.Auth,
})
const mapDispatchToProps = {
    getCart,
    isLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHero)