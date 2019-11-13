import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
import { withFirebase } from "../components/Firebase";
import * as Firebase from 'firebase'
import {useHistory} from 'react-router-dom'

const Home = ({firebase}) => {
  const [authed, setAuthed] = useState(false)
  const history = useHistory()
  const [pollData, setPollData] = useState({
    title:"",
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
  })
  useEffect(() => {
    if (firebase.user.email) {
      setAuthed(true)
    }
  })
  return (
    <MDBContainer fluid>
{!authed &&      <MDBRow center className="mt-5 pt-5">
        <MDBCol size="4">
          <MDBBtn onClick={() => {
          var provider = new Firebase.auth.GoogleAuthProvider();
          firebase.auth.signInWithPopup(provider).then(result => {
            firebase.setUser(result.user)
            setAuthed(true)
          })
          }}>Sign In with Google</MDBBtn>
        </MDBCol>
      </MDBRow>}
      {
        authed && <MDBRow center>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBInput label="Poll name" getValue={(value) => setPollData({...pollData, title:value})} />
                <MDBInput label="Answer 1" getValue={(value) => setPollData({...pollData, answer1:value})} />
                <MDBInput label="Answer 2" getValue={(value) => setPollData({...pollData, answer2:value})}/>
                <MDBInput label="Answer 3" getValue={(value) => setPollData({...pollData, answer3:value})}/>
                <MDBInput label="Answer 4" getValue={(value) => setPollData({...pollData, answer4:value})}/>
                <MDBBtn color="primary" onClick={() => {
                  let result = {}
                  result["title"] = pollData.title
                  result[pollData.answer1] = 0;
                  result[pollData.answer2] = 0;
                  result[pollData.answer3] = 0;
                  result[pollData.answer4] = 0;
                  firebase.db.collection("polls").add(result).then((docRef) => history.push(`/poll/${docRef.id}`))
                }}>Create Poll</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      }
    </MDBContainer>
  );
};

export default withFirebase(Home);
