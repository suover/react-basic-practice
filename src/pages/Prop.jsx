const Prop = (props) => {
  console.log(props);
  return (
    <div className="prop-page page">
      <h2>Prop.jsx</h2>
      <p>
        props값: {props.name}, {props.age}, {props.nation}
      </p>
    </div>
  );
};
export default Prop;
