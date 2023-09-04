import React, { useState } from "react";
import axios from "axios";

const ZoomIntegration = () => {
  const [meetingLink, setMeetingLink] = useState("");

  const createZoomMeeting = async () => {
    try {
      const apiKey = "2QwcKxBhThat43DNJYpT1A";
      const apiSecret = "AfSa5mEyRcGepUFJr4vXUcaaRFMkIZTG";

      // Authenticate with Zoom to obtain an access token
      const response = await axios.post(
        `https://api.zoom.us/v2/users/me/meetings`,
        null,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}.${apiSecret}`,
          },
        }
      );

      // Extract the meeting link from the response
      const { join_url } = response.data;

      // Set the meeting link in state
      setMeetingLink(join_url);
    } catch (error) {
      console.error("Error creating Zoom meeting:", error);
    }
  };

  return (
    <div>
      <h1>Create a Zoom Meeting</h1>
      <button onClick={createZoomMeeting}>Generate Meeting Link</button>
      {meetingLink && (
        <div>
          <p>Meeting Link:</p>
          <a href={meetingLink} target="_blank" rel="noopener noreferrer">
            Join Meeting
          </a>
        </div>
      )}
    </div>
  );
};

export default ZoomIntegration;
