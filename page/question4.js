import { userInfo } from "page/index.js";
import { createWidget, widget, align, prop, text_style, event } from "@zos/ui";
import { HeartRate, Time } from "@zos/sensor";
import { getProfile, GENDER_MALE, GENDER_FEMALE } from "@zos/user";
import { Sleep } from "@zos/sensor";
import { push } from "@zos/router";
var delayInMilliseconds = 3000;
Page({
  build() {
    const text = createWidget(widget.TEXT, {
      //setting the text style and position
      x: 0,
      y: 0,
      w: 500,
      h: 500,
      color: 0xffffff,
      text_size: 48,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      //editing the text value
      text: "First, from   \n where do you\nget the caffeine?",
    });

    setTimeout(function () {
      push({
        url: "page/index",
        params: "type=1",
      });
    }, delayInMilliseconds);
  },
});
