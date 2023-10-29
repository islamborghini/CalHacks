// import * as hmUI from '@zos/ui'
// import { getText } from '@zos/i18n'
// import { getDeviceInfo, SCREEN_SHAPE_SQUARE } from '@zos/device'
// import { log as Logger } from '@zos/utils'

// import { BasePage } from '@zeppos/zml/base-page'
// import {
//   TITLE_TEXT_STYLE,
//   TIPS_TEXT_STYLE,
//   SCROLL_LIST,
//   ADD_BUTTON
// } from 'zosLoader:./index.page.[pf].layout.js'
// import { readFileSync, writeFileSync } from './../../utils/fs'
// import { getScrollListDataConfig } from './../../utils/index'

// const logger = Logger.getLogger('todo-list-page')

// Page(
//   BasePage({
//     state: {
//       scrollList: null,
//       tipText: null,
//       refreshText: null,
//       addButton: null,
//       dataList: readFileSync()
//     },
//     onInit() {
//       logger.debug('page onInit invoked')
//       this.getTodoList()
//     },
//     build() {
//       logger.debug('page build invoked')

//       if (getDeviceInfo().screenShape !== SCREEN_SHAPE_SQUARE) {
//         this.state.title = hmUI.createWidget(hmUI.widget.TEXT, {
//           ...TITLE_TEXT_STYLE
//         })
//       }

//       this.state.addButton = hmUI.createWidget(hmUI.widget.BUTTON, {
//         ...ADD_BUTTON,
//         click_func: () => {
//           this.addRandomTodoItem()
//         }
//       })

//       this.createAndUpdateList(false)
//     },
//     onDestroy() {
//       logger.debug('page onDestroy invoked')
//       writeFileSync(this.state.dataList, false)
//     },
//     onCall(req) {
//       const dataList = req.result.map((i) => ({ name: i, img_src: 'delete.png' }))
//       logger.log('call dataList', dataList)
//       this.refreshAndUpdate(dataList)
//     },
//     getTodoList() {
//       this.request({
//         method: 'GET_TODO_LIST'
//       })
//         .then(({ result }) => {
//           this.state.dataList = result.map((d) => ({ name: d, img_src: 'delete.png' }))
//           this.createAndUpdateList()
//         })
//         .catch((res) => {
//           this.createAndUpdateList()
//         })
//     },
//     addRandomTodoItem() {
//       this.request({
//         method: 'ADD'
//       })
//         .then(({ result }) => {
//           this.state.dataList = result.map((d) => ({ name: d, img_src: 'delete.png' }))
//           this.createAndUpdateList()
//           hmUI.showToast({
//             text: getText('addSuccess')
//           })
//         })
//         .catch((res) => {
//           hmUI.showToast({
//             text: getText('addFailure')
//           })
//         })
//     },
//     deleteTodoItem(index) {
//       this.request({
//         method: 'DELETE',
//         params: { index }
//       })
//         .then(({ result }) => {
//           this.state.scrollList.setProperty(hmUI.prop.DELETE_ITEM, { index: index })
//           this.state.dataList.splice(index, 1)
//           hmUI.showToast({
//             text: getText('deleteSuccess')
//           })
//         })
//         .catch((res) => {
//           hmUI.showToast({
//             text: getText('deleteFailure')
//           })
//         })
//     },
//     changeUI(showEmpty) {
//       const { dataList } = this.state

//       if (showEmpty) {
//         if (dataList.length === 0) {
//           !this.state.tipText &&
//             (this.state.tipText = hmUI.createWidget(hmUI.widget.TEXT, {
//               ...TIPS_TEXT_STYLE
//             }))
//         }
//         const isTip = dataList.length === 0

//         this.state.refreshText && this.state.refreshText.setProperty(hmUI.prop.VISIBLE, false)
//         this.state.tipText && this.state.tipText.setProperty(hmUI.prop.VISIBLE, isTip)
//         this.state.scrollList && this.state.scrollList.setProperty(hmUI.prop.VISIBLE, !isTip)
//       } else {
//         // 占位刷新
//         !this.state.refreshText &&
//           (this.state.refreshText = hmUI.createWidget(hmUI.widget.TEXT, {
//             ...TIPS_TEXT_STYLE,
//             text: ' '
//           }))

//         this.state.tipText && this.state.tipText.setProperty(hmUI.prop.VISIBLE, false)
//         this.state.refreshText.setProperty(hmUI.prop.VISIBLE, true)
//         this.state.scrollList && this.state.scrollList.setProperty(hmUI.prop.VISIBLE, false)
//       }
//     },
//     createAndUpdateList(showEmpty = true) {
//       const _scrollListItemClick = (list, index, key) => {
//         if (key === 'img_src') {
//           this.deleteTodoItem(index)
//         }
//       }
//       const { scrollList, dataList } = this.state
//       this.changeUI(showEmpty)
//       const dataTypeConfig = getScrollListDataConfig(
//         dataList.length === 0 ? -1 : 0,
//         dataList.length
//       )
//       if (scrollList) {
//         scrollList.setProperty(hmUI.prop.UPDATE_DATA, {
//           data_array: dataList,
//           data_count: dataList.length,
//           data_type_config: [{ start: 0, end: dataList.length, type_id: 2 }],
//           data_type_config_count: dataTypeConfig.length,
//           on_page: 1
//         })
//       } else {
//         this.state.scrollList = hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
//           ...(SCROLL_LIST || {}),
//           data_array: dataList,
//           data_count: dataList.length,
//           data_type_config: dataTypeConfig,
//           data_type_config_count: dataTypeConfig.length,
//           item_enable_horizon_drag: true,
//           item_drag_max_distance: -120,
//           on_page: 1,
//           item_click_func: _scrollListItemClick
//         })
//       }
//     },
//     refreshAndUpdate(dataList = []) {
//       this.state.dataList = []
//       this.createAndUpdateList(false)

//       setTimeout(() => {
//         this.state.dataList = dataList
//         this.createAndUpdateList()
//       }, 20)
//     }
//   })
// )
// Your Home Page with the Coffee Icon
// Your Home Page with the Coffee Icon
class MainScreen extends React.Component {
    render() {
       return (
         <div>
           <h1>Want to focus?</h1>
           <button onClick={this.handleStartNow}>Start Now</button>
           <button onClick={this.handleSchedule}>Schedule</button>
         </div>
       );
    }
   
    handleStartNow = () => {
       this.props.navigation.navigate("SetDuration");
    };
   
    handleSchedule = () => {
       this.props.navigation.navigate("SetTime");
    };
   }
   class SetDurationScreen extends React.Component {
    state = {
       duration: 0,
    };
   
    handleChange = (event) => {
       this.setState({ duration: parseInt(event.target.value) });
    };
   
    handleSubmit = () => {
       this.props.navigation.navigate("CaffeineSelection", { duration: this.state.duration });
    };
   
    render() {
       return (
         <div>
           <h1>Set Duration</h1>
           <input type="number" onChange={this.handleChange} />
           <button onClick={this.handleSubmit}>Confirm</button>
         </div>
       );
    }
   }
   class SetTimeScreen extends React.Component {
    state = {
       time: "",
    };
   
    handleChange = (event) => {
       this.setState({ time: event.target.value });
    };
   
    handleSubmit = () => {
       this.props.navigation.navigate("CaffeineSelection", { time: this.state.time });
    };
   
    render() {
       return (
         <div>
           <h1>Set Time</h1>
           <input type="time" onChange={this.handleChange} />
           <button onClick={this.handleSubmit}>Confirm</button>
         </div>
       );
    }
   }
   class CaffeineSelectionScreen extends React.Component {
    state = {
       selection: "",
    };
   
    handleChange = (event) => {
       this.setState({ selection: event.target.value });
    };
   
    handleSubmit = () => {
       const { duration, time } = this.props.route.params;
       const path = this.state.selection === "beverage" ? "BeverageSelection" : "FoodSelection";
       this.props.navigation.navigate(path, { duration, time });
    };
   
    render() {
       return (
         <div>
           <h1>Choose your intake</h1>
           <select onChange={this.handleChange}>
             <option value="">Select...</option>
             <option value="beverage">Beverage</option>
             <option value="food">Food</option>
           </select>
           <button onClick={this.handleSubmit}>Confirm</button>
         </div>
       );
    }
   }
   class BeverageSelectionScreen extends React.Component {
    state = {
       selectedBeverage: "",
    };
   
    handleChange = (event) => {
       this.setState({ selectedBeverage: event.target.value });
    };
   
    handleSubmit = () => {
       const { duration, time } = this.props.route.params;
       this.props.navigation.navigate("FinalScreen", { duration, time, selectedBeverage: this.state.selectedBeverage });
    };
   
    render() {
       return (
         <div>
           <h1>Select a beverage</h1>
           <select onChange={this.handleChange}>
             {caffeinated_beverages.map((beverage) => (
               <option key={beverage.id} value={beverage.id}>
                 {beverage.name}
               </option>
             ))}
           </select>
           <button onClick={this.handleSubmit}>Confirm</button>
         </div>
       );
    }
   }
   class FoodSelectionScreen extends React.Component {
    state = {
       selectedFood: "",
    };
   
    handleChange = (event) => {
       this.setState({ selectedFood: event.target.value });
    };
   
    handleSubmit = () => {
       const { duration, time } = this.props.route.params;
       this.props.navigation.navigate("FinalScreen", { duration, time, selectedFood: this.state.selectedFood });
    };
   
    render() {
       return (
         <div>
           <h1>Select a food</h1>
           <select onChange={this.handleChange}>
             {caffeinated_foods.map((food) => (
               <option key={food.id} value={food.id}>
                 {food.name}
               </option>
             ))}
           </select>
           <button onClick={this.handleSubmit}>Confirm</button>
         </div>
       );
    }
   }
   class FinalScreen extends React.Component {
    render() {
       const { duration, time, selectedBeverage, selectedFood } = this.props.route.params;
   
       return (
         <div>
           <h1>Confirmation</h1>
           <p>
             Duration: {duration} minutes, Scheduled Time: {time}
           </p>
           <p>Selected: {selectedBeverage || selectedFood}</p>
           <button onClick={this.handleSubmit}>Start</button>
         </div>
       );
    }
   }
   