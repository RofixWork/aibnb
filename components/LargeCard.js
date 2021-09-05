const LargeCard = ({ img, title, desc, btnText }) => {
  return (
    <div
      className="largecard container-md"
      style={{ backgroundImage: `url(${img})` }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
      <button type="button">{btnText}</button>
    </div>
  );
};

export default LargeCard;
