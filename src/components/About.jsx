import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [tracks, setTracks] = useState([]);
  const getRecentPLayedTracks = async () => {
    const response = await axios.get(
      "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bizzxle&api_key=32d3eb6b6ee9e8faa643858c983bfadf&format=json&limit=6"
    );
    console.log(response);
    if (response.status === 200) {
      setTracks(response?.data?.recenttracks?.track);
    }
  };
  useEffect(() => {
    getRecentPLayedTracks();
  }, []);

  return (
    <div>
      <div name="about" className="h-8 lg:h-0"></div>
      <div className="w-full bg-black text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-[#16B308]">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Rishabh, nice to meet you. Please take a look around.
              </p>
            </div>
            <div>
              <p>
                A self taught programmer from India. I am passionate about
                building excellent software that improves the lives of those
                around me. My dream company is Spotify. Also I'm currently learning Japanese language. In freetime I play guitar and listen to music a lot xD
              </p>
            </div>
          </div>
          <div></div>
        </div>

        {/* music section */}
        <div className="w-full max-w-3xl mx-auto my-7">
          <div className="bg-gray-950 rounded-lg">
            <div className="px-6 py-4">
              {/* <h2 className="text-2xl font-bold text-white">
                Recently Played Tracks
              </h2> */}
              <p className="text-gray-400 text-sm">
                Like I said, I listen to music alot while coding. Here are some of the tracks I recently listened to:
              </p>
            </div>
            <div className="">
              <ul className="divide-y divide-gray-800">
                {tracks?.length > 0 &&
                  tracks.map((track, index) => (
                    <li className="grid grid-cols-[48px_1fr_48px] items-center gap-4 px-6 py-3 hover:bg-gray-850 transition-colors">
                      <img
                        src={track?.image[2]["#text"]}
                        alt="Album Art"
                        width={48}
                        height={48}
                        className="rounded"
                      />
                      <div>
                        <h3 className="text-white font-medium">
                          {track?.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {track?.artist["#text"]}
                        </p>
                      </div>
                      <p className="text-gray-400 text-xs">
                        {track?.date?.["#text"] ? track?.date?.["#text"] : "Now Playing..."}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
