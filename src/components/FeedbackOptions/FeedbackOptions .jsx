import PropTypes from 'prop-types';
import './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const stateArr = Object.keys(options);

  return (
    <div>
      {stateArr.map(options => (
        <button
          key={options}
          type="button"
          name={options}
          onClick={() => onLeaveFeedback(options)}
        >
          {options}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
