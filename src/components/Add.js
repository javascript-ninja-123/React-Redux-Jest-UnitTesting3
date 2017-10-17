import React,{Component} from 'react';
import {connect} from 'react-redux'
import { Form, TextArea, Button } from 'semantic-ui-react'
import {fetchComment} from '../actions';

 export class ADD extends Component {
   constructor(props){
   	super(props);
   	this.state = {comment:''};
   }
   onChange(e){
     this.setState({comment:e.target.value})
   }
   onClick(){
     this.props.fetchComment(this.state.comment)
     this.setState({comment:''})
   }
   renderButton(){
     if(this.state.comment === '' || this.state.comment.trim().legnth <=0 ){
       return  (
         <Button
           onClick={this.onClick.bind(this)}
           className='comment-btn'
           disabled={true}
           >
             Click Here
           </Button>
       )
     }
     else{
       return
       (<Button
         onClick={this.onClick.bind(this)}
         className='comment-btn'
         disabled={false}
         >
           Click Here
         </Button>)
     }
   }
    render() {
        return (
            <div className="ADD">
                <h3>Add a Comment</h3>
                <Form>
                   <TextArea
                    className='comment-textarea'
                    value={this.state.comment}
                    onChange={this.onChange.bind(this)}
                    placeholder='Tell us more' />
                </Form>
                <Button
                onClick={this.onClick.bind(this)}
                className='comment-btn'
                >
                  Click Here
                </Button>
            </div>
        );
    }
}

export default connect(null, {fetchComment})(ADD)
