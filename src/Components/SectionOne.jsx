import PropertyCard from "./PropertyCard";
import storedRequest from "../../fetchedData.json";

const SectionOne = ( { fetchedData } ) => {
  return (
    <div className="flex flex-col items-center">
      <p className="font-['Martel Sans'] font-semibold text-[28px] max-md:text-xl text-sow-text-main leading-[100%] uppercase mb-[10px] text-left max-md:text-center">
        Communities <span className="max-md:block">We Manage</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[52px] mt-[60px] max-md:mt-[30px]">
        {storedRequest?.data.map((data) => (
          <PropertyCard
            key={data.ID}
            url={data.image_url}
            post_excerpt={data.post_excerpt}
            post_title={data.post_title}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
