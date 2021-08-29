import styled from "styled-components";
import Text from "../Text/Text";
import { tags, sizes, HeadingProps } from "./types";

const style = {
  [sizes.MD]: {
    fontSize: "20px",
  },
  [sizes.LG]: {
    fontSize: "24px",
  },
  [sizes.XL]: {
    fontSize: "40px",
  },
  [sizes.XXL]: {
    fontSize: "64px",
  },
};

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  ${({ size }) => style[size || sizes.MD]}
  font-weight:600;
  line-height: 1.1;
  text-shadow: 0 0 10px #fff, 0 0 3px #fff0, 0 0 10px #e600731f, 0 0 20px #e600731f, 0 0 30px #e600731f,
    0 0 40px #e600731f, 0 0 50px #e600731f;
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
