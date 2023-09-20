import Card from "react-bootstrap/Card";
import styled from 'styled-components';

const cardStyle = {
  background: "#343a40",
};

const textStyles = {
  color: "white",
};

const StyledCard = styled(Card)`
  width: 45%;
  background: "#343a40";
  @media (max-width: 768px) {
    width: 100%; /* Change the width to 85% for screens with a max width of 768px (e.g., mobile screens) */
  }
`;

function ProjectCard(props) {
  const { image, title, text, tags } = props;

  // Determine the tag text and color
  const tagText = tags.includes("In Progress") ? "In Progress" : "Done";
  const tagColor = tags.includes("In Progress") ? "green" : "red";

  return (
    <StyledCard style={{ ...cardStyle }}>
      <Card.Img variant="top" src={image}/>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Card.Body style={{ flex: 1 }}>
          <Card.Title style={textStyles}>{title}</Card.Title>
          <Card.Text style={textStyles}>{text}</Card.Text>
        </Card.Body>
        <div
          style={{
            marginTop: "auto",
            marginBottom: "2%",
            marginLeft: "2%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              style={{
                backgroundColor: tagColor,
                color: "white",
                border: "none",
                padding: "1% 2%",
                borderRadius: "1%",
                cursor: "default",
              }}
            >
              {tagText}
            </button>
          </div>
        </div>
      </div>
    </StyledCard>
  );
}

export default ProjectCard;
