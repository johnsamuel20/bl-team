import React from "react";
import ListenRow from "../components/ListenRow";
import SocialMediaRow from "../components/SocialMediaRow";
import { socialLinks , musicLinks } from "../data/content";

function section3() {
  return (
    <div className="mt-6 px-1">
      <ListenRow items={musicLinks} />
      <SocialMediaRow items={socialLinks}/>
    </div>
  );
}

export default section3;
