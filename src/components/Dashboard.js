import React, { useState } from "react";

function Dashboard() {
  // Sample initial activity data
  const [activities, setActivities] = useState([
    { id: 1, activity: "Scheduled Waste Pickup", date: "Feb 20, 2025", status: "Completed" },
    { id: 2, activity: "Uploaded Recycling Video", date: "Feb 18, 2025", status: "Pending Review" },
  ]);

  // Function to handle adding a new pickup
  const handleSchedulePickup = () => {
    const newActivity = {
      id: activities.length + 1,
      activity: "New Waste Pickup Scheduled",
      date: new Date().toLocaleDateString(),
      status: "Scheduled",
    };
    setActivities([...activities, newActivity]);
  };

  // Function to handle redeeming rewards
  const handleRedeemRewards = () => {
    const newActivity = {
      id: activities.length + 1,
      activity: "Redeemed Reward Coins",
      date: new Date().toLocaleDateString(),
      status: "Successful",
    };
    setActivities([...activities, newActivity]);
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">User Dashboard</h2>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">
          <h3>Total Pickups</h3>
          <p>{activities.filter(a => a.activity.includes("Pickup")).length} Scheduled</p>
        </div>
        <div className="card">
          <h3>Reward Coins</h3>
          <p>250 Coins Earned</p>
        </div>
        <div className="card">
          <h3>Certificates Earned</h3>
          <p>3 Achieved</p>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="activity-section">
        <h3>Recent Activity</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Activity</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td>{activity.id}</td>
                <td>{activity.activity}</td>
                <td>{activity.date}</td>
                <td>{activity.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="btn schedule" onClick={handleSchedulePickup}>Schedule a Pickup</button>
        <button className="btn redeem" onClick={handleRedeemRewards}>Redeem Rewards</button>
      </div>
    </div>
  );
}

export default Dashboard;