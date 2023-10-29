import { userInfo } from "page/index.js";
import { createWidget, widget, align, prop, text_style, event } from "@zos/ui";
import { HeartRate, Time } from "@zos/sensor";
import { getProfile, GENDER_MALE, GENDER_FEMALE } from "@zos/user";
import { Sleep } from "@zos/sensor";
import { push } from "@zos/router";
var delayInMilliseconds = 3000;
Page({
  build() {
    const img = createWidget(widget.IMG, {
      x: 125,
      y: 125,
      src: "../img/drinks.png",
    });
    img.addEventListener(event.CLICK_DOWN, (info) => {
      img.setProperty(prop.MORE, {
        y: 200,
      });
    });
  },
});
