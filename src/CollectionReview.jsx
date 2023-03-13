import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
export const CollectionReview = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [collection, setCollection] = React.useState();

  React.useEffect(() => {
    async function fetchCollection() {
      try {
        const { data } = await axios.get(
          "https://640c6b47a3e07380e8f4148f.mockapi.io/collection/" + id
        );
        setCollection(data);
      } catch (error) {
        alert("Error fetching collection!");
        navigate("/");
      }
    }
    fetchCollection();
  }, []);

  if (!collection) {
    return "Loading ...";
  }

  return (
    <div className="collection-review">
      <h2>{collection.name}</h2>
      <div className="collection-review__images">
        {collection.photos.map((image) => (
          <img src={image} alt={collection.name} />
        ))}
      </div>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};
