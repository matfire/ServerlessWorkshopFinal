import React from "react";
import { Button } from "reactstrap";

const Home = () => {
  console.log("home");
  return (
    <div className="mt-5 pt-5">
      <Button color="primary">Sign in with google</Button>
    </div>
  );
};

export default Home;
