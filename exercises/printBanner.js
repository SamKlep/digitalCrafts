function printBanner(someText) {
  let bannerLength = someText.length + 4;
  let asterisk = "*";
  let bannerLine = asterisk.repeat(bannerLength);

  console.log(bannerLine);
  console.log("* " + someText + " *");
  console.log(bannerLine);
}

printBanner("Digital Crafts");