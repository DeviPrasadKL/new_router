import React, { useState } from 'react';
import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const items = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Home',
    path: '/'
  },
  {
    key: '2',
    icon: <DesktopOutlined />,
    label: 'About',
    path: '/about'
  },
  {
    key: '3',
    icon: <ContainerOutlined />,
    label: 'Contact',
    path: '/contact'
  }
];

const SidBar = () => {
  return (
    <div style={{ marginTop: '2rem' }} className='max-sm:hidden md:block lg:block'>
      {
        items.map((element) => {
          return (
            <Link to={element.path} className='flex items-center justify-start w-full gap-4 mx-4' key={element.path}>
              {element.icon}
              <h4>{element.label}</h4>
            </Link>
          )
        })
      }
    </div>
  );
};
export default SidBar;