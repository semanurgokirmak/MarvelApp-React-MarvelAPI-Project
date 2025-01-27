import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { getComics } from "../api/api";

const Comics = (props) => {
  const id = props.match.params.id;
  const [comics, setComics] = useState([]);

  useEffect(() => {
    getComics(id)
      .then((res) => {
        setComics(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {comics.map((comic) => {
          const image = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
          return (
            <motion.div
              className="px-5 mb-10"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                className="mb-3  object-cover rounded-lg"
                src={image}
                alt=""
              />
              <h1 className="text-2xl text-white">{comic.title}</h1>
              <h1 className="text-md text-white">${comic.prices[0].price}</h1>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Comics;
