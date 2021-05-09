import { Configuration } from "../../utils/models/Configuration";

export default interface FieldProps {
  configItem: Configuration;
  setResult: ({}) => void;
  results: {[key: string]: string};
  setErrors: ({}) => void;
  errors: {[key: string]: boolean};
}