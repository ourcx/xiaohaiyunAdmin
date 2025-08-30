
"use client"
import Container from "@/components/container"
import { Button, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, message, Radio, Rate, Select, Slider, Switch, TreeSelect, Upload, UploadProps } from "antd";
import Dragger from "antd/es/upload/Dragger"
import { InboxOutlined, PlusOutlined } from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
import style from "./page.module.css"
import { useState } from "react";
const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },


}
export default function LoginPage() {

    const onFinish = (values: any) => {
        console.log('Received values from form: ', values);
    }
    const requiredRules = [
        {
            required: true,
            message: '请输入内容'
        }
    ]

    const [form] = Form.useForm();
    const [check, setCheck] = useState<boolean>(false)
    return (
        <Container>
            <Dragger {...props} className={style.xh_upload}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">点击或者拖拽上传文件</p>
                <p className="ant-upload-hint">
                    提示：请上传文件
                    <br />
                    仅支持上传文件
                </p>
            </Dragger>
            <div className={style.form}>
                <Form
                    form={form}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 18 }}
                    layout="horizontal"
                    onFinish={onFinish}
                >
                    <Form.Item label="名字" name="name" rules={requiredRules}>
                        <Input placeholder="请输入名称" />
                    </Form.Item>
                    <Form.Item label="目标" name="target" rules={requiredRules}>
                        <Input placeholder="请输入目标名称"/>
                    </Form.Item>
                    <Form.Item label="是否分享" valuePropName="checked">
                        <Checkbox onChange={(e) => { form.setFieldValue('check', e.target.value) }}></Checkbox>
                    </Form.Item>
                    <Form.Item label="过期" name="expire">
                        <InputNumber placeholder="请输入过期时间" />
                    </Form.Item>
                    <Form.Item label="描述" name="desc" rules={requiredRules}>
                        <TextArea  placeholder="请输入描述" />
                    </Form.Item>
                    <Form.Item label="" colon={false} className={style.xh_btn}>
                        <Button type="primary" htmlType="submit" className={style.xh_Allfile_btn}>提交</Button>
                    </Form.Item>
                </Form>
            </div>
        </Container>
    )
}