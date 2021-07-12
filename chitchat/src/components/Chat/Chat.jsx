import React, { Component, createRef } from "react";
class Chat extends Component {
  chatListsWrapper = createRef();

  getSnapshotBeforeUpdate(prevProps) {
    if (prevProps.chatList.length !== this.props.chatList.length) {
      const wrapper = this.chatListsWrapper.current;
      return wrapper?.scrollHeight;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const wrapper = this.chatListsWrapper.current;
      wrapper.scrollTop = wrapper.scrollHeight - snapshot;
    }
  }
  render() {
    const { chatList, scrollHandler } = this.props;
    const chatRender = chatList.map((item) => {
      return (
        <div className={`chat ${item?.type === "reciever" && "chat-left"}`}>
          <div className="chat-avatar">
            <a className="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title data-original-title={item.name}>
              <img src={item?.type === "reciever" ? item.image2 : item.image1} alt="..." />
              <i />
            </a>
          </div>
          <div className="chat-body">
            <div className="chat-content">
              <p>{item.message}</p>
              <time className="chat-time" dateTime={item.time}>
                {item.time}
              </time>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="panel-body">
        <div className="chats" ref={this.chatListsWrapper} onScroll={scrollHandler}>
          {chatRender}
        </div>
      </div>
    );
  }
}

export default Chat;
