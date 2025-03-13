import SliderComponent from "./SliderComponent";

const SectionTwo = ( {fetchedData}) => {
    return (
      <div className="w-full flex flex-col items-center text-center mt-[350px] max-md:mt-[195px] mb-[342px]">
        <p className="font-['Martel Sans'] font-semibold text-[28px] max-md:text-xl text-sow-text-main leading-[100%] uppercase">
        Our Services
        </p>
        <div className=" mt-[70px] flex justify-center w-full">
            <SliderComponent  fetchedData={ fetchedData }/>
        </div>
      </div>
    );
  };
  
  export default SectionTwo;
  