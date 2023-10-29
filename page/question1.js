import { userInfo } from "page/index.js";
import { createWidget, widget, align, prop, text_style, event } from "@zos/ui";
import { HeartRate, Time } from "@zos/sensor";
import { getProfile, GENDER_MALE, GENDER_FEMALE } from "@zos/user";
import { Sleep } from "@zos/sensor";
import { push } from "@zos/router";
var delayInMilliseconds = 4000;
Page({
  build() {
    const text = createWidget(widget.TEXT, {
      //setting the text style and position
      x: 50,
      y: -50,
      w: 400,
      h: 400,
      color: 0xffffff,
      text_size: 48,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      //editing the text value
      text: "What brings\n you here?",
    });
    const text2 = createWidget(widget.TEXT, {
      //setting the text style and position
      x: 50,
      y: 100,
      w: 400,
      h: 400,
      color: 0xffffff,
      text_size: 26,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      //editing the text value
      text: '"I love coffee. But, I feel \nI am drinking too much"',
    });
    setTimeout(function () {
      push({
        url: "page/question2",
        params: "type=1",
      });
    }, delayInMilliseconds);
  },
});
