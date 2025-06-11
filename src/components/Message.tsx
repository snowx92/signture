'use client';

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useLanguage } from './ClientIntlProvider';

interface MessageProps {
  id: string;
  fallback?: string;
  values?: Record<string, React.ReactNode>;
}

const Message: React.FC<MessageProps> = ({ id, fallback, values }) => {
  const { isClient } = useLanguage();
  
  if (!isClient) {
    return <>{fallback}</>;
  }

  return <FormattedMessage id={id} defaultMessage={fallback} values={values} />;
};

export default Message; 