import { v4 as uuidv4 } from 'uuid';

const generateUUID = () => {
  const uuid = uuidv4(); // Gera um UUID v4
  return uuid;
};

export default generateUUID; 