import React, { useState } from 'react';
import PageLayout from '@/layouts/PageLayout';
import { Tab } from '@alicloud/console-components';
import Secrets from './components/Secrets';
import Members from './components/Members';
import { getParam, setSearchParams } from '@/utils';

function Settings() {
  const defaultActiveKey = getParam('activeTab') || 'members';

  const [activeKey, setActiveKey] = useState(defaultActiveKey as string);
  const handleChangeTab = (key: string) => {
    setSearchParams({ activeTab: key });
    setActiveKey(key);
  };
  return (
    <PageLayout
      breadcrumbs={[
        {
          name: '首页',
          path: '/',
        },
        {
          name: '团队设置',
        },
      ]}
    >
      <Tab shape="wrapped" activeKey={activeKey} onChange={handleChangeTab}>
        <Tab.Item key="members" title="成员管理">
          <Members />
        </Tab.Item>
        <Tab.Item key="secrets" title="密钥配置">
          <Secrets />
        </Tab.Item>
      </Tab>
    </PageLayout>
  );
}

export default Settings;
