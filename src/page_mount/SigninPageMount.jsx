import React from "react";
import AiToDetect from "../components/SignIn/AiToDetectPart/AiToDetect";
import SigninToggle from "../components/SignIn/SigninTogglePart/SigninToggle";

const SigninPageMount = () => {
  return (
    <div className="flex w-full gap-1 justify-between">
      <AiToDetect />
      <SigninToggle />
    </div>
  );
};

export default SigninPageMount;
