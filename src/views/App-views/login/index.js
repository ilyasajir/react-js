import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button, Form, Input, message} from 'antd'
import {Link,Redirect} from "react-router-dom";
import {Authenticated} from "../../../redux/actions/auth";
const Login = ({Authenticated,Auth})=> {
    const [form] = Form.useForm()

    const onFinish = ()=> {
        form.validateFields()
            .then((values)=> {
                console.log(values)
                Authenticated(values)
                message.success('success')
            })
            .catch((err)=> {

            })
    }
    if (!Auth.loading && Auth.isAuth){
        return <Redirect to={'/'}/>
    }
    return(
        <div className="w-full flex items-center justify-center">
            <div className="w-96 h-96 px-6 bg-white rounded-xl flex flex-col items-center justify-center">
                <div className="w-full">
                    <h1>Login</h1>
                </div>
                <Form name={'login'} layout={'vertical'} form={form} onFinish={onFinish} className={'w-full'}>
                    <Form.Item label={'username'} name={'username'} rules={[{required:true,message:"Tidak boleh kosong"}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'password'} label={'password'} rules={[{required:true,message:"Tidak boleh kosong"}]}>
                        <Input.Password/>
                    </Form.Item>
                    <Button type={'primary'} htmlType={'submit'} className={'w-full'}>Submit</Button>
                </Form>
                <div className={'my-2'}>
                    <span>Belum memiliki akun ? <Link to={'/register'}>register</Link></span>
                </div>
            </div>
        </div>
    )
}

Login.propTypes ={
    Authenticated:PropTypes.func.isRequired
}
Login.defaultProps = {}

const mapStateToProps = state => ({
    Auth: state.Auth
})
const mapDispatchToProps = {Authenticated}

export default connect(mapStateToProps,mapDispatchToProps)(Login)