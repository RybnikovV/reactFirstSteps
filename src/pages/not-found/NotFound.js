import React from 'react';
import { useNavigate } from 'react-router';
import { Responses404 } from '@consta/uikit/Responses404';
import { Theme, presetGpnDark } from '@consta/uikit/Theme';
import MyButton from '../../components/button/btn';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Theme preset={presetGpnDark}>
      <Responses404
        actions={<MyButton onClick={() => navigate(-1)}>go back</MyButton>}
      />
    </Theme>
  );
};

export default NotFound;