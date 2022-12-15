const getNews = async () => {
  const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
  return response.json();
};

export default getNews;
