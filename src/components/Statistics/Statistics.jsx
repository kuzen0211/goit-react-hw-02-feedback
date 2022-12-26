import PropTypes from 'prop-types';
import { Wraper, Feedback } from './Statistics.styled';

export const Statistics = ({
  neutral,
  good,
  bad,
  total,
  positivePercentage,
}) => {
  const isNaN = !total;
  if (isNaN) return;
  return (
    <Wraper>
      <Feedback>Good: {good}</Feedback>
      <Feedback>Neutral: {neutral}</Feedback>
      <Feedback>Bad: {bad}</Feedback>
      <Feedback>Total: {total}</Feedback>
      <Feedback>Positive feedback: {positivePercentage}%</Feedback>
    </Wraper>
  );
};

Statistics.propType = {
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
