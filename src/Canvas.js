// @flow

import React from 'react';
import "../node_modules/literallycanvas/lib/css/literallycanvas.css"
const LC = require('literallycanvas');

export function Canvas() {
  return (<LC.LiterallyCanvasReactComponent imageURLPrefix="/lc-assets/img" />);
};

