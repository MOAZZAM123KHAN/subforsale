import React, { useState, useEffect } from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementAmount,
  decrementAmount,
  loginUser,updateName , updateEmail ,updatePhoneNumber
} from "../../state/action-creators/userActions";
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();
  const amount= useSelector((state)=> state.user.amount)
  const userId= useSelector((state)=> state.user.userId)
  const depositMoney = () => {
    console.log("Depositing money");
    dispatch(incrementAmount(100));
  };
  const withdrawMoney = () => {
    console.log("Withdrawing money");
    dispatch(decrementAmount(100));
  };
  const loginStatus = () => {
    console.log("loginStatus");
    dispatch(loginUser());
  };
  const [profileObject, setProfileObject] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        console.log("fetchProfileData called for user id : "+userId);
        const response = await axios.get(
          `http://localhost:8080/dashboard/profile/${userId}`
        );
        setProfileObject(response.data);
        console.log(response.data); // Log the response data directly here
        dispatch(updateName(response.data.column2+" "+response.data.column3));
        dispatch(updateEmail(response.data.column4));
        dispatch(updatePhoneNumber(response.data.column6));
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  useEffect(() => {
    console.log(profileObject);
    return () => {
      // Any cleanup logic here
    };
  }, [profileObject]);
  return (
    <div className="flex justify-center items-center h-screen-200">
      {/* <div className="p-4"> Adjust the padding here */}
      {profileObject ? (
        <Card variant="outlined" className="m-2">
          {" "}
          {/* Adjust the margin here */}
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {profileObject[0].column2} {profileObject[0].column3}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <Typography variant="body1">
                  User Id: {profileObject[0].column1}
                </Typography>
                <Typography variant="body1">
                  Mobile: {profileObject[0].column6}
                </Typography>
                <Typography variant="body1">
                  Email: {profileObject[0].column4}
                </Typography>
                <Typography variant="body1">Balance:{amount} </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  Address: {profileObject[0].column5}
                </Typography>
                <Typography variant="body1">User Level: Gold</Typography>
                {/* Add more sections as needed */}
              </Grid>
              <Grid item xs={12}>
                <div className="flex flex-wrap justify-center">
                  <button
                    className="bg-indigo-500 hover:bg-blue-700 text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={depositMoney}
                  >
                    Deposit Money
                  </button>
                  <button
                    className="bg-indigo-500 hover:bg-blue-700 text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={withdrawMoney}
                  >
                    Withdraw Money
                  </button>
                  <button
                    className="bg-indigo-500 hover:bg-blue-700 text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={loginStatus}
                  >
                    Set Login Status 1
                  </button>
                </div>
                {/* Add more sections as needed */}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : (
        <p>Loading profile data...</p>
      )}

      {/* </div> */}
    </div>
  );
};

export default Profile;
