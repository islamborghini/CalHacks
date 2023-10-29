import { createWidget, widget, align, prop, text_style, event } from "@zos/ui";
import { HeartRate, Time } from "@zos/sensor";
import { getProfile, GENDER_MALE, GENDER_FEMALE } from "@zos/user";
import { Sleep } from "@zos/sensor";
import { push } from "@zos/router";
delayInMilliseconds = 7000;
//getting the current time
const time = new Time();
var currentTime =
  time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

drinks = ["coffee", "tea", "energetic", "coke"];
//initializing the app screen
Page({
  build() {
    const text = createWidget(widget.TEXT, {
      //setting the text style and position
      x: 50,
      y: 10,
      w: 400,
      h: 400,
      color: 0xffffff,
      text_size: 26,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
    });
    const dataList = [
      { name: "Coffee", size: 50, del_img: "btn/delete.png" },
      { name: "Coke", size: 100, del_img: "btn/delete.png" },
      { name: "Energy drink", size: 200, del_img: "btn/delete.png" },
      { name: "Tea", size: 30, del_img: "btn/delete.png" },
    ];

    console.log("gg:", userInfo);

    //creating a scroll list
    const scrollList = createWidget(widget.SCROLL_LIST, {
      x: 0,
      y: 120,
      h: 300,
      w: 480,
      item_space: 20,
      snap_to_center: true,
      item_enable_horizon_drag: true,
      item_drag_max_distance: -120,
      item_config: [
        {
          type_id: 1,
          item_bg_color: 0xef5350,
          item_bg_radius: 10,
          text_view: [
            {
              x: 0,
              y: 0,
              w: 480,
              h: 80,
              key: "name",
              color: 0xffffff,
              text_size: 20,
            },
            { x: 0, y: 80, w: 480, h: 40, key: "size", color: 0xffffff },
          ],
          text_view_count: 2,
          image_view: [
            { x: 492, y: 28, w: 64, h: 64, key: "del_img", action: true },
          ],
          image_view_count: 1,
          item_height: 120,
        },
        {
          type_id: 2,
          item_bg_color: 0xef5350,
          item_bg_radius: 10,
          text_view: [
            {
              x: 0,
              y: 0,
              w: 480,
              h: 80,
              key: "name",
              color: 0x000000,
              text_size: 20,
            },
            { x: 0, y: 80, w: 480, h: 40, key: "size", color: 0x000000 },
          ],
          text_view_count: 2,
          image_view: [
            { x: 492, y: 28, w: 64, h: 64, key: "del_img", action: true },
          ],
          image_view_count: 1,
          item_height: 120,
        },
      ],
      item_config_count: 2,
      data_array: dataList,
      data_count: dataList.length,
      item_focus_change_func: (list, index, focus) => {
        console.log("scrollListFocusChange index=" + index);
        console.log("scrollListFocusChange focus=" + focus);
      },

      //if any item in scrolList is clicked function
      item_click_func: (item, index, data_key) => {
        push({
          url: "page/stats",
          params: "type=1",
        });
        /*for (let i = 0; i < 4; ++i) {
          scrollList.setProperty(prop.VISIBLE, false);
          dataList.splice(i, 4);
          updateConfig();
        }

        //editing the user info output array
        userInfo[7] = index;
        console.log("gg22:", userInfo);*/
      },
      data_type_config: [
        {
          start: 0,
          end: 1,
          type_id: 1,
        },
        {
          start: 1,
          end: 2,
          type_id: 2,
        },
      ],
      data_type_config_count: 2,
      snap_to_center: true,
      item_enable_horizon_drag: true,
    });

    function updateConfig() {
      scrollList.setProperty(prop.UPDATE_DATA, {
        data_type_config: [
          {
            start: 0,
            end: dataList.length - 1,
            type_id: 1,
          },
        ],
        data_type_config_count: 1,
        data_array: dataList,
        data_count: dataList.length,
        on_page: 1,
      });
    }
    setTimeout(function () {
      push({
        url: "page/stats",
        params: "type=1",
      });
    }, delayInMilliseconds);
  },
});
