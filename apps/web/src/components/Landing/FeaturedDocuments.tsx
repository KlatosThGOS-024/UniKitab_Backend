import React from "react";
const services = [
  {
    imgSrc:
      "https://s3.us-east-005.backblazeb2.com/sp-uploads/uploads/services/588776/20191203163751revised_simulations_thumbnail.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=005e3e68365fe460000000003%252F20250302%252Fus-east-005%252Fs3%252Faws4_request&X-Amz-Date=20250302T151230Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=a232c1dbd6e09e2d03a644825cbdd5a2d1ff1d925c5d26925ca7eebb6f65f942",
    title: "Featured Document 1",
  },
  {
    imgSrc:
      "https://s3.us-east-005.backblazeb2.com/sp-uploads/uploads/services/588776/20191203163751revised_simulations_thumbnail.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=005e3e68365fe460000000003%252F20250302%252Fus-east-005%252Fs3%252Faws4_request&X-Amz-Date=20250302T151230Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=a232c1dbd6e09e2d03a644825cbdd5a2d1ff1d925c5d26925ca7eebb6f65f942",
    title: "Featured Document 2",
  },
  {
    imgSrc:
      "https://s3.us-east-005.backblazeb2.com/sp-uploads/uploads/services/588776/20191203163751revised_simulations_thumbnail.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=005e3e68365fe460000000003%252F20250302%252Fus-east-005%252Fs3%252Faws4_request&X-Amz-Date=20250302T151230Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=a232c1dbd6e09e2d03a644825cbdd5a2d1ff1d925c5d26925ca7eebb6f65f942",
    title: "Featured Document 3",
  },
  {
    imgSrc:
      "https://s3.us-east-005.backblazeb2.com/sp-uploads/uploads/services/588776/20191203163751revised_simulations_thumbnail.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=005e3e68365fe460000000003%252F20250302%252Fus-east-005%252Fs3%252Faws4_request&X-Amz-Date=20250302T151230Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=a232c1dbd6e09e2d03a644825cbdd5a2d1ff1d925c5d26925ca7eebb6f65f942",
    title: "Featured Document 4",
  },
];

export const FeaturedDocuments = () => {
  return (
    <section className="my-[96px]">
      <div
        className="w-[1200px] max-lg:w-[700px] bg-black
       max-md:w-[500px] mx-auto z-30"
      >
        <div
          className="flex items-center max-md:grid 
         grid-cols-2 max-md:px-3  gap-[21px]"
        >
          {services.map((value, index) => {
            return (
              <div
                key={index}
                className=" cursor-pointer border-[1px]
                 shadow-lg flex-1 rounded-lg"
              >
                <img
                  src={value.imgSrc}
                  className="rounded-b-none w-full 
                  rounded-lg"
                />
                <div
                  className=" bg-white ml-3 
         text-[21px] font-[400] text-black"
                >
                  <span>{value.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
