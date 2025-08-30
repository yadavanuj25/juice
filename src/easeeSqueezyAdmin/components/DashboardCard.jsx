const DashboardCard = ({ title, value, ratio, img, color }) => {
  return (
    <div
      className={`flex items-center justify-between gap-2 p-5 rounded-lg shadow-md bg-white hover:shadow-lg transition  hover:scale-105`}
    >
      <div className="flex flex-col justify-between h-40 ">
        <div>
          <h2 className="text-md font-bold ">{title}</h2>
          <p className="text-2xl font-bold text-[#003b19]">{value}</p>
        </div>
        {ratio && <p className={`text-sm  text-${color}-600`}>{ratio}</p>}
      </div>
      {img && (
        <div
          className={`flex items-center justify-center h-100 w-100 rounded-full text-white`}
        >
          <img src={`/images/${img}`} alt="img" />
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
