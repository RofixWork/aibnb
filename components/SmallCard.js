import Image from "next/image";
const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="smallcard">
      <div className="smallcard__img">
        <Image src={img} layout="fill" objectFit="cover" alt="myPicture" />
      </div>
      <div className="smallcard__items">
        <h3>{location}</h3>
        <h5>{distance}</h5>
      </div>
    </div>
  );
};

export default SmallCard;
