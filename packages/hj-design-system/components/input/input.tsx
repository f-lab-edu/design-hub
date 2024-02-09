import InputInput from "./input-input";
import { InputPrefix } from "./input-prefix";
import InputRoot from "./input-root";
import { InputSuffix } from "./input-suffix";

const Input = Object.assign(InputInput, {
  Root: InputRoot,
  Prefix: InputPrefix,
  Suffix: InputSuffix,
});

export default Input;
