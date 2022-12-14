export const replaceUnderlineBy = (text: string, replaceBy: string = "") => {
  return text.replace("_", " ");
};

export const titleCase = (str: string) => {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};
