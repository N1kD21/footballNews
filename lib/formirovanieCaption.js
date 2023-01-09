'use strict';

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
  const caption = `${zagolovok}\n<a href="${linkArticle}">${nameResourse}</a>`;
  return {
    immage,
    caption
  };
};

module.exports = newObject;
