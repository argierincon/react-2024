import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const RandomGif = () => {
  const [gifList, setGifList] = useState({});

  const [update, setUpdate] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const onUpdateGif = () => {
    if (!isLoading) {
      setUpdate(!update);
    }
  };

  useEffect(() => {
    const getGifs = async () => {
      try {
        setIsLoading(true);
        const resp = await fetch(url);
        const { data } = await resp.json();

        setGifList(data);
      } catch (error) {
        console.log("ERROR:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getGifs();
  }, [update]);

  return (
    <section className="card-primary row-span-3">
      <h2 className="heading-primary">
        <span className="heading-gradient">Gifs</span>
      </h2>
      <div className="mt-4 grid grid-rows-[20px_1fr_40px] gap-4 justify-items-start">
        <p className="input-label">{gifList.title}</p>
        <img
          className="h-48"
          src={gifList.images?.downsized_medium.url}
          alt={gifList.title}
        />

        <button className="btn btn-blue" onClick={onUpdateGif}>
          {isLoading ? (
            <span className="italic">...Loading</span>
          ) : (
            "Update gif"
          )}
        </button>
      </div>
    </section>
  );
};
