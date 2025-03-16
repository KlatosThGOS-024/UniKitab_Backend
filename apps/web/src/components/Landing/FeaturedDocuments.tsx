import React from "react";
const services = [
  {
    imgSrc:
      "https://s3.us-east-005.backblazeb2.com/sp-uploads/uploads/services/588776/20191203163751revised_simulations_thumbnail.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=005e3e68365fe460000000003%252F20250316%252Fus-east-005%252Fs3%252Faws4_request&X-Amz-Date=20250316T101948Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=03362cf21a3d9bd0af2fc150968fde00e95e1a24ecf0f9f8f95df23b5addcb4e",
    title: "Featured Document 1",
  },
  {
    imgSrc:
      "https://s3.us-east-005.backblazeb2.com/sp-uploads/uploads/services/588798/20200204195057all_soln_thumbnail.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=005e3e68365fe460000000003%252F20250316%252Fus-east-005%252Fs3%252Faws4_request&X-Amz-Date=20250316T101948Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=67e459345fe99306cc609066226c3c8a57593ead5434bcf993da37d57005aed8",
    title: "Featured Document 2",
  },
  {
    imgSrc:
      "https://s3.us-east-005.backblazeb2.com/sp-uploads/uploads/services/588809/20200317192434solution_target_swot_thumbnail.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=005e3e68365fe460000000003%252F20250316%252Fus-east-005%252Fs3%252Faws4_request&X-Amz-Date=20250316T101948Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=f87c16b2e59e98637cc3ea7d8431706dc62b2bb5282c76c6d1032242c0aa2f89",
    title: "Featured Document 3",
  },
  {
    imgSrc:
      "https://s3.us-east-005.backblazeb2.com/sp-uploads/uploads/services/588801/20200419112706answers_for_indonesia_thumbnail.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=005e3e68365fe460000000003%252F20250316%252Fus-east-005%252Fs3%252Faws4_request&X-Amz-Date=20250316T101948Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=c7d5e366c8a614b9fd69b17e63959190dc00599df4b9f41bacb9fddbf183979a",
    title: "Featured Document 4",
  },
];

export const FeaturedDocuments = () => {
  return (
    <section className="my-[96px]">
      <div
        className="w-[1200px] max-lg:w-[700px] bg-white
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
                  loading="lazy"
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
