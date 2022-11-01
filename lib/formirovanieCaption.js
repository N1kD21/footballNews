'use strict';
const splitCaption = require('./splitCaption.js');

const newObject = (object) => {
  if (
    object               === undefined ||
    object.linkArticle   === undefined ||
    object.nameResourse  === undefined ||
    object.zagolovok     === undefined ||
    object.immageUrl     === undefined) {
    return;
  }
  const immage        = object.immageUrl;
  const zagolovok     = object.zagolovok;
  const nameResourse  = object.nameResourse;
  const linkArticle   = object.linkArticle;
  let caption = `${zagolovok}\n<a href="${linkArticle}">${nameResourse}</a>`;
  if (caption.length > 1024) {
    caption = splitCaption(caption);
  }
  return {
    immage,
    caption
  };
};

module.exports = newObject;
