import Overlay from "ol/Overlay";
import Map from "ol/Map";

enum OverlayPositioning {
  BOTTOM_LEFT = "bottom-left",
  BOTTOM_CENTER = "bottom-center",
  BOTTOM_RIGHT = "bottom-right",
  CENTER_LEFT = "center-left",
  CENTER_CENTER = "center-center",
  CENTER_RIGHT = "center-right",
  TOP_LEFT = "top-left",
  TOP_CENTER = "top-center",
  TOP_RIGHT = "top-right",
}

//生成overlayer弹框
export function popupInit(map: Map, container: HTMLElement): Overlay {
  const popup = new Overlay({
    element: container,
    autoPan: true,
    // positioning: OverlayPositioning.BOTTOM_CENTER,
    autoPanAnimation: {
      duration: 250,
    },
  });
  map.addOverlay(popup);
  return popup;
}

//弹框定位显示
export function popupShow(
  popup: Overlay,
  coordinate: number[] | undefined
): void {
  if (popup != null) {
    popup.setPosition(coordinate);
  }
}
//弹框隐藏
export function popupHide(popup: Overlay, closer: HTMLElement | null): void {
  if (popup != null) {
    if (closer != null) {
      closer.onclick = function() {
        popup.setPosition(undefined);
        // closer.blur();
        // return false;
      };
    } else {
      popup.setPosition(undefined);
    }
  }
}
