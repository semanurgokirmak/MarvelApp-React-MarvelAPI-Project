import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { getSeries } from "../api/api";

const Series = (props) => {
  const id = props.match.params.id;
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      getSeries(id).then((res) => {
        setSeries(res.data.results);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-1/2 mx-auto h-full">
          <p className="text-center text-white mt-20">Loading...</p>
        </div>
      ) : (
        <>
          <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {series.map((serie) => {
              const image = `${serie.thumbnail.path}.${serie.thumbnail.extension}`;
              return (
                <motion.div
                  className="px-5 mb-10"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 100, y: 0 }}
                  transition={{ duration: 1 }}
                  key={serie.id}
                >
                  <img
                    className="mb-3 object-cover rounded-lg"
                    src={image}
                    alt=""
                  />
                  <h1 className="text-2xl text-white">{serie.title}</h1>
                  <h1 className="text-2xl text-white">{serie.startYear}</h1>
                </motion.div>
              );
            })}
          </div>
          <h1 className="text-white font-normal md:text-xl text-center m-5">
            {series.length === 0 && "Oops, No series on this character"}
          </h1>
        </>
      )}
    </>
  );
};

export default Series;
