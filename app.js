App({
  globalData: {},
  onCreate(options) {
    console.log("app on create invoke");
    const sensorPermission = heartRate.requestPermission();
  },

  onDestroy(options) {
    console.log("app on destroy invoke");
  },
});
