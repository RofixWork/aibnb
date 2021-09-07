import Image from "next/image";
import { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineGlobal,
  AiOutlineMenu,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { HiUsers } from "react-icons/hi";
import { useRouter } from "next/router";
const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoofGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <header>
      <div className="container header__content">
        <div className="header__content__logo" onClick={() => router.push("/")}>
          <Image
            src="https://www.mercurynews.com/wp-content/uploads/2017/03/airbnb_horizontal_lockup_web1.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="left"
            alt="Logo Image"
          />
        </div>

        <div className="header__content__input">
          <input
            type="text"
            placeholder={placeholder || "Start your Search..."}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
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

        {searchInput && (
          <div className="data__range__picker">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#fe5961"]}
              onChange={handleSelect}
              className="date-range"
            />

            <div className="people__info">
              <h3>number of guests</h3>
              <div className="people__info__number">
                <HiUsers className="icon__user" />
                <input
                  value={noOfGuests}
                  onChange={(e) => setNoofGuests(e.target.value)}
                  type="number"
                  min="1"
                />
              </div>
            </div>

            <div className="cta">
              <button type="button" onClick={() => setSearchInput("")}>
                Cancel
              </button>
              <button onClick={search} type="button">
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
