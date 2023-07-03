class app extends React.Component {
  render() {
    const name = " David Nangui";
    const number = " 704-809-9023";
    const DOB = " Jun 21, 2004";
    const height = ' 5"10';
    const weight = " 180";
    return (
      <div>
        <h1>Individual's information</h1>
        <p>Name:{name}</p>
        <p>Number:{number}</p>
        <p>Date of Birth: {DOB}</p>
        <p>
          Height: {height}, Weight: {weight}
        </p>
      </div>
    );
  }
}
export default app;
