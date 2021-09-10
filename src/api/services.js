const path = 'https://hacker-news.firebaseio.com/v0/';

export const getNewStoriesIds = async () => {
  let response = await fetch(`${path}/newstories.json`);

  return await response.json();
}

export const getItemById = async (id) => {
  let response = await fetch(`${path}item/${id}.json`);

  return await response.json();
}
