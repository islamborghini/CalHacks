import { createWidget, widget, align, prop, text_style, event } from "@zos/ui";
import { HeartRate, Time } from "@zos/sensor";
import { getProfile, GENDER_MALE, GENDER_FEMALE } from "@zos/user";
import { Sleep } from "@zos/sensor";
//getting the current heartRate
const heartRate = new HeartRate();
lastValueHeartRate = heartRate.getLast();

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
