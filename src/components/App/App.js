import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";

import "./App.css";

const data = [
  {
    label: "Goint to learn ReactJs",
    important: true,
    id: "qw",
  },
  {
    label: "That is so good",
    important: false,
    id: "qa",
  },
  {
    label: "I need a beak...",
    important: false,
    id: "qs",
  },
];

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
