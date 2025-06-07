export default function Profile(props) {
  const containerStyle = {
    border: "1px solid black",
    width: "600px",
    height: "150px",
    padding: "10px",
    borderRadius: "5px",
  };

  const imageContainerStyle = {
    display: "absolute",
    float: "left",
  };

  const imageStyle = {
    width: "150px",
    borderRadius: "50%",
    background: "#ccc",
  };

  const descriptionContainerStyle = {
    float: "left",
    width: "400px",
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: "20px 10px",
  };

  const titleStyle = {
    fontWeight: "bold",
  };

  const {
    first_name,
    last_name,
    avatar,
    email,
    phone_number,
    date_of_birth,
    employment,
  } = props;

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img style={imageStyle} src={avatar} />
      </div>
      <div style={descriptionContainerStyle}>
        <span style={titleStyle}>
          {first_name} {last_name}
        </span>
        <br />
        <a href={`mailto:${email}`}>{email}</a>
        <br />
        <span>{phone_number}</span>
        <br />
        <span>{date_of_birth}</span>
        <p>{employment.title}</p>
      </div>
    </div>
  );
}
