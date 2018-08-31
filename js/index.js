var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //coded by Kevin Li
//Free Code Camp JS Calculator Project
var operators = /[-+*/]/,
decimal = /[.]/;var

Calculator = function (_React$Component) {_inherits(Calculator, _React$Component);
  function Calculator(props) {_classCallCheck(this, Calculator);var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this,
    props));
    _this.state = {
      input: '0',
      lastInput: '0',
      formula: '0' };

    _this.clear = _this.clear.bind(_this);
    _this.numberInput = _this.numberInput.bind(_this);
    _this.operatorInput = _this.operatorInput.bind(_this);
    _this.evaluateInput = _this.evaluateInput.bind(_this);
    _this.decimalInput = _this.decimalInput.bind(_this);return _this;
  }_createClass(Calculator, [{ key: 'clear', value: function clear(

    event) {
      this.setState({
        input: '0',
        lastInput: '0',
        formula: '0' });

    } }, { key: 'numberInput', value: function numberInput(

    event) {
      if (this.state.formula.includes('=')) {
        this.setState({
          input: event.target.value,
          lastInput: this.state.input,
          formula: event.target.value });

      } else if (operators.test(this.state.input)) {
        this.setState({
          input: event.target.value,
          lastInput: this.state.lastInput + this.state.input,
          formula: this.state.formula + event.target.value });

      } else {
        this.setState({
          input: this.state.input != '0' ? this.state.input + event.target.value : event.target.value,
          lastInput: this.state.lastInput + this.state.input,
          formula: this.state.input != '0' ? this.state.formula + event.target.value : event.target.value });

      }
    } }, { key: 'operatorInput', value: function operatorInput(

    event) {
      if (this.state.formula.includes('=')) {
        this.setState({
          input: event.target.value,
          lastInput: this.state.input,
          formula: this.state.input + event.target.value });

      } else if (operators.test(this.state.input)) {
        this.setState({
          input: event.target.value,
          lastInput: this.state.input,
          formula: this.state.formula.slice(0, -1) + event.target.value });

      } else {
        this.setState({
          input: event.target.value,
          lastInput: this.state.input,
          formula: this.state.input != '0' ? this.state.formula + event.target.value : '0' + event.target.value });

      }
    } }, { key: 'decimalInput', value: function decimalInput(

    event) {
      if (decimal.test(this.state.input)) {
        this.setState({
          input: this.state.input,
          lastInput: this.state.input,
          formula: this.state.formula });

      } else {
        this.setState({
          input: this.state.input + event.target.value,
          lastInput: this.state.input,
          formula: this.state.formula + event.target.value });

      }
    } }, { key: 'evaluateInput', value: function evaluateInput(

    event) {
      var answer = eval(this.state.formula);
      this.setState({
        input: answer,
        lastInput: answer,
        formula: this.state.formula + " = " + answer });

    } }, { key: 'render', value: function render()

    {
      return (
        React.createElement('div', { className: 'main' },
          React.createElement('h1', { id: 'title' }, 'JavaScript Calculator'),
          React.createElement('div', { className: 'container' },
            React.createElement('div', { className: 'header' },
              React.createElement('p', null, this.state.formula),
              React.createElement('p', { id: 'display' }, this.state.input)),


            React.createElement('button', { className: 'btn btn1', id: 'clear', onClick: this.clear }, 'Clear'),
            React.createElement('button', { className: 'btn btn2', id: 'divide', value: '/', onClick: this.operatorInput }, '/'),
            React.createElement('button', { className: 'btn btn3', id: 'multiply', value: '*', onClick: this.operatorInput }, '*'),

            React.createElement('button', { className: 'btn btn4', id: 'seven', value: '7', onClick: this.numberInput }, '7'),
            React.createElement('button', { className: 'btn btn5', id: 'eight', value: '8', onClick: this.numberInput }, '8'),
            React.createElement('button', { className: 'btn btn6', id: 'nine', value: '9', onClick: this.numberInput }, '9'),
            React.createElement('button', { className: 'btn btn7', id: 'subtract', value: '-', onClick: this.operatorInput }, '-'),

            React.createElement('button', { className: 'btn btn8', id: 'four', value: '4', onClick: this.numberInput }, '4'),
            React.createElement('button', { className: 'btn btn9', id: 'five', value: '5', onClick: this.numberInput }, '5'),
            React.createElement('button', { className: 'btn btn10', id: 'six', value: '6', onClick: this.numberInput }, '6'),
            React.createElement('button', { className: 'btn btn11', id: 'add', value: '+', onClick: this.operatorInput }, '+'),

            React.createElement('button', { className: 'btn btn12', id: 'one', value: '1', onClick: this.numberInput }, '1'),
            React.createElement('button', { className: 'btn btn13', id: 'two', value: '2', onClick: this.numberInput }, '2'),
            React.createElement('button', { className: 'btn btn14', id: 'three', value: '3', onClick: this.numberInput }, '3'),
            React.createElement('button', { className: 'btn btn15', id: 'equals', value: '=', onClick: this.evaluateInput }, '='),

            React.createElement('button', { className: 'btn btn16', id: 'zero', value: '0', onClick: this.numberInput }, '0'),
            React.createElement('button', { className: 'btn btn17', id: 'decimal', value: '.', onClick: this.decimalInput }, '.'))));




    } }]);return Calculator;}(React.Component);
;

ReactDOM.render(React.createElement(Calculator, null), document.getElementById("app"));