import React from "react";
import SocialRow from "../components/SocialRow";
import { socialLinks , musicLinks } from "../data/content";

function section3() {
  const title1 = "Listen"
  const title2 = "Follow"
  return (
    <div className="mt-6 px-1">
      <SocialRow items={musicLinks} title={title1}/>
      <SocialRow items={socialLinks} title={title2}/>
    </div>
  );
}

export default section3;
