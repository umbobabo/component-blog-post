import BlogPost from '../index.es6';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe(`BlogPost`, () => {
  it(`renders a section`, () => {
    const post = TestUtils.renderIntoDocument(
      <BlogPost
        section="section"
        title="Required"
      />
    );
    const elm = TestUtils.findRenderedDOMComponentWithClass(
    post, 'blog-post__section');
    elm.props.className.should.be.equal('blog-post__section');
    elm.props.children.should.be.equal('section');
  });
  it(`renders a flytitle`, () => {
    const post = TestUtils.renderIntoDocument(
      <BlogPost
        flyTitle="flytitle"
        title="Required"
      />
    );
    const elm = TestUtils.findRenderedDOMComponentWithClass(
    post, 'blog-post__flytitle');
    elm.props.className.should.be.equal('blog-post__flytitle');
    elm.props.children.should.be.equal('flytitle');
  });
  it(`renders a title`, () => {
    const post = TestUtils.renderIntoDocument(
      <BlogPost title="title" />
    );
    const elm = TestUtils.findRenderedDOMComponentWithClass(
    post, 'blog-post__title');
    elm.props.className.should.be.equal('blog-post__title');
    elm.props.children.should.be.equal('title');
  });
  it(`renders a dateTime`, () => {
    const today = new Date();
    function dateFormat(date) {
      return date.toString();
    }
    const post = TestUtils.renderIntoDocument(
      <BlogPost
        dateTime={today}
        title="Required"
        dateFormat={dateFormat}
      />
    );
    const elm = TestUtils.findRenderedDOMComponentWithClass(
    post, 'blog-post__datetime');
    elm.props.className.should.be.equal('blog-post__datetime');
    elm.props.children.should.be.equal(today.toString());
  });
  it(`renders a text`, () => {
    const post = TestUtils.renderIntoDocument(
      <BlogPost
        text="BlogPost text"
        title="Required"
      />
    );
    const elm = TestUtils.findRenderedDOMComponentWithClass(
    post, 'blog-post__text');
    elm.props.className.should.be.equal('blog-post__text');
    /* eslint-disable dot-notation */
    elm.props.dangerouslySetInnerHTML['__html'].should.be.equal('BlogPost text');
  });
  it(`renders an image`, () => {
    const img = {
      src: `//cdn.static-economist.com/sites/all/themes/econfinal/images/svg/logo.svg`,
      alt: `Example`,
    };
    const post = TestUtils.renderIntoDocument(
      <BlogPost image={img}
        title="Required"
      />);
    const elm = TestUtils.findRenderedDOMComponentWithClass(
    post, 'blog-post__img');
    elm.props.className.should.be.equal('blog-post__img');
    elm.props.src.should.be.equal('//cdn.static-economist.com/sites/all/themes/econfinal/images/svg/logo.svg');
    elm.props.alt.should.be.equal('Example');
  });
});
