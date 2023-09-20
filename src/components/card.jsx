import PropTypes from 'prop-types';

const Card = ({
  description,
  position,
  company,
  name,
  image,
  phone,
  address,
  age,
  disable,
  text,
}) => {
  return (
    <div
      className=" border-2  border-slate-600 lg:ml-3 lg:mt-4
     md:mx-0 max-w-full min-w-min sm:w-auto p-4 w-full sm:max-w-[390px] flex  sm:flex-row items-center bg-white shadow-xl ring-1 lg:flex flex-row ring-slate-900/5 rounded gap-4 sm:gap-9"
    >
      <div className="bg-yellow-400 shadow text-center max-w-full  sm:w-[150px] sm:flex-shrink-0  ">
        <img
          className="hidden sm:block m-2 p-2 w-20 h-20 rounded-full"
          src={image}
          alt={name}
        />
        <p className="text-sm">{position}</p>
      </div>
      <div className=" h-[280px] text-sky-100 bg-black w-full  ring-slate-900/5 rounded mt-4 sm:mt-0 ">
        <div className="mt-2 sm:ml-4">
          <p className="text-sm text-gray-600">{text}</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-auto py-3 sm:py-9 text-center">
          <p className="text-sm">{description}</p>
          <p className="font-semibold hidden sm:block">{name}</p>
          <p className="text-sm">{company}</p>
          <p className="text-sm">{phone}</p>
          <p className="text-sm">{address}</p>
          <p className="text-sm">{age}</p>
          <p className="text-sm">{disable}</p>
          <img
            className=""
            src={image}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string,
  address: PropTypes.string,
  disable: PropTypes.boolean,
  phone: PropTypes.number,
  company: PropTypes.string,
  position: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
