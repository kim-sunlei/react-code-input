# React Code Input

An input component for inputting verification codes for [react](https://github.com/facebook/react)

![license](https://img.shields.io/github/license/kim-sunlei/react-code-input)   [![npm version](https://badge.fury.io/js/react-vcode-input.svg)](https://badge.fury.io/js/react-vcode-input)  [![npm issues](https://img.shields.io/github/issues/kim-sunlei/react-code-input)](https://github.com/kim-sunlei/react-code-input/issues)  ![npm forks](	https://img.shields.io/github/forks/kim-sunlei/react-code-input)   ![npm stars](https://img.shields.io/github/stars/kim-sunlei/react-code-input)



## To use

`$ npm i --save react-vcode-input`



## Usage

```js
import VcodeInput from 'react-vcode-input';

<CodeInput
 fields={6}
 autoFocus
 onFinished={onValueChange}
 inputStyle={{
  marginTop: 0,
	backgroundColor: "transparent",
	marginLeft: "4px"
 }}
/>
```

### Props

|  Property  |          Type           |                Description                |
| :--------: | :---------------------: | :---------------------------------------: |
|   fields   |         number          |                Code length                |
| autoFocus  |          bool           |      Input gets focus automatically       |
| onFinished | (value: string) => void | Callback function at the end of all input |
| inputStyle |         object          |               Style of item               |

### 

## License

[MIT](https://github.com/kim-sunlei/react-code-input/blob/master/LICENSE)