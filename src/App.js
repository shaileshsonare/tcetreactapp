import Add from "./components/Add";
import Student from "./components/Student";
import Sub from "./components/Sub";
import UserListing from "./components/UserListing";

function App() {

  var student1 = {
    name: "Pranesh",
    age: 23,
    roll_no: 123,
    city: "Delhi"
  }
  //Create User component with props id name email avatar

  return (
    <div className="container">
      <Sub />
      
      <hr/>
      
      <UserListing />

      <h1>Hello World, Welcome to React App</h1>
      <Add x={5} y={6} />

      <Student data={student1}/>
      <Student data={{name: "Anshu", age: 25, roll_no: 145, city: "Mumbai"}}/>
    </div>
  );
}

export default App;
