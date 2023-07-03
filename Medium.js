class app extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        // const name = " David Nangui";
        // const number = " 704-809-9023";
        // const DOB = " Jun 21, 2004";
        // const height = ' 5"10';
        // const weight = " 180";
      },
    };
  }
  render() {
    return <IndividualsInfo person={this.state.person} />;
  }
}

class IndividualsInfo extends React.component {
  render() {
    const { person } = this.props;

    return (
      <div>
        <p>Name:{name}</p>
        <p>Number:{number}</p>
        <p>Date of Birth: {DOB}</p>
        <p>
          Height: {height}, Weight: {weight}{" "}
        </p>
      </div>
    );
  }
}
export default app;
