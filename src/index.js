// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/literallycanvas/lib/css/literallycanvas.css"
const LC = require('literallycanvas');

// ========================================
function MyApp() {
  return (<LC.LiterallyCanvasReactComponent imageURLPrefix="/lc-assets/img" />);
};

ReactDOM.render(
  <MyApp/>,
  document.getElementById('root')
);

