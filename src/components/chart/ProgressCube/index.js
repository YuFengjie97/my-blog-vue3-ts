import "./index.scss";

export default {
  props: {
    color: {
      type: String,
      default: "#ec008c",
    },
    num: {
      type: Number,
      default: 0.85,
    },
  },
  render() {
    const styleVar = `--color:${this.color};--width:${this.num * 100}%`;
    return (
      <div className="progressCube" style={styleVar}>
        <div className="left item"></div>
        <div className="right item"></div>
        <div className="front item">
          <div className="progress"></div>
        </div>
        <div className="behind item">
          <div className="progress"></div>
        </div>
        <div className="up item">
          <div className="progress"></div>
        </div>
        <div className="down item">
          <div className="progress"></div>
        </div>
      </div>
    );
  },
};
