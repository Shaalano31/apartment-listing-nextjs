const ApartmentCard = ({
  title,
  description,
  img,
  price,
  size,
  address,
  onClick,
}) => {
  return (
    <div style={styles.card} onClick={onClick}>
      <img src={img} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <p>Size: {size} sq ft</p>
        <p>Address: {address}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    cursor: "pointer",
    transition: "box-shadow 0.3s ease-in-out",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: "12px",
    borderRadius: "4px",
  },
  content: {
    flex: 1,
  },
};

export default ApartmentCard;
