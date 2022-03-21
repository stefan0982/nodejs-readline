export const replaceAll = (str,replaceObj) => {
  const regex = new RegExp(Object.keys(replaceObj).join("|"),"gi");

  return str.replace(regex, function(matched){
    return replaceObj[matched.toLowerCase()];
  });
}