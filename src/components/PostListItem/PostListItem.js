import "./PostListItem.css";

const PostListItem = (props) => {
  let classNames = "app-list-item d-flex justify-content-between";

  if (props.important) {
    classNames += " important";
  }

  return (
    <div className={classNames}>
      <span className="app-list-item-label">{props.label}</span>

      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-star btn-sm">
          {" "}
          <i class="fa-solid fa-star"></i>{" "}
        </button>
        <button type="button" className="btn-trash btn-sm">
          {" "}
          <i class="fa-solid fa-trash"></i>{" "}
        </button>
        <i class="fa-solid fa-heart"></i>
      </div>
    </div>
  );
};

export default PostListItem;
