const getParamFromUrl = (url, param) => {
  if (!url || !param) return null;

  const urlObject = new URL(url);
  const params = new URLSearchParams(urlObject.search.slice(1));

  return params.get(param);
};

export default getParamFromUrl;
