'use client';

import { FloatButton } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

export default function GoToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return visible ? (
        <FloatButton
            type="default"
            icon={<ArrowUpOutlined  />}
            onClick={scrollToTop}
            tooltip={"Lên đâu trang"}
            style={{
                right: 40,
                bottom: 40,
                backgroundColor: '#f97316',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
        />
    ) : null;
}
