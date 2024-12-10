/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;

  if (!student) {
    return <p>Loading student information...</p>;
  }

  const { firstname, lastname, email, imageUrl, gpa, campus } = student;


  // Render a single Student view 
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h1>{`${firstname} ${lastname}`}</h1>
      <img 
        src={imageUrl} 
        alt={`${firstname} ${lastname}`} 
        style={{ width: "150px", height: "150px", borderRadius: "50%" }} 
      />
      <p><strong>Email:</strong> {email}</p>
      <p><strong>GPA:</strong> {gpa ? gpa : "N/A"}</p>
      <p>
        <strong>Campus:</strong>{" "}
        {campus ? campus.name : "This student is not enrolled in any campus."}
      </p>
    </div>
  );
};

export default StudentView;