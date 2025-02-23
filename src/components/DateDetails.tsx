const DateDetails = (props: {
 currentSeason: string;
 dayOfMonth: number;
 year: number;
}) => {
 const { currentSeason = "spring", dayOfMonth = 0, year = 0 } = props || {};

 return (
  <div className="relative text-center mt-4">
   <img src="/scroll.png" alt="Date on Scroll" className="mx-auto shadow-md" />
   <h2 className="absolute inset-0 flex items-center justify-center text-lg text-amber-900 drop-shadow-lg">
    {`Day ${dayOfMonth} of ${currentSeason
     ?.charAt(0)
     .toUpperCase()}${currentSeason?.slice(
     1,
     currentSeason?.length
    )}, Year ${year}`}
   </h2>
  </div>
 );
};

export default DateDetails;
