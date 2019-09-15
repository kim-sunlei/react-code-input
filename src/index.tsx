import React, { Fragment } from 'react'
import './index.css'

interface CodeInputProps {
    inputStyle: object;

}

interface CodeInputState {

}

class CodeInput extends React.Component<CodeInputProps, CodeInputState> {
    constructor (props) {
        super (props);
        this.state = {
            valueArr: new Array(props.fields).fill(''),
            activeItem: 0,
        };
        this.realInput = null;
    }

     _renderItem = (index) => {
        const { inputStyle } = this.props;
        const { valueArr, activeItem } = this.state;

        return (
            <button
                key={index}
                onClick={() => {
                    this.realInput && this.realInput.focus();
                    this.setState({ activeItem: index });
                }}
                style={{
                    ...inputStyle,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    outline: 'none',
                    cursor: 'text',
                }}
            >
                {activeItem === index ? <div className="animation" /> : <span>{valueArr[index]}</span>}
            </button>
        )

    };

     _handleNextItem = () => {
        const { valueArr } = this.state;
        let result = -1;

        for (let i = 0; i < valueArr.length; i++) {
            if (valueArr[i] === '') {
                result = i;
                break
            }
        }

        return result
    };

    _handleMove = (keyCode: number) => {
        const { activeItem, valueArr } = this.state;
        const { fields } = this.props;

        if (keyCode === 37 && activeItem > 0) {
            this.setState({
                activeItem: activeItem -1,
            })
        }

        if (keyCode === 39 && activeItem < fields - 1) {
            this.setState({
                activeItem: activeItem + 1,
            })
        }

        if (keyCode === 8 && activeItem > 0) {
            const setValueArr = valueArr;
            setValueArr[activeItem] = '';
            this.setState({
                activeItem: activeItem - 1,
                valueArr: setValueArr,
            })
        }
    };

    render() {
        const { autoFocus, fields, onFinished } = this.props;

        return (
            <Fragment>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {new Array(fields).fill('').map((field, index) => this._renderItem(index))}
                </div>
                <input
                    className="codeInput"
                    value=""
                    style={{
                        outline: 'none',
                        backgroundColor: 'transparent',
                        color: 'transparent',
                        borderColor: 'transparent',
                        height: 0,
                        width: 0,
                        zIndex: -10,
                    }}
                    ref={realInput => this.realInput = realInput}
                    onKeyUp={e => this._handleMove(e.keyCode)}
                    autoFocus={autoFocus}
                    onBlur={() => this.setState({ activeItem: -2 })}
                    onChange={e => {
                        const { valueArr, activeItem } = this.state;
                        const setValueArr = valueArr;
                        setValueArr[activeItem] = e.target.value;

                        this.setState({
                            valueArr: setValueArr,
                            activeItem: this._handleNextItem(),
                        }, () => {
                            let allValue = '';
                            if (this._handleNextItem() === -1) {
                                valueArr.map(value => allValue+= value);
                                onFinished(allValue)
                            }
                        })
                    }}
                />
            </Fragment>
        )
    }
}

export default CodeInput
