import React from 'react';
import { useNavigate } from 'react-router';
import { Responses404 } from '@consta/uikit/Responses404';
import { Theme, presetGpnDark, presetGpnDefault, ThemePreset } from '@consta/uikit/Theme';


function NotFound() {
  return (
    <Theme preset={presetGpnDark}>
      <Responses404 />
    </Theme>
  );
};

export default NotFound;