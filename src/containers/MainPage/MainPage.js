import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getNewStoriesIds, getItemById } from '../../api/services';
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import { routes } from "../../constans/routes";
import { AutoUpdater } from "../../utils/autoUpdater";
const autoUpdater = new AutoUpdater();

export function MainPage() {
  const [ids, setIds] = useState([]);
  const [data, setData] = useState([]);
  const history = useHistory();
  const { newsPage } = routes;

  useEffect(() => { 
    updateNews();
    autoUpdater.start(updateNews);
    return () => autoUpdater.stop();
  }, []);

  useEffect(() => {
    console.log('new ids', ids);
    if (ids.length > 0) {
      const promises = ids.map(id => getItemById(id));
      Promise.all(promises)
        .then(response => setData(response))
    }  
  }, [ids]);

  function updateNews() {
    getNewStoriesIds()
      .then(ids => setIds(ids.splice(0, 100)));
  }

  const handleRefresh = () => {
    autoUpdater.refresh();
    updateNews();
  }

  const onNewsClick = (id) => {
    history.push(`${newsPage}/${id}`);
  }

  console.log(data);

  return (
    <>
      <Header updateNews={handleRefresh}/>
      <Main onNewsClick={onNewsClick} data={data} />
    </>
  )
}