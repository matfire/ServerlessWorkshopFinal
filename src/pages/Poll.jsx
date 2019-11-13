import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { randomColor } from "@dashdashzako/random-hex-color";
import { withFirebase } from "../components/Firebase/index";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

const Poll = ({ firebase }) => {
  let { pollId } = useParams(); // allows to retrieve parameters we passed onto the url
  const [votes, setVotes] = useState({});
  const [title, setTitle] = useState("")
  useEffect(() => {
    firebase.db.collection("polls").doc(pollId).onSnapshot((doc) => {
      console.log(doc.data())
      let data = doc.data()
      setTitle(data.title)
      delete data.title
      setVotes(data)
    })
    // this will run every time the pollId will change (i.e) every time the page loads
    // you should probably do something with the pollId here:
    // have a look at this https://firebase.google.com/docs/firestore/query-data/get-data
  }, [pollId]);
  return (
    <div>
      <Doughnut
        data={{
          labels: Object.keys(votes),
          datasets: [
            {
              data: Object.values(votes),
              backgroundColor: Object.keys(votes).map(item => randomColor())
            }
          ]
        }}
      />
      <MDBRow>
        {Object.keys(votes).map((val) => {
          return <MDBCol md="4">
            <MDBBtn onClick={() => {
              let updates = {}
              updates[val] = votes[val] + 1
              firebase.db.collection("polls").doc(pollId).update(updates)
            }}>Vote for {val}</MDBBtn>
          </MDBCol>
        })}
      </MDBRow>
    </div>
  );
};

export default withFirebase(Poll);
