import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const AddPhoto = () => {
  const [collections, setCollections] = React.useState();

  React.useEffect(() => {
    async function fetchCollection() {
      try {
        const { data } = await axios.get(
          "https://640c6b47a3e07380e8f4148f.mockapi.io/collection/"
        );
        setCollections(data);
      } catch (error) {
        alert("Error fetching collection!");
        navigate("/");
      }
    }
    fetchCollection();
  }, []);
  console.log(collections);
  const navigate = useNavigate();

  let submit = (event) => {
    event.preventDefault();
    const imageURL = URL.createObjectURL(event.target.photo.files[0]);
    const imgCollection = event.target.collection.value;
    let newPhoto = {
      collection: imgCollection,
      img: imageURL,
    };
    console.log(newPhoto.collection);
    console.log(newPhoto.img);
    collections.map((obj) => {
      if (obj.name === newPhoto.collection) {
        return obj.photos.push(newPhoto.img);
      }
    });
    alert("The image was added successfully!");
    navigate("/");
    event.target.reset();
  };
  if (!collections) {
    return "Loading ...";
  }
  return (
    <>
      <form className="addPhotoForm" onSubmit={submit}>
        <h1>Add new Photo</h1>
        <div className="addPhotoForm__block">
          <select name="collection" id="collection">
            <option>---Выберите категорию---</option>
            {collections.map((obj, i) => (
              <option key={i}>{obj.name}</option>
            ))}
          </select>
          <input
            type="file"
            name="photo"
            id="photo"
            placeholder="Add the photo"
          />
          <div className="buttons">
            <input className="addPhotoForm__block__button" type="submit" />
            <Link to="/">
              <button className="addPhotoForm__block__button">
                <span>Назад</span>
              </button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};
