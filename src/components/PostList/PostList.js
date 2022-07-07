import PostListItem from "../PostListItem";
import "./PostList.css";

const PostList = (props) => {
  const elements = props.posts.map((item) => {
    const { id, ...propsItem } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem {...propsItem} />
      </li>
    );
  });

  return <ul className="post-list list-group">{elements}</ul>;
};

export default PostList;
