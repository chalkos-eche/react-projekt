import React from "react";
import { HiHome } from "react-icons/hi";
import {
  BsFillBagCheckFill,
  BsCamera,
  BsBellFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";
import { styled } from "styled-components";

const FooterLayout = styled.div`
  width: 100%;
`;
const MobileFooter = () => {
  return (
    <>
      <div>
        <button>
          <HiHome />
          Home
        </button>
        <button>
          <BsFillBagCheckFill />
          Orders
        </button>
        <button>
          <BsCamera />
        </button>
        <button>
          <BsBellFill />
          Info
        </button>
        <button>
          <BsFillEmojiSmileFill />
          Profile
        </button>
        MobileFooter
      </div>
    </>
  );
};

export default MobileFooter;
