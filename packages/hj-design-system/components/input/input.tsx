import InputInput from "./input-input";
import { InputLeftAddon } from "./input-left-addon";
import { InputPrefix } from "./input-prefix";
import { InputRightAddon } from "./input-right-addon";
import InputRoot from "./input-root";
import { InputSuffix } from "./input-suffix";

const Input = Object.assign(InputInput, {
  Root: InputRoot,
  Prefix: InputPrefix,
  Suffix: InputSuffix,
  LeftAddon: InputLeftAddon,
  RightAddon: InputRightAddon,
});

export default Input;
