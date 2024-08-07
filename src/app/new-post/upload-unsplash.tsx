import React, { Fragment, useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import Image from "next/image";
type Photo = {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};
const api = createApi({
  accessKey: "jFGVW3CW4epFDvweFnor9mTKW6xTFRnViW-hedqLtpE",
});

const UploadUnsplash = () => {
  const [data, setPhotosResponse] = useState<any>(null);

  useEffect(() => {
    api.search
      .getPhotos({ query: "cat", orientation: "landscape" })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <div className="feed">
        <ul className="columnUl">
          {data.response.results.map((photo: Photo) => (
            <li key={photo.id} className="li">
              <img src={photo.urls.regular} alt="test" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default UploadUnsplash;
