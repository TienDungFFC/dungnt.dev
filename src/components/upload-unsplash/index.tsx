import ImageContent from "./image-content";
import Search from "./search";

const UploadUnsplash = () => {
  return (
    <div className="flex flex-col gap-4 h-[360px] overflow-scroll	p-4">
      <Search />
      <ImageContent />
    </div>
  );
};

export default UploadUnsplash;
