import PropTypes from 'prop-types';

export const DashboardItem = ({ title, number, Icon }) => {
  return (
    <div className="dashboard-item relative text-white">
      <div className="mb-[20px] rounded-lg bg-sky-600">
        <div className="p-[10px]">
          <p className="m-0 mb-2 text-4xl font-bold">{number}</p>
          <p>{title}</p>
        </div>
        <div className="icon-dashboard text-opaque">
          <Icon size={75} className="top-0 min-w-max" />
        </div>
        <div className="rounded-lg bg-sky-700 p-1 text-center text-white">
          <a href="#" className="text-white">
            More info
          </a>
        </div>
      </div>
    </div>
  );
};

DashboardItem.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  Icon: PropTypes.func.isRequired,
};
