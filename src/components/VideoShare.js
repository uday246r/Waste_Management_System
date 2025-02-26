import React, { useState } from "react";

function VideoSharing() {
    const [videoTitle, setVideoTitle] = useState("");
    const [videoFile, setVideoFile] = useState(null);

    const handleUpload = () => {
        alert(`Uploaded video: ${videoTitle}`);
    };

    return (
        <div>
            <h2>Share a Video</h2>
            <input
                type="text"
                placeholder="Video Title"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
            />
            <br />
            <input
                type="file"
                accept="video/*"
                onChange={(e) => setVideoFile(e.target.files[0])}
            />
            <br />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default VideoSharing;
