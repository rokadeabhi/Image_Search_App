import { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";

const Images = () => {
  const { response } = useContext(ImageContext);

  return (
    <>
      <div className="container">
        {response.map((data, key) => (
          <Image key={key} data={data} />
        ))}
      </div>
    </>
  );
};

export default Images;
