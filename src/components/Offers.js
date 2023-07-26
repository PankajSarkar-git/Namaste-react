const Offers = ({ offers }) => {
  return (
    <div className="container h-36 flex justify-around items-center py-5 px-5 border-b border-solid border-black ">
      {offers.map((offer, index) => {
        const { header, description } = offer.info;
        return (
          <div
            className="bg-slate-800 px-6 py-4 text-white rounded-lg"
            key={index}
          >
            <h3> {header}</h3>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Offers;
