export const encodeUrl = (text: string) => {
  return encodeURI(
    text.replaceAll("&", "and").replaceAll(" ", "-").toLowerCase()
  );
};

export const decodeUrl = (text: string) => {
  return decodeURI(
    text.replaceAll("and", "&").replaceAll("-", " ").toLowerCase()
  );
};
