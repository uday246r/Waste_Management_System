import React, { useState } from "react";

function VideoSharing() {
    const [videoTitle, setVideoTitle] = useState("");
    const [videoFile, setVideoFile] = useState(null);

    const handleUpload = () => {
        if (!videoTitle || !videoFile) {
            alert("Please provide a video title and select a file.");
            return;
        }
        alert(`Uploaded video: ${videoTitle}`);
    };

    return (
        <div className="video-sharing-container">
            <h2>Share a Video</h2>
            <input
                type="text"
                placeholder="Enter Video Title"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
            />
            <input
                type="file"
                accept="video/*"
                onChange={(e) => setVideoFile(e.target.files[0])}
            />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default VideoSharing;
