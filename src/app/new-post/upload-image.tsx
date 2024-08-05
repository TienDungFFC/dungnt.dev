export default function UploadImage() {
  return (
    <div className="w-[750px] fixed bg-white left-0 top-0 border-cyan-700 border-2 translate-x-[175px] translate-y-[150px]">
      <div className="py-4 px-6">
        <div className="flex gap-4">
          <button className="p-3">Upload</button>
          <button>Unsplash</button>
        </div>
        <div className="p-4">
          <div className="border-dotted h-[250px] w-full"></div>
        </div>
      </div>
    </div>
  );
}
