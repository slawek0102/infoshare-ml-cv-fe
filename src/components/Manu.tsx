'use client'

import React, {useState } from 'react';
import { useRouter } from 'next/navigation'; // Importuj useRouter
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import { Menu } from 'antd';

const Manu: React.FC = () => {
    const [current, setCurrent] = useState('about');
    const router = useRouter();


    const items: MenuProps['items'] = [
        {
            key: 'about',
            icon: <MailOutlined />,
            label: 'About me'
        },
        {
            label: 'TO_DO_LATER',
            key: 'app',
            icon: <AppstoreOutlined />,
            disabled: true,
        },
        {
            label: 'Projects',
            key: 'projects',
            icon: <SettingOutlined />,
            children: [
                {
                    label: 'Project 1',
                    key: 'project_1',
                },
                {
                    label: 'Project 2',
                    key: 'project_2',
                },
            ],
        },
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        if (e.key === 'about' ) {
            router.push('/about');
        }
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Manu;
