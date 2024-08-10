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

const UnsplashContent = () => {
  const [data, setPhotosResponse] = useState<any>(null);

  useEffect(() => {
    api.search
      .getPhotos({ query: "blog", orientation: "landscape", perPage: 12 })
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
      <div className="grid grid-cols-9 gap-4">
        {data.response.results.map((photo: Photo) => (
          <Photo key={photo.id} {...photo} />
        ))}
      </div>
    );
  }
};

const Photo = (photo: Photo) => {
  return (
    <div className="h-[125px] w-full relative col-span-3 rounded-lg overflow-hidden">
      <img
        src={photo.urls.small}
        alt="unsplash photo"
        className="w-full h-full"
      />
    </div>
  );
};
export default UnsplashContent;
