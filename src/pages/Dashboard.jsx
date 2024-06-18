import React, { useState, useEffect } from "react";
import LinkBoxes from "../customer/Components/dashboard/LinkBoxes";
import Profile from "../customer/Components/Profile";
import axios from "axios";

const Dashboard = () => {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    const fetchURLData = async () => {
      try {
        console.log("fetchURLData called");
        const response = await axios.get(
          "http://localhost:8080/dashboard/urls"
        );
        setUrls(response.data);
      } catch (error) {
        console.error("Error fetching urls data:", error);
      }
    };
    fetchURLData();

    // No dependencies specified, runs only on component mount
  }, []);

  return (
    <div className="flex border border-red-200 p-4">
      <div className="flex-col flex-grow border border-gray-200 p-4">
        <Profile/>
        {urls.map((url) => (
          <LinkBoxes key={url.column1} data={url} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
