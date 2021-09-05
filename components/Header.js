import Image from "next/image";
import {
  AiOutlineSearch,
  AiOutlineGlobal,
  AiOutlineMenu,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
const Header = () => {
  return (
    <header>
      <div className="container header__content">
        <div className="header__content__logo">
          <Image
            src="https://www.mercurynews.com/wp-content/uploads/2017/03/airbnb_horizontal_lockup_web1.jpg"
            layout="fill"
            objectFit="cover"
            alt="Logo Image"
          />
        </div>

        <div className="header__content__input">
          <input type="text" placeholder="Start your Search..." />
          <div className="icon__search">
            <AiOutlineSearch />
          </div>
        </div>
        <div className="header__content__host">
          <h5>Become a host</h5>
          <AiOutlineGlobal className="icon__global" />
          <div className="header__content__host__icons">
            <AiOutlineMenu />
            <BiUserCircle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
