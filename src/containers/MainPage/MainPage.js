import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getNewStoriesIds, getNewsById } from '../../api/getNews';
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import { routes } from "../../constans/routes";

export function MainPage() {
  const [ids, setIds] = useState([]);
  const [data, setData] = useState([]);
  const history = useHistory();
  const { newsPage } = routes;

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

  const onNewsClick = (id) => {
    history.push(`${newsPage}/${id}`);
  }

  /* let timerId = setTimeout(function update() {
    updateNews();
    console.log('updated');
    timerId = setTimeout(update, 60000);
  }, 60000); */

  return (
    <>
      <Header updateNews={updateNews}/>
      <Main onNewsClick={onNewsClick} data={data} />
    </>
  )
}