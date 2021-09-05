import Image from "next/image";
const MediumCard = ({ img, title }) => {
  return (
    <div className="mediumcard">
      <div className="mediumcard__img">
        <Image src={img} layout="fill" objectFit="cover" alt="picture" />
      </div>
      <h4>{title}</h4>
    </div>
  );
};

export default MediumCard;
