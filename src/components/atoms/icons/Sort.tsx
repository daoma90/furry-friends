import { colors } from "@/src/theme";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
import { FaSort } from "react-icons/fa";
import { styled } from "styled-components";

export const SortIcon = () => {
  return (
    // <Container>
    //   <IconContainer>
    //     <IoCaretUpOutline size={17} color={colors.primaryText} />
    //   </IconContainer>
    //   <IoCaretDownOutline size={17} color={colors.primaryText} />
    // </Container>
    <FaSort size={20} color={colors.primaryText} />
  );
};

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const IconContainer = styled.div`
//   margin-bottom: -10px;
// `;
