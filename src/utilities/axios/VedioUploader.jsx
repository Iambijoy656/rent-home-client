
import axios from "axios";

const CLOUDINARY_PRESET = "vedios_preset";
const CLOUDINARY_CLOUDNAME = "dovpegn85";

const VedioUploader = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_PRESET);

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUDNAME}/video/upload`,
      formData
    );
    const publicId = response.data.public_id;
    const videoUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUDNAME}/video/upload/${publicId}`;
    return  videoUrl ;
  } catch (error) {
    console.error("Error uploading video:", error);
    throw error;
  }
};

export default VedioUploader