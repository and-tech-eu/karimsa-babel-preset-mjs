/**
 * lib/transforms/VariableDeclaration.js - babel-preset-mjs
 * 
 * Licensed under MIT license.
 * Copyright (C) 2017 Karim Alibhai.
 */

export default function (path) {
  // 'var' is not supported in mjs
  if (path.node.kind === 'var') {
    path.node.kind = 'let'
  }
}