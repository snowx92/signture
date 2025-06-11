'use client';

import React from 'react';
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

  // Dynamic import to avoid SSR issues
  const { FormattedMessage } = require('react-intl');
  
  return <FormattedMessage id={id} defaultMessage={fallback} values={values} />;
};

export default Message; 