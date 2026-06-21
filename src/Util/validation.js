
import { isValidPhoneNumber } from "react-phone-number-input";

export const validateInquiry = ({
  name,
  phone,
  location,
  projectType,
  message,
}) => {
  if (!name?.trim()) {
    return "Please enter your name.";
  }

  if (name.trim().length < 3) {
    return "Name must be at least 3 characters long.";
  }

  if (!phone) {
    return "Please enter your phone number.";
  }

  if (!isValidPhoneNumber(phone)) {
    return "Please enter a valid phone number.";
  }

  if (!location?.trim()) {
    return "Please enter your project location.";
  }

  if (!projectType?.trim()) {
    return "Please select a project type.";
  }

  if (!message?.trim()) {
    return "Please provide project details.";
  }

  if (message.trim().length < 20) {
    return "Project details should be at least 20 characters long.";
  }

  return null;
};