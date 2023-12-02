"use client";

import React, { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage alt="minion" src={publicId} width={270} height={180} />
      )}
      <div>
        <CldUploadWidget
          uploadPreset="ftnqmgpz"
          onUpload={(results, widget) => {
            if (results.event !== "success") return;
            const info = results.info as CloudinaryResult;
            setPublicId(info.public_id);
          }}
          options={{
            sources: ["local"],
            multiple: false,
            styles: {},
            maxFiles: 1,
          }}
        >
          {({ open }) => (
            <button className="btn btn-primary" onClick={() => open()}>
              Upload
            </button>
          )}
        </CldUploadWidget>
      </div>
    </>
  );
};

export default UploadPage;
