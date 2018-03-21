import React from 'react';
require('../sass/main.scss');
const moment = require('moment');
class ReducerView extends React.Component {
    render() {
        const time = moment().format()
        return (
            <div>
              时间：{time}
            </div>
    );
    }
}
export default ReducerView;