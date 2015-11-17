import React from 'react';
import BlogPost from './';

const today = new Date();
export default (
  <div>
    <BlogPost
      image={{
        src: `http://cdn.static-economist.com/sites/default/files/imagecache/full-width/20151017_BLP560.jpg`,
        title: `Just an image`,
      }}
      section="International"
      flyTitle="The UN, religion and development"
      title="Faith and secular global bodies learn to live together"
      rubric="A different critique was put forward recently by a representative of the Bahai faith, which originated in 19th century Persia but is now flourishing in smallish pockets throughout the world, while facing persecution in its homeland."
      dateTime={today}
      text="THERE are many reasons why sceptics might find fault with the 17
      Sustainable Development Goals, along with 169 associated targets, which
      the leaders of the world (including the pope) will adopt, with some fanfare,
      in New York this week. One problem, as a colleague has written, is that they
      are simply too numerous. As the French statesman Georges Clemenceau
      for a new world order, were enough for the good Lord."
      itemType="http://schema.org/BlogPosting"
      itemProp="blogPost"
    />
  </div>
);
