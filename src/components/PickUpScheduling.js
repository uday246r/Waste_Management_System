import React, { useState } from "react";

const PickupScheduler = () => {
    const [schedule, setSchedule] = useState("");

    const handleSchedule = () => {
        if (!schedule) {
            alert("Please select a date and time for pickup.");
            return;
        }
        alert(`Pickup Scheduled for: ${schedule}`);
    };

    return (
        <div className="scheduler-container">
            <h2>Schedule Waste Pickup</h2>
            <input 
                type="datetime-local"
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
            />
            <button onClick={handleSchedule}>Schedule</button>
        </div>
    );
}

export default PickupScheduler;
