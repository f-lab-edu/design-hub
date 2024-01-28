import React from "react";

import Button from "./Button";
import { type ButtonProps } from "./types";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export const Basic = (props: ButtonProps) => <Button {...props} />;
Basic.argTypes = {
  children: { type: "string" },
};
Basic.args = {
  children: "Button",
};

export const Variants = (props: ButtonProps) => (
  <>
    <Button {...props} variant="outline" colorScheme="red">
      outline
    </Button>
    <Button {...props} variant="solid" colorScheme="red">
      solid
    </Button>
  </>
);
Variants.argTypes = {
  children: { type: "string" },
};
Variants.args = {
  children: "Button",
};

export const Sizes = (props: ButtonProps) => (
  <>
    <Button {...props} size="xs">
      xs button
    </Button>
    <Button {...props} size="sm">
      sm button
    </Button>
    <Button {...props} size="md">
      md button
    </Button>
    <Button {...props} size="lg">
      lg button
    </Button>
  </>
);

export const ColorSchemes = (props: ButtonProps) => (
  <>
    <Button {...props} colorScheme="red">
      red
    </Button>
    <Button {...props} colorScheme="orange">
      orange
    </Button>
    <Button {...props} colorScheme="yellow">
      yellow
    </Button>
    <Button {...props} colorScheme="green">
      green
    </Button>
    <Button {...props} colorScheme="blue">
      blue
    </Button>
    <Button {...props} colorScheme="purple">
      purple
    </Button>
    <Button {...props} colorScheme="pink">
      pink
    </Button>

    <Button {...props} colorScheme="teal">
      teal
    </Button>
    <Button {...props} colorScheme="gray">
      gray
    </Button>
  </>
);

export const Disabled = (props: ButtonProps) => (
  <>
    <Button {...props} disabled>
      disabled
    </Button>
    <Button {...props} disabled variant="outline">
      disabled
    </Button>
  </>
);

export const Width = (props: ButtonProps) => (
  <>
    <Button {...props} width="full">
      full
    </Button>
    <Button {...props}>auto</Button>
  </>
);

export const WithIcon = (props: ButtonProps) => (
  <>
    <Button {...props} leftIcon={<div>🐶</div>}>
      Left Icon
    </Button>
    <Button {...props} rightIcon={<div>🐶</div>}>
      Right Icon
    </Button>
    <Button {...props} leftIcon={<div>🐶</div>} rightIcon={<div>😾</div>}>
      Left Icon and Right Icon
    </Button>
  </>
);
