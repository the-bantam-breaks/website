import { EMAIL_REGEX } from '../../../shared/react/components/Atoms';

export const isValidEmail = (email) => EMAIL_REGEX.test(email);
