import React, { useEffect, useState } from "react";
import { getNewStoriesIds, getNewsById } from '../../api/getNews';
import { News } from "../../components/News/News";
import { List } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'

function MainPage() {
  const [ids, setIds] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => { 
    updateNews()
  }, []);

  useEffect(() => {
    if (ids.length > 0) {
      const promises = ids.map(id => getNewsById(id));
      Promise.all(promises)
        .then(response => setData(response))
    }  
  }, [ids]);

  function updateNews() {
    getNewStoriesIds()
      .then(ids => setIds(ids.splice(0, 100)))
  }

  /* let timerId = setTimeout(function update() {
    updateNews();
    console.log('updated');
    timerId = setTimeout(update, 60000);
  }, 60000); */

  return (
    <>
      <header className="header">
        <Button onClick={() => updateNews()} primary>
          Update
        </Button>
      </header>
      <main className="main">
        <List celled ordered>
        {
          data.map(news => (
            <List.Item>
              <News
                key={news.id}
                data={news}
              />
            </List.Item>
          ))
        }
        </List>
      </main>
    </>
  )
}

export default MainPage;
