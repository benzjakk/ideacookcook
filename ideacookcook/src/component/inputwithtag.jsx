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
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  async handleAddition(tag) {
    await this.setState((state) => ({ tags: [...state.tags, tag] }));
    console.log(this.state.tags);
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
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

  render() {
    this.updateTag();
    const { tags, suggestions } = this.state;
    return (
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          handleTagClick={this.handleTagClick}
          autocomplete={true}
        />
      </div>
    );
  }
}

export default InputWithT;
