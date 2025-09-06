"use client";
import Container from "@/components/container"
import { Steps } from "antd"
import { CheckOutlined, CloseOutlined, LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import styles from "./page.module.css";
import ClientSwitch from './components/ClientSwitch';

const handleChange = (checked: any) => {
    console.log(`switch to ${checked}`);
    // 这里可以添加更多逻辑
};
export default function SettingPage() {

    return (
        <Container title="设置">
            <div className={styles.settingContainer}>
                <div className={styles.settingPage}>分享链接全局设置（仅仅管理员可以使用）</div>
                <Steps
                    items={[
                        {
                            title: '全局设置',
                            status: 'process',
                            icon: <LoadingOutlined />,
                        },
                        {
                            title: '确认全局设置',
                            status: 'wait',
                            icon: <SolutionOutlined />,
                        },
                        {
                            title: '身份认证',
                            status: 'wait',
                            icon: <UserOutlined />,
                        },
                        {
                            title: '完成',
                            status: 'wait',
                            icon: <SmileOutlined />,
                        },
                    ]}
                />
                <Set />
            </div>
        </Container>
    )
}

type SettingItem = {
    title: string;
}
function Set() {
    const list: SettingItem[] = [
        { title: "全局分享" },
        { title: "限制访问" },
        { title: "限制上传" },
        { title: "限制下载" },
        { title: "限制删除" },
        { title: "限制重命名" },
    ];

    const handleChange = (checked: boolean) => {
        // 处理开关变化的逻辑
        console.log('Switch changed to:', checked);
    };

    return (
        <>
            {list.map((item, index) => (
                <div key={index} className={styles.settingCard}>
                    <div className={styles.settingClose}>
                        {item.title}
                        <ClientSwitch onChange={handleChange} />
                    </div>
                </div>
            ))}
        </>
    );
}