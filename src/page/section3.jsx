import React from "react";
import ListenRow from "../components/ListenRow";
import SocialMediaRow from "../components/SocialMediaRow";
import WebPlatforms from "../components/WebPlatforms";
import { socialLinks , musicLinks , webPlatforms } from "../data/content";

function section3() {
  return (
    <div className="mt-6 px-1">
      <SocialMediaRow items={socialLinks}/>
      <ListenRow items={musicLinks} />
      <WebPlatforms items={webPlatforms} />
    </div>
  );
}

export default section3;
