import React,{Component} from 'react';
import {connect} from 'react-redux';

 export class LIST extends Component {
   renderDom(){
     if(!this.props.comment){
       return ''
     }
     else{
       return this.props.comment.map((value,index) => {
          return <li key={index}>{value}</li>
       })
     }
   }
    render() {
        return (
            <div className="LIST">
                <ul className='comment-list'>
                  {this.renderDom()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({comment}) {
  return{comment}
}

export default connect(mapStateToProps)(LIST)
