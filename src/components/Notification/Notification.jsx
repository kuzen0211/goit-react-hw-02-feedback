import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <>
      <Message>{message}</Message>
    </>
  );
};

Notification.propType = {
  message: PropTypes.string.isRequireds,
};
