import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonList>
    {options.map(option => (
      <Button
        key={option}
        name={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option[0].toUpperCase() + option.slice(1)}
      </Button>
    ))}
  </ButtonList>
);

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
