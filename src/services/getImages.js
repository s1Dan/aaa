const getImages = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random/40');
  const data = await response.json();
  return data.message;
};

export default getImages;
