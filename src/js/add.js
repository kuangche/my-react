import React from 'react';
require('../sass/main.scss');
const moment = require('moment');

class ListOfWords extends React.Component {
    render() {
        return <div>{this.props.words.join(',')}</div>;
    }
}
class AddView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['marklar']
				};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const words = this.state.words;
        words.push(`marklar${moment().format('YYYYMMDDhhmmss')}`);
        this.setState({words: words});
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>push</button>
                <ListOfWords words={this.state.words} />
            </div>
    );
    }
}
export default AddView;