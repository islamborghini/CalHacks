import { createWidget, widget, align, prop, text_style, event } from "@zos/ui";
import { HeartRate, Time } from "@zos/sensor";
import { getProfile, GENDER_MALE, GENDER_FEMALE } from "@zos/user";
import { Sleep } from "@zos/sensor";
//getting the current heartRate
const heartRate = new HeartRate();
userHeartRate = heartRate.getLast();

/*
function measureHeartRateFor10Seconds() {
  let startTime = Date.now();

  // Start continuous heart rate measurement
  heartRate.onCurrentChange(() => {
    // Callback function to handle heart rate measurement changes
    let currentTime = Date.now();
    let elapsedTime = (currentTime - startTime) / 1000; // Convert to seconds

    // Get current heart rate measurement value
    let currentHeartRate = heartRate.getCurrent();

    // Display the heart rate measurement value and time elapsed
    console.log(
      `Time: ${elapsedTime.toFixed(
        2
      )} seconds - Heart Rate: ${currentHeartRate}`
    );

    // Check if 10 seconds have passed, then stop the measurement
    if (elapsedTime >= 10) {
      stopHeartRateMeasurement();
    }
  });

  // Function to stop continuous heart rate measurement after 10 seconds
  function stopHeartRateMeasurement() {
    // Cancel continuous heart rate measurement and listeners
    heartRate.offCurrentChange();

    // Additional logic after stopping measurement can be added here
    console.log("Heart rate measurement stopped after 10 seconds.");
  }
  return HeartRate.getLast();
}
ht = measureHeartRateFor10Seconds(); */
// Call the function to start measuring heart rate for 10 seconds

//getting the current time
const time = new Time();
var currentTime =
  time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

//getting the profile data::
//getting the age, gender::
const { age, gender, weight, height } = getProfile();

//get the age:
userAge = age;

// get the gender:
if (gender === GENDER_MALE) {
  userGender = "male";
} else if (gender === GENDER_FEMALE) {
  userGender = "female";
} else {
  userGender = "unspecified";
}

//getting info of height and weight
userHeight = Number(height.toFixed(2));
userWeight = Number(weight.toFixed(1));

//getting  info on sleep
const sleep = new Sleep();
const { totalTime } = sleep.getInfo();
userSleepTime = totalTime;

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

      //editing the text value
      text:
        "Time: " +
        currentTime +
        "\n Age: " +
        userAge +
        "\n Gender: " +
        userGender +
        "\n Height (m): " +
        userHeight +
        "\n Weight (kg): " +
        userWeight +
        "\n Heart rate (bpm): " +
        lastValueHeartRate +
        "\n Sleep time (hours): " +
        userSleepTime / 60,
    });

    /*  const pickDate = createWidget(widget.PICK_DATE, {
      initHour: time.getHours(),
      initMinute: time.getMinutes(),
      w: 100,
      x: 20,
      y: 120,
    });
*/

    //creating the drink picker
    /*picker_widget = createWidget(widget.WIDGET_PICKER, {
      title: "Start Date",
      subtitle: "",
      nb_of_columns: 1,
      single_wide: true,
      init_col_index: 1,
      data_config: [
        {
          data_array: drinks,
          init_val_index: 0,
          unit: "Select a drink",
          font_size: 12,
          color: 0xffffff,
          select_font_size: 20,
          connector_font_size: 32,
          unit_font_size: 32,
          col_width: 200,
        },
      ],
      picker_cb,
    });

    //function to get the index of the picker
    function picker_cb(picker, event_type, column_index, select_index) {
      console.log(
        "timePickerCb: " + event_type,
        "column_index: " + column_index,
        "select_index: " + select_index
      );
    }
*/
    //scroll options
    const dataList = [
      { name: "Coffee", size: 50, del_img: "btn/delete.png" },
      { name: "Coke", size: 100, del_img: "btn/delete.png" },
      { name: "Energy drink", size: 200, del_img: "btn/delete.png" },
      { name: "Tea", size: 30, del_img: "btn/delete.png" },
    ];

    userInfo = [
      currentTime,
      userAge,
      userGender,
      userHeight,
      userWeight,
      userHeartRate,
      userSleepTime,
      index,
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
        console.log(`scrollListItemClick index=${index}`);
        for (let i = 0; i < 4; ++i) {
          scrollList.setProperty(prop.VISIBLE, false);
          dataList.splice(i, 4);
          updateConfig();
        }
        //editing the user info output array
        userInfo[7] = index;
        console.log("gg22:", userInfo);
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

    //function to change the position of the text when there is a click on the screen
    /*text.addEventListener(event.CLICK_DOWN, (info) => {
      text.setProperty(prop.MORE, {
        y: 200,
        text: ht,
      });*
    });*/

    /*
    const textWithFont = createWidget(widget.TEXT, {
      x: 96,
      y: 300,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      font: "fonts/custom.ttf",
      text_i18n: {},
      
    });*/
  },
});
