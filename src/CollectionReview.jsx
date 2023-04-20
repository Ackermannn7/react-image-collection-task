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
  console.log(collection.photos);
  return (
    <div className="collection-review">
      <h2>{collection.name}</h2>
      <div className="collection-review__images">
        {collection.photos.map((image) => (
          <div className="responsive">
            <img src={image} alt={collection.name} />
          </div>
        ))}
      </div>
      <Link to="/">
        <button className="collection-review__button">
          <span>Back</span>
        </button>
      </Link>
    </div>
  );
};
