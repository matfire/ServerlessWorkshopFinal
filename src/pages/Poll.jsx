import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { randomColor } from "@dashdashzako/random-hex-color";
import { withFirebase } from "../components/Firebase/index";

const Poll = ({ firebase }) => {
  let { pollId } = useParams(); // allows to retrieve parameters we passed onto the url
  const [votes, setVotes] = useState({
    option1: 10,
    option2: 50,
    option3: 15,
    option4: 3
  });
  useEffect(() => {
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
    </div>
  );
};

export default withFirebase(Poll);
