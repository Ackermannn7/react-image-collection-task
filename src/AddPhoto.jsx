import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const AddPhoto = () => {
  const [collections, setCollections] = React.useState();
  const navigate = useNavigate();

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

  const submit = async (event) => {
    event.preventDefault();

    const imgCollection = event.target.collection.value;

    try {
      const formData = new FormData();
      formData.append("file", event.target.photo.files[0]);
      formData.append("upload_preset", "ue8zcl33");

      const imageResponse = await axios
        .post(
          `https://api.cloudinary.com/v1_1/dfbsctfmk/image/upload`,
          formData
        )
        .then((response) => {
          const url = response.data["secure_url"];
          const currentCollection = collections.find(
            (el) => el.name === imgCollection
          );

          const newCollection = {
            ...currentCollection,
            photos: [...currentCollection.photos, url],
          };

          axios
            .put(
              `https://640c6b47a3e07380e8f4148f.mockapi.io/collection/${currentCollection.id}`,
              newCollection
            )
            .then(() => {
              alert("The image was added successfully!");
              navigate("/");
              event.target.reset();
            })
            .catch((e) => {
              console.log(e);
            });
        });
    } catch (error) {
      console.log(error);
    }
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
