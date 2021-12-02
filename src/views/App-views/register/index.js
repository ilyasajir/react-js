import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button, Form, Input, message, Skeleton} from "antd";
import {AuthRegister} from "../../../redux/actions/auth";
import {Redirect} from 'react-router-dom'


const Register = ({AuthRegister,Auth})=> {

    const [form] = Form.useForm()
    const onFinish = ()=> {
        form.validateFields()
            .then((values)=> {
                AuthRegister(values)
            })
            .catch((err)=> {

            })
    }

    if (!Auth.loading && Auth.isAuth){
        return <Redirect to={'/'}/>
    }

    return Auth.loading ? <Skeleton active/>: (
        <div className="w-full ">
            <div className="w-full flex items-center justify-center">
                <div className="w-96 py-12 px-6 bg-white rounded-xl flex flex-col items-center justify-center">
                    <div className="w-full">
                        <h1>Register</h1>
                    </div>
                    <Form name={'login'} layout={'vertical'} form={form} onFinish={onFinish} className={'w-full'}>
                        <Form.Item label={'username'} name={'username'} rules={[{required:true,message:"Tidak boleh kosong"}]}>
                            <Input autoComplete={'off'} spellCheck={'false'}/>
                        </Form.Item>
                        <Form.Item name={'password'} label={'password'} rules={[{required:true,message:"Tidak boleh kosong"}]}>
                            <Input.Password autoComplete={'off'} spellCheck={'false'}/>
                        </Form.Item>
                        <Form.Item name={'confirm'} label={'Confirm Password'} rules={[
                            {required:true,message:"Tidak boleh kosong"},
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}>
                            <Input.Password autoComplete={'off'} spellCheck={'false'} />
                        </Form.Item>

                        <Button type={'primary'} htmlType={'submit'} className={'w-full'}>Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

Register.propTypes = {
    AuthRegister:PropTypes.func.isRequired
}
Register.defaultProps = {}

const mapStateToProps = state => ({
    Auth:state.Auth
})
const mapDispatchToProps = {
    AuthRegister
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)