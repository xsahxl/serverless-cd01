import React, { useEffect } from 'react';
import { Field, Icon } from '@alicloud/console-components';
import { noop, find, get } from 'lodash';
import { setSearchParams } from '@/utils/index';
import Github from '../github/index';

interface IProps {
  field: Field;
  template: string;
  forceUpdate: Function;
  orgName: string;
  templateContent: object;
}

const TemplateContent = (props: IProps) => {
  const { field, template, forceUpdate = noop, orgName, templateContent } = props;
  // 生成随机数
  const generateRandom = () => Math.random().toString(36).substring(2, 6);

  const { setValue } = field;

  const goTemplateList = () => {
    setSearchParams({ template: '' });
    forceUpdate?.();
  };

  useEffect(() => {
    if (template) {
      setInitValue();
    }
  }, [template]);

  useEffect(() => {
    setValue('description', get(templateContent, 'description', ''));
  }, [get(templateContent, 'description')]);

  const setInitValue = () => {
    setValue('repoName', `${template}-${generateRandom()}`);
  };

  return (
    <>
      <h1 style={{ marginTop: 0 }}>
        <Icon type="wind-arrow-left" className="mr-16 cursor-pointer" onClick={goTemplateList} />
        模版列表
      </h1>
      <Github field={field} createType="template" orgName={orgName} />
    </>
  );
};

export default TemplateContent;
