import React from 'react';
import Teaser from '@economist/component-teaser';

export default class BlogPost extends React.Component {
  static get propTypes() {
    return {
      image: React.PropTypes.shape({
        src: React.PropTypes.string
      }),
      section: React.PropTypes.string,
      flyTitle: React.PropTypes.string,
      title: React.PropTypes.string.isRequired,
      dateTime: React.PropTypes.instanceOf(Date),
      dateFormat: React.PropTypes.func,
      text: React.PropTypes.string,
      itemType: React.PropTypes.string,
      itemProp: React.PropTypes.string,
    };
  }
  static get defaultProps() {
    return {
      itemType: 'http://schema.org/BlogPosting',
      itemProp: 'blogPost',
      dateFormat: Teaser.defaultProps.dateFormat,
    };
  }
  render() {
    const content = [];
    const groups = [];
    if (this.props.image && this.props.image.src) {
      groups.push((
        <div className="blog-post__group-image"
          key={`blog-post__group-image`}
        >
          <img {...this.props.image}
            itemProp="image"
            className="blog-post__img"
          />
        </div>));
    }
    if (this.props.section) {
      content.push((
        <h3
          className="blog-post__section"
          itemProp="section"
          key={`blog-post__section`}
        >{this.props.section}</h3>
      ));
    }
    if (this.props.flyTitle) {
      content.push((
        <h2
          className="blog-post__flytitle"
          itemProp="alternativeHeadline"
          key={`blog-post__flytitle`}
        >{this.props.flyTitle}</h2>
      ));
    }
    if (this.props.title) {
      content.push((
        <h1
          className="blog-post__title"
          itemProp="headline"
          key={`blog-post__title`}
        >{this.props.title}</h1>));
    }
    if (this.props.dateTime) {
      content.push((
        <time
          className="blog-post__datetime"
          itemProp="dateCreated"
          dateTime={this.props.dateTime}
          key={`blog-post__datetime`}
        >{this.props.dateFormat(this.props.dateTime)}</time>));
    }
    if (this.props.text) {
      content.push((
        <div
          className="blog-post__text"
          itemProp="description"
          key={`blog-post__text`}
          /* eslint-disable react/no-danger */
          dangerouslySetInnerHTML={{
            '__html': this.props.text,
          }}
        />));
    }
    groups.push((
      <div className="blog-post__group-text"
        key={`blog-post__grouptext`}
      >
        {content}
      </div>
    ));

    return (
      <article
        className="blog-post"
        itemScope itemType={this.props.itemType} itemProp={this.props.itemProp}
        role="article"
      >
        {groups}
      </article>
    );
  }
}
