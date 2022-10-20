import "./index.scss";

export default {
  props: {
    num: {
      type: Number,
      default: 0.85,
    },
    width: {
      type: Number,
      default: 300,
    },
  },
  render() {
    return (
      <div className="bar" style={`width:${this.width}px`}>
        <div className="progress" style={`width:${this.num * 100}%`}></div>
      </div>
    );
  },
};
