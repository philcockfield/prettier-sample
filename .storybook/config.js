import { configure } from '@storybook/react';

import { setOptions } from '@storybook/addon-options';
setOptions({ showAddonPanel: false });

window.parent.document.title = 'prettier-sample';
window.parent.document.body.style.overflow = 'hidden'; // Prevent rubber-band.

const req = require.context('../lib', true, /stories.js$/);
configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
