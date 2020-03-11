import {Dialogs} from "./Dialogs";
import {updateNewMessageTextCreator, sendMessageCreator} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//     let state = props.store.getState();
    
//     const sendMessageHandler = () => {
//         props.store.dispatch(sendMessageCreator());
//     }
//     const updateNewMessageHandler = (value) => {
//         props.store.dispatch(updateNewMessageTextCreator(value));
//     }

//     return (
//         <Dialogs updateNewMessageHandler={updateNewMessageHandler} sendMessageHandler={sendMessageHandler} 
//         dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} currentMessageBody={state.dialogsPage.currentMessageBody} />
//     );
// }

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        currentMessageBody: state.dialogsPage.currentMessageBody,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageHandler: (value) => {
            dispatch(updateNewMessageTextCreator(value));
        },
        sendMessageHandler: () => {
            dispatch(sendMessageCreator());  
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;