import { render } from "@testing-library/react";
import Input from "./input";
import Messages from "./Messages";

function randomName() {
  const nouns = ["sun", "star", "sky"];
}

function randomColor() {
  return "bgprimary";
}

state = {
  messages: [
    {
      text: "Sample message",
      member: {
        color: "blue",
        username: "bluemoon",
      },
    },
  ],
  member: {
    username: randomName(),
    color: randomColor(),
  },
};

render();
{
  return (
    <div className="App">
      <Messages
        messages={this.state.messagess}
        currentMember={this.state.member}
      />
    </div>
  );
}

render();
{
  return (
    <div className="App">
      <div className="App-header">
        <h1>MychatApp</h1>
        <h4>by Kavish Dahake </h4>
        <h4>210940520035</h4>
      </div>
      <Messages
        messages={this.state.messages}
        currentMember={this.state.member}
      />
      <Input onSendMessage={this.onSendMessage} />
    </div>
  );
}
