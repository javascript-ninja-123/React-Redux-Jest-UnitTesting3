import React,{Component} from 'react';
import Add from './Add';
import List from './List'

class APP extends Component {
    render() {
        return (
            <div className="APP">
              <Add />
              <List />
            </div>
        );
    }
}

export default APP
