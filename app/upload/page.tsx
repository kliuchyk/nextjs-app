"use client";
import { CldUploadWidget } from "next-cloudinary";

export default function UploadPage() {
  return (
    <>
      {/* {publicId && <CldImage alt="image" src={publicId} />} */}
      <CldUploadWidget
        uploadPreset="ml_default"
        onUploadAdded={(result) => {
          console.log("Upload result:", result);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
}
