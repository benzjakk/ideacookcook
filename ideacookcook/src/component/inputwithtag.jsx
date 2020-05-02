import React, { Component } from "react";
import "./styles/inputwithT.css";
import { WithContext as ReactTags } from "react-tag-input";

const KeyCodes = {
  //comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];
class InputWithT extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Tag: [],
      suggestions: [],
      tags: [],
      userInput: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }

  async handleDelete(i) {
    const { tags, userInput } = this.state;
    await this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
    await this.setState({
      userInput: userInput.filter((userinput, index) => index !== i),
    });
    this.updateParent();
  }

  async handleAddition(tag) {
    await this.setState((state) => ({ tags: [...state.tags, tag] }));
    await this.setState({ userInput: [...this.state.userInput, tag.text] });
    this.updateParent();
  }

  handleTagClick(index) {
    console.log("The tag at index " + index + " was clicked");
  }

  updateTag() {
    this.state.Tag = this.props.Tag;

    this.state.suggestions = this.state.Tag.map((tag) => {
      return {
        id: tag,
        text: tag,
      };
    });
  }

  updateParent = () => {
    this.props.updateParent(this.state.userInput);
  };

  render() {
    this.updateTag();
    const { tags, suggestions } = this.state;
    return (
      <div>
        <ReactTags
          placeholder="    + เพิ่ม Tag"
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleTagClick={this.handleTagClick}
          autocomplete={true}
          allowDragDrop={false}
        />
      </div>
    );
  }
}

export default InputWithT;
