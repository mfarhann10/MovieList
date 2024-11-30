const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

function StarRating({ maxRating = 5 }) {
  return (
    <div style={containerStyle}>
      <div style={starContainerStle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span key={i}>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}

export default StarRating;
