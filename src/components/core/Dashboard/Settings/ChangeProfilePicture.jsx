// Import necessary libraries
import { useEffect, useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import { updateDisplayPicture } from "../../../../services/operations/SettingsAPI";
import IconBtn from "../../../common/IconBtn";

// Define the component
export default function ChangeProfilePicture() {
  // Get necessary data from Redux store
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  // Define component state
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(null);

  // Reference to file input element
  const fileInputRef = useRef(null);

  // Handle click event on select button
  const handleClick = () => {
    fileInputRef.current.click();
  };

  // Handle file change event
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      previewFile(file);
    }
  };

  // Preview selected file
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  // Handle file upload
  const handleFileUpload = () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("displayPicture", imageFile);
      dispatch(updateDisplayPicture(token, formData)).then(() => {
        setLoading(false);
        // Reset imageFile and previewSource after successful upload
        setImageFile(null);
        setPreviewSource(null);
      });
    } catch (error) {
      console.error("Error uploading file:", error.message);
      setLoading(false);
    }
  };

  // Effect to update preview when imageFile changes
  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile);
    }
  }, [imageFile]);

  // Render the component
  return (
    <>
      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 text-richblack-5">
        <div className="flex items-center gap-x-4">
          <img
            src={previewSource || user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-2">
            <p>Change Profile Picture</p>
            <div className="flex flex-row gap-3">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/png, image/gif, image/jpeg, image/jpg"
              />
              <button
                onClick={handleClick}
                disabled={loading}
                className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
              >
                Select
              </button>
              <IconBtn
                text={loading ? "Uploading..." : "Upload"}
                onClick={handleFileUpload}
                disabled={!imageFile || loading}
              >
                {!loading && (
                  <FiUpload className="text-lg text-richblack-900" />
                )}
              </IconBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
