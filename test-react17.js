const React = require('react');
const ReactDOM = require('react-dom');

// Test React 17 compatibility
console.log('React version:', React.version);
console.log('ReactDOM.render available:', typeof ReactDOM.render === 'function');
console.log('createRoot available:', typeof ReactDOM.createRoot === 'function');

// Test if our component can be imported
try {
  const CurrencyTextField = require('./dist/index.js');
  console.log('CurrencyTextField component imported successfully');
  console.log('Component type:', typeof CurrencyTextField.default);
} catch (error) {
  console.error('Error importing CurrencyTextField:', error.message);
}

console.log('React 17 compatibility test completed');
