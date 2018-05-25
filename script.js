// BLK Panther JavaScript/jQuery

// =============================

$(document).ready(function() {

//Audio Setup
// ==========

// Creating an audio element with JavaScript
var audioElement = document.createElement("audio");

// Setting the source location
// of my BLK Panther theme song file.
audioElement.setAttribute("src","Assets/blk-panther-theme-song.mp3");

// Theme Button
$(".theme-button").on("click", function() {
  audioElement.play();
});

// Pause Button
$(".pause-button").on("click", function() {
  audioElement.pause();
});

// Size Buttons
// ============

// Normal Size
$(".normal-button").on("click", function() {
  $(".blk-panther").animate({ height: "300px" });
});

// Larger Size
$(".grow-button").on("click", function() {
  $(".blk-panther").animate({ height: "500px" });
});

// Smaller Size
$(".shrink-button").on("click", function() {
  $(".blk-panther").animate({ height: "100px" });
});

// Visibilty Buttons
// =================

// Make Visible
$(".vis-button").on("click", function() {
  $(".blk-panther").animate({ opacity: "1"});
});

// Make Invisible
$(".invis-button").on("click", function() {
  $(".blk-panther").animate({ opacity: "0.05"});
});

// Move Buttons
// ============

// Move BLK Panther Up
$(".up-button").on("click", function() {
  $(".blk-panther").animate({ top: "-=200px"},"normal");
});

// Move BLK Panther Down
$(".down-button").on("click", function() {
  $(".blk-panther").animate({ top: "+=200px"},"normal");
});

// Move BLK Panther Left
$(".left-button").on("click", function() {
  $(".blk-panther").animate({ left: "-=200px"},"normal");
});

// Move BLK Panther Right
$(".right-button").on("click", function() {
  $(".blk-panther").animate({ left: "+=200px"},"normal");
});

// Move BLK Panther Back to Original Position
$(".back-button").on("click", function() {
  $(".blk-panther").animate({ top: "50px", left: "80px"},"fast");
});

// Move Events for Keyboard Presses
// ================================

// Keyboard
$(document).keyup(function(e) {
  switch (e.which) {
    case 38:
    $(".blk-panther").animate({ top: "-=200px"}, "normal");
  }
});

// Keyboard
$(document).keyup(function(e) {
  switch (e.which) {
    case 40:
    $(".blk-panther").animate({ top: "+=200px"}, "normal");
  }
});

// Keyboard
$(document).keyup(function(e) {
  switch (e.which) {
    case 37:
    $(".blk-panther").animate({ left: "-=200px"}, "normal");
  }
});

// Keyboard
$(document).keyup(function(e) {
  switch (e.which) {
    case 39:
    $(".blk-panther").animate({ left: "+=200px"}, "normal");
  }
});

});
