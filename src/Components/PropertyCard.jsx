const PropertyCard = ({ url, post_excerpt, post_title }) => {
    return (
      <div className="max-w-sm bg-white shadow-[17px_12px_25px_rgba(0,0,0,0.25)] flex flex-col">
        <img src={url} className="aspect-[391/292] object-cover" />
        <div className="m-6 max-md:m-4 mt-[33px] max-md:mt-[28px] flex flex-col flex-grow">
          <p className="font-normal text-sow-text-main max-md:text-base flex-grow">
            { post_excerpt }
          </p>
          
          <div className="mt-[58px] max-md:mt-[50px]">
              <p className='text-[22px] font-normal text-sow-text-main'> { post_title }</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PropertyCard;