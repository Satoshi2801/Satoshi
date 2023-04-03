const express = require('express');
const path = require('path')

const web = express.Router();

//Home
web.get("/", (req, resp) => {
  return resp.sendFile(path.join(__dirname, "..","..", "public", "index.html"));
});

// About 
web.get("/about", (req, resp) => {
  return resp.sendFile(path.join(__dirname, "..","..", "public", "about.html"));
});

//Contact
web.get("/contact", (req, resp) => {
  return resp.sendFile(path.join(__dirname, "..","..", "public", "contact.html"));
});

//FAQ
web.get("/faq", (req, resp) => {
  return resp.sendFile(path.join(__dirname, "..","..", "public", "faq.html"));
});

//Feature
web.get("/feature", (req, resp) => {
  return resp.sendFile(path.join(__dirname, "..","..", "public", "feature.html"));
});

//Roadmap
web.get("/roadmap", (req, resp) => {
  return resp.sendFile(path.join(__dirname, "..","..", "public", "roadmap.html"));
});

//service
web.get("/service", (req, resp) => {
  return resp.sendFile(path.join(__dirname, "..","..", "public", "service.html"));
});

//token
web.get("/token", (req, resp) => {
  return resp.sendFile(path.join(__dirname, "..","..", "public", "token.html"));
});

//404
web.get("/404", (req, resp) => {
  return resp.sendFile(path.join(__dirname, "..","..", "public", "404.html"));
});

web.get("/*", (req, resp) => {
  return resp.sendFile(path.join(__dirname, "..", "..", "public", "404.html"));
});

module.exports = web;