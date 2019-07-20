import React from 'react';
import PropTypes  from 'prop-types';
  import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
  import {withRouter}  from 'react-router';


function NewGame(props){
  let _name = null;
  let _rate = null;



function handleNewGameFormSubmission(e){
  e.preventDefault();
  props.onNewCreation({
    name: _name.value,
    rate: _rate.value

  });
  props.history.push('/allgames');
}

  return(
    <div>
      <MDBContainer>
     <MDBRow>
       <MDBCol md="6">
         <form  onSubmit={handleNewGameFormSubmission}>
           <p className="h4 text-center mb-4">Add new game</p>
           <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
             Name
           </label>
           <input
             type="text"
             id="defaultFormRegisterNameEx"
             className="form-control"
             ref={(input) => {_name = input;}}

           />
           <br />
           <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
             Rate
           </label>
           <input
             type="text"
             id="defaultFormRegisterEmailEx"
             className="form-control"
              ref={(input) => {_rate = input;}}

           />
      
           <br />

           <div className="text-center mt-4">
             <MDBBtn scolor="unique" type="submit">
               Add
             </MDBBtn>
           </div>
         </form>
       </MDBCol>
     </MDBRow>
   </MDBContainer>

    </div>
  )
}

NewGame.propTypes={
  onNewCreation: PropTypes.func,
  gameListPropperty: PropTypes.array

}

export default withRouter (NewGame);
