import { createWidget, widget, align, prop, text_style, event } from "@zos/ui";
import { HeartRate, Time } from "@zos/sensor";
import { getProfile, GENDER_MALE, GENDER_FEMALE } from "@zos/user";
import { Sleep } from "@zos/sensor";
import { push } from "@zos/router";

//getting the current heartRate
const heartRate = new HeartRate();
userHeartRate = heartRate.getLast();

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
        "Your stats: " +
        "\nTime: " +
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
        userHeartRate +
        "\n Sleep time (hours): " +
        userSleepTime / 60,
    });

    //inserting the user info into array
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
  },
});
