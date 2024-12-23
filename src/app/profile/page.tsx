"use client";
import axios from "axios";
import Image from "next/image";
import { FC, useState } from "react";

const ProfilePage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("uploadContext", "public-images");
    try {
      const response = await axios.post(
        "https://api.sepasangselamanya.tech/api/v1/public/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      setImageUrl(response.data.data);
      alert("success");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      alert("failed");
      setIsLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
      <div className="flex flex-col gap-5">
        <div className="font-bold text-2xl">Upload user picture</div>
        <div className="flex gap-5">
          <div>Select File</div>
          <input type="file" accept="image/*" onChange={handleUpload} />
        </div>
        {isLoading && <div>Loading...</div>}
        {imageUrl && (
          <Image src={imageUrl} width={200} height={200} alt="User Picture" />
        )}
      </div>
    </div>
  );
};
export default ProfilePage;
