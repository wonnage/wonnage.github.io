import React, { useState } from "react";

export default function RSVPForm() {
  return (
    <iframe
      id="RSVPifyIFrame"
      style={{ width: "100%", border: "none", height: "800px" }}
      src="https://emmavictor.app.rsvpify.com/?embed=1&js=1"
      title="rsvp"
      scrolling="no"
    />
  );
}
