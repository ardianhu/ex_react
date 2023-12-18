// JSX is JavaScript Syntax Extension or JavaScript XML. its kinda the same thing like html
// and the purpose is to build react component in a more readable way.

// how to write jsx? there's many way

// class component
class Button extends React.Component {
  render() {
    return <button>OK</button>
  }
}

// in a variable
const CancelButton = <button>Cancel</button>

// function component
function SignInButton() {
  return <button>Sign In</button>
}

// arrow function component
const RegisterButton = (_) => <button>Register</button>

// if jsx have many element its better to use () to wrap it and add wrapper element like this

function Header() {
  return (
    <Header>
      <h1>Header</h1>
      <h2>Sub Header</h2>
    </Header>
  )
}

// and this is the wrong way to do it

// no wrapper element
function Header() {
  // return (
    // <h1>Header</h1>
    // <h2>Sub Header</h2>
  // )
}

// no () to wrap it
function Header() {
  return 
  <Header>
    <h1>Header</h1>
    <h2>Sub Header</h2>
  </Header>
}

// to write an attribute in jsx is just like html,
// but in some specific attribute like class etc, have to follow jsx rules
// like class in jsx is className, becaues class already used in js
const button = <button className="btn btn-primary">OK</button>

// and another attribute that have their own rule is event attributes, like onClick etc.
// in jsx event attributes is camelCase, and the value is a function
const buttonEvent = <button onClick={handleClick}>OK</button>

// js expression is written in {} in jsx like this ex

// membuat komponen
function MyComponent() {
  const imgPlaceholder = "https://via.placeholder.com/150";
  return (
    <div>
      <button>{ 1 + 2 }</button><br/>
      <button>{ Date.now() }</button><br/>
      <img src={ imgPlaceholder } />
    </div>
  );
}

// menggunakan komponen di App
function App() {
  return <div className="App">
    <MyComponent />
  </div>;
}
// and we can also put a variable in {} to show the value

// lets try about the jsx in coba app

// CONDITIONAL RENDERING
// ex: if isLoading is true, show loading, if not show data
// just like if else basics

// 1. conditional rendering outside jsx
function Greeting(props) {
  const iLoggedInd = props.isLoggedInd;
  if (isLoggedInd) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// 2. inline if
function MailBox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}
    </div>
  )
}
// code above actually like this
// if(unreadMessages.length > 0) {
//   return <h2>You have {unreadMessages.length} unread messages.</h2>
// }

// 3. inline if else
//  condition ? true : false
// ex:
const isLoggedIn = this.StaticRange.isLoggedIn
return (
  <div>
    The User is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
  </div>
)

// lets try conditional rendering in coba app