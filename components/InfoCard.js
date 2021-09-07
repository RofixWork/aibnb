import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
const InfoCard = ({
  img,
  title,
  description,
  location,
  star,
  price,
  total,
}) => {
  return (
    <div className="infocard__box">
      <div className="infocard__box__img">
        <Image src={img} alt="image room" layout="fill" objectFit="cover" />
      </div>

      <div className="infocard__box__info">
        <div className="infocard__box__info__box1">
          <p>{location}</p>
          <h3>{title}</h3>
          <h5>{description}</h5>
        </div>
        <div className="infocard__box__info__box2">
          <div className="star">
            <AiFillStar className="icon__star" />
            <h5>{star}</h5>
          </div>
          <div className="price">
            <h3>{price}</h3>
            <h4>{total}</h4>
          </div>
        </div>
      </div>
      <div className="icon__heart">
        <FaRegHeart />
      </div>
    </div>
  );
};

export default InfoCard;
