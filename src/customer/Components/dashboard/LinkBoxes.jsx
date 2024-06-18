import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LinkBoxes = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [image, setImage] = useState(null);
  const [company, setCompany] = useState(null);
  const [amountDisbursed, setAmountDisbursed] = useState(null);
  const [fileName, setFileName] = useState(null);
  const preset_key="sub4sale";
  const cloud_name="dwsveq5lz";
  const userId= useSelector((state)=> state.user.userId)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to handle click event on the link box. If submit is clicked.
  const handleScUpload = () => {
    const formData = new FormData();
    formData.append("file", image); // Assuming imageFile is the File object for the image
    formData.append("upload_preset", preset_key);
    formData.append("cloud_name", cloud_name); 

    formData.append("context", `company=${company}|userId=${userId}|amountDisbursed=${amountDisbursed}|fileName=${fileName}`);


    axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
    .then(res=> console.log(res))
    .catch(err=>console.error(err));
    alert('Submission Successful!');
    toggleExpansion();
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setFileName(e.target.files[0].name);
    setCompany(data.column4);
    setAmountDisbursed(5000);
  };
  const handleUrlClick = (e) => {
    e.preventDefault(); // Prevent the defa
    window.open(data.column2, '_blank'); // Open the URL in a new tab
  };

  return (
    <div className="bg-indigo-100 rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-sm font-semibold mb-4">{data.column4} Rating: 4.4</h2>
      <div className="space-y-2 ">
        <a
          className="block py-2 text-teal-500 px-4 border border-gray-200 rounded-md hover:bg-indigo-300"
          
          onClick={handleUrlClick}
        >
          {data.column2}
        </a>
        <div className="cursor-pointer flex justify-center h-2" onClick={toggleExpansion}>
          <ExpandMoreIcon /> {/* ExpandMore icon for expansion */}
        </div>
        {isExpanded && (
          <div className="bg-white p-4 rounded-md">
            {/* Include details here */}
            <p className="mr-4">{data.column3}</p>
            <div className="flex items-center">
              <input
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="formFileMultiple"
                multiple
                onChange={handleImageChange}
              />
              <button
                onClick={handleScUpload}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-[0.32rem] px-3 ml-2 border border-blue-500 hover:border-transparent rounded"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkBoxes;
