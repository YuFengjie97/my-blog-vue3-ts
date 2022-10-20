import "./index.scss";

// interface ListItem {
//   label: string;
//   color: string;
//   val: number;
// }

function dasharray(r, val) {
  const l = Math.PI * 2 * r; //周长
  const l2 = l * 0.75; //100%最大显示3/4
  return [l2 * val, l2 * (1 - val) + l * 0.25];
}

export default {
  props: {
    list: Array,
    rBase: {
      type: Number,
      default: 60,
    },
    strokeWidth: {
      type: Number,
      default: 6,
    },
    gap: {
      type: Number,
      default: 20,
    },
  },
  render() {
    const svgSize =
      (this.rBase + (this.gap + this.strokeWidth) * (this.list.length - 2)) * 2;
    const conSize = svgSize + 10;
    const center = svgSize / 2;
    //因为sort方法会修改掉原来的数组,但是props是单向数据流,所以需要一个拷贝
    const arrCopy = this.list.slice(0);
    const newList = arrCopy.sort((a, b) => a.val - b.val);

    return (
      <div
        className="circleMore"
        style={`width:${conSize}px;height:${conSize}px`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          style={`width:${svgSize}px;height:${svgSize}px`}
        >
          {newList.map((item, index) => {
            return (
              <g key={index}>
                <circle
                  cx={center}
                  cy={center}
                  r={this.rBase + this.gap * index}
                  fill="transparent"
                  stroke={item.color}
                  stroke-width={this.strokeWidth}
                  stroke-dasharray={dasharray(
                    this.rBase + this.gap * index,
                    item.val
                  )}
                  stroke-linecap="round"
                />
                <text
                  x={center - 10}
                  y={center - (this.rBase + this.gap * index) + 5}
                  text-anchor="end"
                  font-size="14"
                  fill={item.color}
                >
                  {item.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  },
};
