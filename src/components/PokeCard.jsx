import PropTypes from "prop-types";

export const PokeCard = ({ data, loading }) => {

    const { name, img } = data;

  return (

    <>
    <div className="card w-75 m-auto mb-3 p-3 text-center shadow-sm" style={{maxWidth: "300px"}}>
    {
        loading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-grow" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
          </div>
        )
      }
      <img src={img} className="card-img-top" style={{height: "150px"}} />
      <div className="card-body">
        <h1 className="card-title">
            {name}
        </h1>
      </div>
    </div>
    </>
  );
};

PokeCard.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};
