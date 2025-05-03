import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-4 pt-24 pb-10">
        <div className="flex flex-col justify-center items-start">
          <span className="block w-20 h-[3px] bg-white"></span>
          <span className="block w-10 h-[7px] bg-white"></span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-wide uppercase text-white">
          {title}
        </h2>
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
